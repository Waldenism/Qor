import React from 'react'
import moment from 'moment'

const NewRunEntry = ({runDate}) => {
  const formattedDate = moment(runDate).format('MMM Do YY')
  return (
    <form style={formStyle} className='new-run-form'>
      <h3 style={h3Style}>
        {formattedDate}
      </h3>
      <div className='form-field'>
        <label>DISTANCE</label>
        <div className='distance-field'>
          <input name='distance' type='text' size={3} />
          <p>mi</p>
        </div>
      </div>
      <div className='form-field'>
        <label>DURATION</label>
        <div className='duration-field'>
          <input name='hours' type='text' size={3} />
          <p>hr</p>
          <input name='minutes' type='text' size={3} />
          <p>min</p>
          <input name='seconds' type='text' size={3} />
          <p>s</p>
        </div>
      </div>
      <div className='form-field'>
        <label>COMMENT</label>
        <div className='comment-field'>
          <textarea name='comment' rows={8}/>
        </div>
      </div>
      <div className='form-field'>
        <button type='submit' style={buttonStyle}>
          SAVE
        </button>
      </div>
    </form>
  )
}

const formStyle = {
  margin: '24px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start'
}

const h3Style = {
  fontFamily: 'var(--font-secondary)',
  fontSize: 'var(--small-responsive-font)',
  color: 'var(--black)',
  margin: 0,
  marginBottom: 16
}

const buttonStyle = {
  fontFamily: 'var(--font-secondary)',
  border: 'none',
  background: 'var(--black)',
  color: 'var(--white)',
  fontSize: 'var(--tiny-responsive-font)',
  padding: '8px 12px',
  marginTop: '4px'
}

export default NewRunEntry
