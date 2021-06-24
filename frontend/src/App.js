/** @format */

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Admin from './Components/Admin'
import HomeScreen from './Components/HomeScreen'
import RegisterEmail from './Components/RegisterEmail'

const App = () => {
  return (
    <>
      <Router>
        <>
          <Route path='/' component={HomeScreen} />
          <Route path='/register' component={RegisterEmail} />
          <Route path='/admin' component={Admin} />
        </>
      </Router>
    </>
  )
}

export default App
