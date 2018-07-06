const client = require('./connection.js');

module.exports = {
  findAll: id => {
    return new Promise((resolve, reject) => {
      const query = {
        text: `SELECT workout_id, workout_type, distance, duration, comment, workout_date 
        	FROM workouts WHERE workout_user_id=$1`,
        values: [id]
      };

      client.query(query, (err, res) => {
        if (err) {
          reject(err.stack);
        } else {
          resolve(res.rows);
        }
      });
    });
  },

  findAllRange: (uid, start, end) => {
    return new Promise ((resolve, reject) => {
      const query={
        text: `SELECT workout_id, workout_type, distance, duration, comment, workout_date
          FROM workouts WHERE workout_user_id=$1 AND workout_date>=$2 AND workout_date<=$3`,
        values: [uid, start, end] 
      }

      client.query(query, (err, res) => {
        if (err) {
          reject(err.stack);
        } else {
          resolve(res.rows);
        }
      });
    });
  },

  insertOne: (...args) => {
    return new Promise((resolve, reject) => {
      const text = `INSERT INTO workouts(
        workout_user_id, 
        workout_type, 
        distance, 
        duration, 
        comment,
        feeling,
        workout_date
        )
        VALUES($1, $2, $3, $4, $5, $6, $7)`;
      const values = args;

      client.query(text, values, (err, res) => {
        if (err) {
          reject(err.stack);
        } else {
          resolve();
        }
      });
    });
  }
}