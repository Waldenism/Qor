import React from 'react'

const Header = props => {
  return (
    <header style={headerStyle}>
      <h1 style={h1Style}>
        Run Log
      </h1>
      <img
        src='./plus-purple.svg'
        style={newButtonStyle}
        alt='add new run' />
    </header>
  )
}

const headerStyle = {
  margin: '0 auto',
  marginBottom: '16px',
  width: 'calc(100% - 10vw)',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #DDD'
}

const h1Style = {
  margin: '0',
  marginBottom: '16px',
  width: 'calc(100vw - 10vw)',
  color: 'var(--main-purple)',
  fontFamily: 'var(--font-display), cursive',
  fontSize: 'var(--big-responsive-font)',
  fontStyle: 'italic'
}

const newButtonStyle = {
  height: '48px',
  width: '48px'
}

export default Header
