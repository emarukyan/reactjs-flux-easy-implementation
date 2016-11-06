import React, { Component } from 'react'
import ListActions from '../stores/list/actions'
import ListStore from '../stores/list/store'

class AddItemBtn extends Component {
  constructor (props) {
    super(props)
    this.createItem = this.createItem.bind(this)
    this.__onChange = this.__onChange.bind(this)
    this.state = {
      listLength: ListStore.getStore().length
    }
  }
  componentWillMount () {
    ListStore.addChangeListener(this.__onChange)
  }

  componentWillUnMount () {
    ListStore.removeChangeListener(this.__onChange)
  }

  __onChange () {
    this.setState({listLength: ListStore.getStore().length})
  }

  createItem (e) {
    ListActions.create({
      name: 'New item: ' + (this.state.listLength + 1)
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.createItem}>Add Item</button>
      </div>
    )
  }
}

export default AddItemBtn
