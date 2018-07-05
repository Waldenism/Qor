const express  = require('express');
const router   = express.Router();
const Workouts = require('../models/workout.js');

router.post('/addWorkout', (req, res) => {
  const {
    userId,
    type,
    distance,
    duration,
    comment,
    feeling,
    workoutDate
  } = req.body;
	
  Workouts.insertOne(userId, type, distance, duration, comment, feeling, workoutDate)
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err));
});

module.exports = router;