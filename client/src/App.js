import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { 
  loadMonthlyWorkouts,
  getEndOfMonth 
} from './utils'
import { MONTH } from './constants'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedIn: true,
      userId: 1,
      date: new Date(),
      activeStartDate: new Date(),
      activeEndDate: new Date(),
      calendarView: MONTH,
      modal: false,
      workouts: []
    }

    this.onChangeDate = this.onChangeDate.bind(this)
    this.onChangeMonth = this.onChangeMonth.bind(this)
    this.onChangeCalendarView = this.onChangeCalendarView.bind(this)
    this.onAddNewRun = this.onAddNewRun.bind(this)
    this.onSaveWorkout = this.onSaveWorkout.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
  }

  componentDidMount () {
    const { userId, date } = this.state   
    loadMonthlyWorkouts(userId, date)
    .then(workouts => {
      this.setState({
        workouts
      })
    })
    .catch(err => console.log(err))
  }

  onChangeCalendarView (type) {
    this.setState({
      calendarView: type
    })
  }

  onChangeDate (value) {
    this.setState({
      date: value
    })
  }

  onChangeMonth ({activeStartDate}) {
    const { userId } = this.state  
    loadMonthlyWorkouts(userId, activeStartDate)
    .then(workouts => {
      this.setState({
        workouts,
        date: getEndOfMonth(activeStartDate) === getEndOfMonth(new Date()) 
          ? new Date() : null,
        activeStartDate
      })
    })
    .catch(err => console.log(err))
  }

  onAddNewRun () {
    this.setState({
      modal: true
    })
  }

  onSaveWorkout (distance, time, comment) {
    console.log(`Distance: ${distance} miles`)
    console.log(`Time in seconds: ${time}`)
    console.log(`Commentary: ${comment}`)
    this.setState({
      modal: false
    })
  }

  onCloseModal () {
    this.setState({
      modal: false
    })
  }

  render () {
    return (
      <div className='container'>
        <Header
          handler={this.onAddNewRun} />
        <Main {...this.state}
          changeView={this.onChangeCalendarView}
          changeDate={this.onChangeDate}
          changeMonth={this.onChangeMonth}
          closeModal={this.onCloseModal}
          saveWorkout={this.onSaveWorkout} />
      </div>
    )
  }
}

export default App
