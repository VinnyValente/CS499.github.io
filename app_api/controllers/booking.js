const mongoose = require('mongoose');
const Booking = mongoose.model('Booking');

const bookTrip = async (req, res) => {
    try {
        const { tripName, userName, cost, created } = req.body;
        const booking = new Booking({ tripName, userName, cost, created: created || Date.now() });

        await booking.save();
        res.status(201).json(booking);
    } catch (err) {
        res.status(500).json(err);
    }
};

const cancelBooking = async (req, res) => {
    try {
        const { bookingId } = req.params;

        const booking = await Booking.findById(bookingId);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        await Booking.deleteOne({ _id: bookingId });
        res.status(204).json(null);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    bookTrip,
    cancelBooking
};
