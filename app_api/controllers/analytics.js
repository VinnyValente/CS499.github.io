const mongoose = require('mongoose');
const Booking = mongoose.model('Booking');

// Function to get bookings per destination
const getBookingsPerDestination = async (req, res) => {
    try {
        // Aggregate bookings to get total bookings and revenue per destination
        const result = await Booking.aggregate([
            {
                $group: {
                    _id: "$tripName", // Group by tripName
                    totalBookings: { $sum: 1 }, // Calculate total bookings
                    totalRevenue: { $sum: "$cost" } // Calculate total revenue
                }
            },
            {
                $sort: { totalBookings: -1 } // Sort by total bookings in descending order
            }
        ]);

        res.status(200).json(result); // Successful response with aggregated data
    } catch (err) {
        res.status(500).json({ message: err.message }); // Internal server error
    }
};

module.exports = {
    getBookingsPerDestination
};
