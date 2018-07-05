import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { MONTH } from './constants'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedIn: true,
      date: new Date(),
      calendarView: MONTH,
      modal: false,
      workouts: []
    }

    this.onChangeDate = this.onChangeDate.bind(this)
    this.onChangeCalendarView = this.onChangeCalendarView.bind(this)
    this.onAddNewRun = this.onAddNewRun.bind(this)
    this.onSaveWorkout = this.onSaveWorkout.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
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
          closeModal={this.onCloseModal}
          saveWorkout={this.onSaveWorkout} />
      </div>
    )
  }
}

export default App
