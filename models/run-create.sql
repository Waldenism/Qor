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

CREATE TABLE runs (
  run_id SERIAL PRIMARY KEY,
  run_user_id INTEGER REFERENCES users(user_id),
  distance REAL NOT NULL,
  seconds INTEGER NOT NULL CHECK (seconds >= 0 AND seconds < 60),
  minutes INTEGER NOT NULL CHECK (minutes >= 0 AND minutes <= 60),
  hours INTEGER NOT NULL,
  comment VARCHAR(10000), 
  feeling INTEGER,
  run_date TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);