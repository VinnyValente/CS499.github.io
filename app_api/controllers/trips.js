const mongoose = require('mongoose')
const Trip = mongoose.model('trips')
const User = mongoose.model('users');

const tripsList = (req, res) => {
    const { name, resort, minPrice, maxPrice, sortBy } = req.query;
    const query = {};
    const sort = {};

    if (name) query.name = new RegExp(name, 'i');
    if (resort) query.resort = new RegExp(resort, 'i');
    if (minPrice) query.perPerson = { $gte: Number(minPrice) };
    if (maxPrice) {
        if (!query.perPerson) query.perPerson = {};
        query.perPerson.$lte = Number(maxPrice);
    }

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

    Trip.find(query).sort(sort).exec((err, trips) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(trips);
    });
};

// GET: /trips/:tripCode - returns a single trip
const tripsFindCode = async (req, res) => {
    Trip
        .find({ 'code': req.params.tripCode })
        .exec((err, trip) => {
            if (!trip) {
                return res
                    .status(404)
                    .json({ "message": "Trip not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trip)
            }
        });
};

// POST: creates a single trip
const tripsAddTrip = async (req, res) => {
    getUser(req,res,
        (req, res) => {
        Trip
            .create({
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
                    return res
                        .status(400)  // bad request, invalid content
                        .json(err);
                } else {
                    return res
                        .status(201) // created
                        .json(trip);
                }
            })
        }
    )
}

// PUT: changes a single trip
const tripsUpdateTrip = async (req, res) => {
    getUser(req,res,
        (req, res) => {
        console.log(req.body);
        Trip
            .findOneAndUpdate({ 'code': req.params.tripCode }, {
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
                    return res
                        .status(404)
                        .send({
                            message: "Trip not found with code " + req.params.tripCode
                    });
                }
                res.send(trip);
            }).catch(err => {
                if (err.kind === 'ObjectId') {
                    return res
                        .status(404)
                        .send({
                            message: "Trip not found with code " + req.params.tripCode
                        });
                }
                return res
                    .status(500) // server error
                    .json(err);
            });
        }
    )
}

const getUser = (req, res, callback) => {
    if (req.payload && req.payload.email) {
        User
            .findOne({ email: req.payload.email })
            .exec((err, user) => {
                if (!user) {
                    return res
                        .status(404)
                        .json({ "message": "User not found" });
                } else if (err) {
                    console.log(err);
                    return res
                        .status(404)
                        .json(err);
                }
                callback(req,res,user.name);
            });
        } else {
            return res
                .status(404)
                .json({ "message": "User not found" });
        
    }
};

module.exports = {
    tripsList,
    tripsFindCode,
    tripsAddTrip,
    tripsUpdateTrip
};