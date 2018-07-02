import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedIn: true
    }
  }

  render () {
    return (
      <div className='container'>
        <Header />
        <Main {...this.state} />
      </div>
    )
  }
}

export default App
