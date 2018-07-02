import React from 'react'

const CalendarViewSelectItem = ({
  selected, 
  handler, 
  type, 
  text
}) => (
  <li 
    style={{
      ...menuItemStyle,
      fontWeight: selected === type
        ? '700' : '400'
    }}
    className='view-select-item'
    onClick={() => handler(type)}>
    {text}
  </li>
)

const menuItemStyle = {
  marginLeft: '12px',
  fontFamily: 'var(--font-secondary)',
  color: 'var(--main-purple)'
}

export default CalendarViewSelectItem