var EventEmitter = require('events').EventEmitter
var assign = require('object-assign')
var AppDispatcher = require('../AppDispatcher')
var utils = require('../../utils')

var CHANGE_EVENT = 'change'
// EventEmitter.defaultMaxListeners = 1000
var _store = []

var ListStore = assign({}, EventEmitter.prototype, {
  __action__listitemCreate: function (actionPayload) {
    _store.push(actionPayload.item)
    ListStore.emitChange()
  },

  getStore: function () {
    return utils.copyArray(_store)
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT)
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  dispatcherIndex: AppDispatcher.register(function (payload) {
    if (typeof ListStore[payload.actionType] === 'function') {
      return ListStore[payload.actionType](payload)
    }
    return true // No errors. Needed by promise in Dispatcher.
  })
})

export default ListStore
