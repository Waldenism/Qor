import React from 'react'
import CalendarViewSelectItem from './CalendarViewSelectItem'

const CalendarViewSelect = props => (
  <ul style={menuStyle}>
    {
      calendarViews.map(item => (
        <CalendarViewSelectItem
          key={item.view}
          type={item.view}
          text={item.name}
          {...props}
        />
      ))
    }
  </ul>
)

const calendarViews = [
  {
    view: 'MONTH',
    name: 'Month'
  }, {
    view: 'WEEK',
    name: 'Week'
  }
]

const menuStyle = {
  listStyleType: 'none',
  margin: 0,
  marginRight: '5vw',
  marginBottom: '16px',
  padding: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  alignSelf: 'flex-end'
}

export default CalendarViewSelect
