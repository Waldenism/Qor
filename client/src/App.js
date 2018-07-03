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
      modal: false
    }

    this.onChangeDate = this.onChangeDate.bind(this)
    this.onChangeCalendarView = this.onChangeCalendarView.bind(this)
    this.onAddNewRun = this.onAddNewRun.bind(this)
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
          closeModal={this.onCloseModal} />
      </div>
    )
  }
}

export default App
