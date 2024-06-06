const mongoose = require('mongoose');
const Booking = mongoose.model('Booking');

const bookingsSummary = (req, res) => {
    Booking.aggregate([
        {
            $group: {
                _id: '$trip',
                totalBookings: { $sum: 1 },
                averageCost: { $avg: '$cost' }
            }
        },
        {
            $sort: { totalBookings: -1 }
        }
    ]).exec((err, summary) => {
        if (err) {
            return res.status(400).json(err);
        }
        res.status(200).json(summary);
    });
};

module.exports = {
    bookingsSummary
};
