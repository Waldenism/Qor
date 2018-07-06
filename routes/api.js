const express  = require('express');
const router   = express.Router();
const WorkoutController = require('../controllers/workoutController.js');

router.get('/allWorkouts', WorkoutController.getAllWorkouts);
router.get('/allWorkoutsRange', WorkoutController.getWorkoutsByDateRange);
router.post('/addWorkout', WorkoutController.addWorkout);

module.exports = router;