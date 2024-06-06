const mongoose = require('mongoose');

// Define database URI
let dbURI = 'mongodb://localhost:27017/travlr';
// If in production, use environment variable for database URI
if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGODB_URI;
}
// Connect to MongoDB
mongoose.connect(dbURI);

// Event handlers for successful connection, error, and disconnection
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Function to gracefully shut down the database connection
const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

// For nodemon restarts
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});

// Import database models
require('./travlr');
require('./user');
require('./booking');
