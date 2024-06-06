const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analytics');

router.get('/bookingsSummary', analyticsController.bookingsSummary);

module.exports = router;
