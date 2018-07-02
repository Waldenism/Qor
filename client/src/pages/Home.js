import React, {Component} from 'react'
import Calendar from 'react-calendar'
import CalendarViewSelect from '../components/CalendarViewSelect'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date(),
      calendarView: 'MONTH'
    }

    this.onChangeDate = this.onChangeDate.bind(this)
    this.onChangeCalendarView = this.onChangeCalendarView.bind(this)
  }

  onChangeCalendarView (type) {
    this.setState({
      calendarView: type
    })
  }

  onChangeDate (value) {
    console.log(value)
    this.setState({
      date: value
    })
  }

  render () {
    const { date, calendarView } = this.state
    return (
      <div style={homeStyle}>
        <CalendarViewSelect
          selected={calendarView}
          handler={this.onChangeCalendarView} />
        {
          calendarView === 'MONTH'
            ? <Calendar
              className='calendar'
              tileClassName='calendar-tile'
              showNeighboringMonth={false}
              value={date}
              onChange={this.onChangeDate} />
            : 'Week View'
        }
      </div>
    )
  }
}

const homeStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

export default Home
