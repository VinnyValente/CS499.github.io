const mongoose = require('mongoose');
const Booking = mongoose.model('Booking');

// Function to book a trip
const bookTrip = async (req, res) => {
    try {
        const { tripName, userName, cost, created } = req.body;
        // Create new booking object
        const booking = new Booking({ tripName, userName, cost, created: created || Date.now() });

        // Save booking to database
        await booking.save();
        res.status(201).json(booking); // Created successfully
    } catch (err) {
        res.status(500).json(err); // Internal server error
    }
};

// Function to cancel a booking
const cancelBooking = async (req, res) => {
    try {
        const { bookingId } = req.params;

        // Find booking by ID
        const booking = await Booking.findById(bookingId);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' }); // Booking not found
        }

        // Delete booking from database
        await Booking.deleteOne({ _id: bookingId });
        res.status(204).json(null); // No Content
    } catch (err) {
        res.status(500).json(err); // Internal server error
    }
};

module.exports = {
    bookTrip,
    cancelBooking
};
