const mongoose = require('mongoose');

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
        default: Date.now
    }
});

mongoose.model('Booking', bookingSchema);