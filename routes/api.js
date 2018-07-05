const express  = require('express');
const router   = express.Router();
const WorkoutController = require('../controllers/workoutController.js');

router.get('/allWorkouts', (req, res) => {
  WorkoutController.getWorkouts(req)
  .then(results => res.json(results))
  .catch(err => console.log(err));
});

router.post('/addWorkout', (req, res) => {
  WorkoutController.addWorkout(req)
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err));
});

module.exports = router;