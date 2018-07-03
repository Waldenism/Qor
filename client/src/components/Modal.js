import React from 'react'

const Modal = props => (
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
)

const modalStyle = {
  zIndex: 10,
  position: 'fixed',
  top: '5vh',
  left: '5vw',
  height: '90vh',
  width: '90vw',
  background: 'var(--main-gold)'
}

const xStyle = {
  margin: 0,
  padding: 0,
  position: 'absolute',
  top: '16px',
  right: '16px',
  fontSize: '20px',
  color: 'var(--main-purple)'
}

export default Modal
