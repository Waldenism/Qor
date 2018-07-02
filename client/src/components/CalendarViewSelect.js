import React from 'react'

const CalendarViewSelect = ({selected, handler}) => (
  <ul style={menuStyle}>
    {
      views.map(item => (
        <li
          key={item.type}
          style={{
            ...menuItemStyle,
            fontWeight: selected === item.type
              ? '700' : '400'
          }}
          className='view-select-item'
          onClick={() => handler(item.type)}>
          {item.name}
        </li>
      ))
    }
  </ul>
)

const views = [
  {
    type: 'MONTH',
    name: 'Month'
  }, {
    type: 'WEEK',
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

const menuItemStyle = {
  marginLeft: '12px',
  fontFamily: 'var(--font-secondary)',
  color: 'var(--main-purple)'
}

export default CalendarViewSelect
