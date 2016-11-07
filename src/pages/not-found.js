import React, { Component } from 'react'
import '../App.css'

export default class NotFoundPage extends Component {
  render () {
    return (
      <div className='App'>
        <div>
          <h3>404 page not found</h3>
          <p>We are sorry but the page you are looking for does not exist.</p>
        </div>
      </div>
    )
  }
}
