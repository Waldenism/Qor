import React from 'react'

const Modal = props => (
  <div style={outerModalStyle}>
    <div
      style={modalStyle}
      className='modal'>
      <p
        style={xStyle}
        className='modal-close-x'
        onClick={props.handleClose}>
        x
      </p>
      {props.children}
    </div>
  </div>
)

const outerModalStyle = {
  zIndex: 5,
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100vw',
  background: 'var(--black-fade)'
}

const modalStyle = {
  zIndex: 10,
  position: 'fixed',
  top: '5vh',
  left: '5vw',
  height: '90vh',
  width: '90vw',
  background: 'var(--main-gold)',
  overflowY: 'scroll'
}

const xStyle = {
  margin: 0,
  padding: 0,
  position: 'absolute',
  top: '16px',
  right: '16px',
  fontSize: '20px',
  color: 'var(--black)'
}

export default Modal
