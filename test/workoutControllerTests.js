const should = require('should'),
  sinon = require('sinon');

describe('Workout Controller tests', () => {
  describe('Get by id', () => {
    it('should get a JSON object with the correct fields', () => {
      var workoutController = require('../controllers/workoutControler')(Workout);

      workoutController.get('/workout', res);


    });
  });

});
