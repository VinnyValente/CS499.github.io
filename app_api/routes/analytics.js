const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analytics');

// Endpoint to retrieve bookings per destination
router.get('/bookingsPerDestination', analyticsController.getBookingsPerDestination);

module.exports = router;
