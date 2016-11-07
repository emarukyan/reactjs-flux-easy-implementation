import React, { Component } from 'react'
import './App.css'
import { Router, Route, browserHistory } from 'react-router'

import List from './pages/list'
import MainPage from './pages/main'
import NotFoundPage from './pages/not-found'

class App extends Component {
  render () {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path='/' component={MainPage} />
          <Route path='/list' component={List} />
          <Route path='*' component={NotFoundPage} />
        </Router>
      </div>
    )
  }
}

export default App
