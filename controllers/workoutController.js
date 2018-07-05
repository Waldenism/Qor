const Workouts = require('../models/workout.js');

module.exports = {
  getWorkouts: (req, res) => {
    const { id } = req.query;
    
     Workouts.findAll(id)
    .then(results => res.json(results))
    .catch(err => console.log(err));
  },

  addWorkout: (req, res) => {
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
  }
}