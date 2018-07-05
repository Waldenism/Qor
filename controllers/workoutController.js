const Workouts = require('../models/workout.js');

module.exports = {
  getWorkouts: req => {
    const { id } = req.query;
    return new Promise((resolve, reject) => {
       Workouts.findAll(id)
      .then(results => resolve(results))
      .catch(err => reject(err));
    });
  },

  addWorkout: req => {
    return new Promise((resolve, reject) => {
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
      .then(() => resolve())
      .catch(err => reject(err));
    });
  }
}