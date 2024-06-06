const mongoose = require('mongoose');

// Define booking schema
const bookingSchema = new mongoose.Schema({
    tripName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    created: {
        type: Date,
        default: Date.now // Default to current date and time if not specified
    }
});

// Create mongoose model for bookings using the defined schema
mongoose.model('Booking', bookingSchema);
