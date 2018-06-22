import React from 'react'

const Header = props => {
  return (
    <header style={headerStyle}>
      <h1 style={h1Style}>
        QOR
      </h1>
    </header>
  )
}

const headerStyle = {
  margin: '0 auto',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start'
}

const h1Style = {
  margin: '0',
  marginLeft: '5vw',
  marginBottom: '16px',
  color: 'var(--white)',
  fontFamily: '"Playball", cursive',
  fontSize: 'var(--big-responsive-font)',
}

const subHeaderStyle = {
  fontFamily: '"Markazi Text", serif',
  margin: '0',
  marginLeft: '5%',
  fontSize: 'var(--small-responsive-font)',
  color: 'var(--white)',
  letterSpacing: '.16em'
}

export default Header
