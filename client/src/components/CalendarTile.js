import React from 'react'

const CalendarTile = ({values}) => {
  if (values.length > 0) {
    console.log(values)
  }
  return (
    <div style={tileStyle}>
      {
        values.map(v => (
          <div 
            key={v.workout_id}
            style={circleStyle} />
        ))
      }
    </div>
  )
}

const tileStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flexStart',
  alignItems: 'flexStart',
  float: 'left',
  clear: 'right'
}

const circleStyle = {
  height: '6px',
  width: '6px',
  backgroundColor: 'green',
  borderRadius: '50%',
  marginBottom: '1px'
}

export default CalendarTile