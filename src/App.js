import React, { Component } from 'react'
import './App.css'
import List from './components/list'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <List />
        <hr />
        <p className='App-intro'>
          To get started add your components in components page.<br />
          Use List store as an example of store, and List component as an <br />
          example of subscribing to store changes.
          Add new constants in the ./src/stores/Constants.js<br />
          Use AddItemBtn as an example of fireing action from another component and reacting to an event of particlar store (List store)
        </p>
      </div>
    )
  }
}

export default App
