const client = require('./connection.js');

module.exports = {
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