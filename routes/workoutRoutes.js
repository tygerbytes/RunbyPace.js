const express = require('express');

const routes = () => {
  const workoutRouter = express.Router();

  const workoutController = require('../controllers/workoutControler');
  workoutRouter.route('/')
    .get(workoutController.get);

  return workoutRouter;
};

module.exports = routes;