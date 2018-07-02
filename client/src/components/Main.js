import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'

const Main = props => {
  return (
    <Router>
      <main>
        <Route exact path='/' component={() => (
          props.loggedIn
            ? <Home {...props} />
            : <Login />
        )} />
      </main>
    </Router>
  )
}

export default Main
