import React from 'react'
import moment from 'moment'

const NewRunEntry = ({runDate}) => {
  const formattedDate = moment(runDate).format('MMM Do YY')
  return (
    <form style={formStyle}>
      <h3 style={h3Style}>
        {formattedDate}
      </h3>
    </form>
  )
}

const formStyle = {
  margin: '24px'
}

const h3Style = {
  fontFamily: 'var(--font-secondary)',
  fontSize: 'var(--small-responsive-font)'
}

export default NewRunEntry