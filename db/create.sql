# RUN THE FOLLOWING COMMANDS 
# ======================================== #
# 1) cd db/                                #
# 2) dropdb runlogdb                       #
# 3) psql -U <username> -a -f create.sql   #
# ======================================== #
DROP DATABASE IF EXISTS runlogdb;

CREATE DATABASE runlogdb;

\c runlogdb;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(64) NOT NULL UNIQUE,
  first_name VARCHAR(64) NOT NULL,
  last_name VARCHAR(100),
  email VARCHAR(100) NOT NULL UNIQUE,
  is_admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE workouts (
  workout_id SERIAL PRIMARY KEY,
  workout_user_id INTEGER REFERENCES users(user_id),
  workout_type VARCHAR(32) CHECK (
    workout_type='RUN' OR 
    workout_type='SWIM' OR 
    workout_type='BIKE'),
  distance REAL,
  duration INTEGER NOT NULL CHECK (duration>0),
  comment VARCHAR(10000), 
  feeling INTEGER,
  workout_date TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);