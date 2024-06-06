const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

// Define user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    hash: String,
    salt: String
});

// Method to set password for user
userSchema.methods.setPassword = function(password) {
    // Generate a random salt
    this.salt = crypto.randomBytes(16).toString('hex');
    // Create hash using password and salt
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

// Method to validate password for user
userSchema.methods.validPassword = function(password) {
    // Recreate hash using provided password and salt, then compare with stored hash
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

// Method to generate JWT token for user
userSchema.methods.generateJwt = function() {
    // Set token expiration date to 7 days from now
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    // Generate JWT token containing user information
    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        exp: parseInt(expiry.getTime() / 1000, 10),
    }, process.env.JWT_SECRET);
};

// Create mongoose model for users using the defined schema
mongoose.model('users', userSchema);
