import React from 'react'
import Calendar from 'react-calendar';

const Home = props => (
  <Calendar 
    className="calendar"
    tileClassName="calendar-tile"
    showNeighboringMonth={false}
    value={props.date}
    onChange={props.onChange} />
)

export default Home
