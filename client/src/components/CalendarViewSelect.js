import React from 'react'
import CalendarViewSelectItem from './CalendarViewSelectItem'
import { CALENDAR_VIEWS } from '../constants'

const CalendarViewSelect = props => (
  <ul style={menuStyle}>
    {
      CALENDAR_VIEWS.map(item => (
        <CalendarViewSelectItem
          key={item.viewType}
          type={item.viewType}
          text={item.name}
          {...props}
        />
      ))
    }
  </ul>
)

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
