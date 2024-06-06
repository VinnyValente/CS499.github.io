const express = require('express');
const router = express.Router();
const bookingsController = require('../controllers/booking');

router.post('/book', bookingsController.bookTrip);
router.delete('/cancel/:bookingId', bookingsController.cancelBooking);

module.exports = router;
