// Load the SDK for JavaScript
const AWS = require('aws-sdk');

// Load credentials and set region from JSON file
// TODO: How should this config file be handled?
// AWS.config.loadFromPath('./config.json');

const workoutController = (Workout) => {

  const get = (req, res) => {
    var query = {};
    // TODO: As soon as we get the database wired up
  };

  return {
    get: get
  }
};

module.exports = workoutController;