const mongoose = require('mongoose');
const Trip = mongoose.model('trips'); // Import Trip model
const User = mongoose.model('users'); // Import User model

// GET: /trips - returns a list of trips based on query parameters
const tripsList = (req, res) => {
    const { name, resort, minPrice, maxPrice, sortBy } = req.query;
    const query = {};
    const sort = {};

    // Apply filters based on query parameters
    if (name) query.name = new RegExp(name, 'i');
    if (resort) query.resort = new RegExp(resort, 'i');
    if (minPrice) query.perPerson = { $gte: Number(minPrice) };
    if (maxPrice) {
        if (!query.perPerson) query.perPerson = {};
        query.perPerson.$lte = Number(maxPrice);
    }

    // Apply sorting based on sortBy parameter
    switch (sortBy) {
        case 'priceAsc':
            sort.perPerson = 1;
            break;
        case 'priceDesc':
            sort.perPerson = -1;
            break;
        case 'nameAsc':
            sort.name = 1;
            break;
        case 'nameDesc':
            sort.name = -1;
            break;
        default:
            break;
    }

    // Find trips based on query and sort options
    Trip.find(query).sort(sort).exec((err, trips) => {
        if (err) {
            return res.status(500).json(err); // Internal server error
        }
        res.status(200).json(trips); // Successful response with trips data
    });
};

// GET: /trips/:tripCode - returns a single trip by tripCode
const tripsFindCode = async (req, res) => {
    Trip.find({ 'code': req.params.tripCode }).exec((err, trip) => {
        if (!trip) {
            return res.status(404).json({ "message": "Trip not found" }); // Trip not found
        } else if (err) {
            return res.status(404).json(err); // Error finding trip
        } else {
            return res.status(200).json(trip); // Successful response with trip data
        }
    });
};

// POST: creates a single trip
const tripsAddTrip = async (req, res) => {
    // Get user information and add trip
    getUser(req, res, (req, res, userName) => {
        Trip.create({ // Create new trip
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        },
        (err, trip) => {
            if (err) {
                return res.status(400).json(err); // Bad request, invalid content
            } else {
                return res.status(201).json(trip); // Created successfully
            }
        });
    });
};

// PUT: changes a single trip by tripCode
const tripsUpdateTrip = async (req, res) => {
    // Get user information and update trip
    getUser(req, res, (req, res) => {
        Trip.findOneAndUpdate({ 'code': req.params.tripCode }, { // Find and update trip
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }, { new: true })
        .then(trip => {
            if (!trip) {
                return res.status(404).send({ message: "Trip not found with code " + req.params.tripCode }); // Trip not found
            }
            res.send(trip); // Send updated trip
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({ message: "Trip not found with code " + req.params.tripCode }); // Trip not found
            }
            return res.status(500).json(err); // Internal server error
        });
    });
};

// Function to get user information
const getUser = (req, res, callback) => {
    if (req.payload && req.payload.email) {
        // Find user by email
        User.findOne({ email: req.payload.email }).exec((err, user) => {
            if (!user) {
                return res.status(404).json({ "message": "User not found" }); // User not found
            } else if (err) {
                console.log(err);
                return res.status(404).json(err); // Error finding user
            }
            callback(req, res, user.name); // Execute callback with user information
        });
    } else {
        return res.status(404).json({ "message": "User not found" }); // User not found
    }
};

module.exports = {
    tripsList,
    tripsFindCode,
    tripsAddTrip,
    tripsUpdateTrip
};
