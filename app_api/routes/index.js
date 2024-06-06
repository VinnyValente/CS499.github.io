const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');

// Authentication middleware
const auth = jwt({
    secret: process.env.JWT_SECRET, // JWT secret key
    userProperty: 'payload', // Property in req object to store decoded token
    algorithms: ['HS256'] // Algorithm used for JWT signing
});

const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');
const bookingRouter = require('./booking');
const analyticsRouter = require('./analytics');

// Login endpoint
router
    .route('/login')
    .post(authController.login);

// Register endpoint
router
    .route('/register')
    .post(authController.register);

// Trips endpoints
router
    .route('/trips')
    .get(tripsController.tripsList); // Get all trips

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode) // Find trip by code
    .put(auth, tripsController.tripsUpdateTrip); // Update trip (requires authentication)

// Booking router
router.use('/booking', bookingRouter);

// Analytics router
router.use('/analytics', analyticsRouter);

module.exports = router;
