const express = require('express');
const router = express.Router();
const bookingsController = require('../controllers/booking');

// Endpoint to book a trip
router.post('/book', bookingsController.bookTrip);

// Endpoint to cancel a booking by bookingId
router.delete('/cancel/:bookingId', bookingsController.cancelBooking);

module.exports = router;
