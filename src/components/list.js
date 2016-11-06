import React, { Component } from 'react'
import ListStore from '../stores/list/store'
import AddItemBtn from './add-item-btn'

class List extends Component {
  constructor (props) {
    super(props)
    this.__onChange = this.__onChange.bind(this)
    this.state = {
      list: ListStore.getStore()
    }
  }
  componentWillMount () {
    ListStore.addChangeListener(this.__onChange)
  }

  componentWillUnMount () {
    ListStore.removeChangeListener(this.__onChange)
  }

  __onChange () {
    this.setState({list: ListStore.getStore()})
  }

  render () {
    return (
      <div className='list'>
        <AddItemBtn />
        <h3>List</h3>
        <ul>{this.state.list.map((item, idx) => {
          return <li key={idx}>{item.name}</li>
        })}</ul>
      </div>
    )
  }
}

export default List
