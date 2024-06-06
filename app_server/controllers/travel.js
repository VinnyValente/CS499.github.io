const request = require('request');

// Configuration for API server
const apiOptions = {
    server: 'http://localhost:3000'
};

/* Render travel list view */
const renderTravelList = (req, res, responseBody) => {
    let message = null;
    // Dynamically set page title based on npm package description
    let pageTitle = process.env.npm_package_description + ' - Travel';

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No trips exist in database!';
        }
    }

    // Render the travel view with appropriate data
    res.render('travel', {
        title: pageTitle,
        trips: responseBody,
        message
    });
};

/* GET travel list view */
const travelList = (req, res) => {
    const path = '/api/trips';
    const query = req.query;
    const requestOptions = {
        // Construct URL for API request
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
        qs: query
    };

    // Log the API endpoint being called
    console.info('>> travelController.travelList calling ' + requestOptions.url);

    // Make request to API server
    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            // Render travel list view with response data
            renderTravelList(req, res, body);
        }
    );
};

module.exports = {
    travelList
};
