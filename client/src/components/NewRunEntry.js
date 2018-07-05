import React, { Component } from 'react'
import moment from 'moment'
import {
  DISTANCE_ERROR,
  DURATION_TOTAL_ERROR
} from '../constants'
import {
  checkDistance,
  checkDurationValue,
  checkTotalDuration,
  durationValueError
} from '../utils'

class NewRunEntry extends Component {
  constructor (props) {
    super(props)
    this.state = {
      distance: '',
      hours: '',
      minutes: '',
      seconds: '',
      comment: '',
      errors: [
        false,
        false,
        false,
        false,
        false
      ]
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    const {
      distance,
      hours,
      minutes,
      seconds,
      comment
    } = this.state
    const validDistance = checkDistance(distance)
    const validHours = checkDurationValue(hours)
    const validMinutes = checkDurationValue(minutes)
    const validSeconds = checkDurationValue(seconds)
    const validTotalDuration = checkTotalDuration(hours, minutes, seconds)
    if (!validDistance ||
        !validHours ||
        !validMinutes ||
        !validSeconds ||
        !validTotalDuration) {
      this.setState({
        errors: [
          !validDistance,
          !validHours,
          !validMinutes,
          !validSeconds,
          !validTotalDuration
        ]
      })
    } else {
      const { handler } = this.props
      const hoursToSeconds = hours !== '' ? parseInt(hours) * 3600 : 0
      const minutesToSeconds = minutes !== '' ? parseInt(minutes) * 60 : 0
      const secondsToSeconds = seconds !== '' ? parseInt(seconds) : 0
      const totalSeconds = hoursToSeconds + minutesToSeconds + secondsToSeconds
      handler(distance, totalSeconds, comment)
    }
  }

  render () {
    const { runDate } = this.props
    const { errors } = this.state
    const formattedDate = moment(runDate).format('MMM Do YY')

    return (
      <form style={formStyle} className='new-run-form'
        onSubmit={this.handleSubmit}>
        <h3 style={h3Style}>
          {formattedDate}
        </h3>
        <div className='form-field'>
          <label>DISTANCE</label>
          <div className='distance-field'>
            <input name='distance' type='text' size={3}
              onChange={this.handleChange} />
            <p>mi</p>
          </div>
        </div>
        <div className='form-field'>
          <label>DURATION</label>
          <div className='duration-field'>
            <input name='hours' type='text' size={3}
              onChange={this.handleChange} />
            <p>hr</p>
            <input name='minutes' type='text' size={3}
              onChange={this.handleChange} />
            <p>min</p>
            <input name='seconds' type='text' size={3}
              onChange={this.handleChange} />
            <p>s</p>
          </div>
        </div>
        <div className='form-field'>
          <label>COMMENT</label>
          <div className='comment-field'>
            <textarea name='comment' rows={5}
              onChange={this.handleChange} />
          </div>
        </div>
        <div className='form-field'>
          <button type='submit' style={buttonStyle}>
            SAVE
          </button>
        </div>
        <div className='form-field'>
          { errors[0] && <NewRunError message={DISTANCE_ERROR} /> }
          { errors[1] && <NewRunError message={durationValueError('Hours')} /> }
          { errors[2] && <NewRunError message={durationValueError('Minutes')} /> }
          { errors[3] && <NewRunError message={durationValueError('Seconds')} /> }
          { errors[4] && <NewRunError message={DURATION_TOTAL_ERROR} /> }
        </div>
      </form>
    )
  }
}

const NewRunError = ({message}) => (
  <small style={runErrorStyle}>
    *{message}
  </small>
)

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

const runErrorStyle = {
  fontFamily: 'var(--font-secondary)',
  color: 'red'
}

export default NewRunEntry
