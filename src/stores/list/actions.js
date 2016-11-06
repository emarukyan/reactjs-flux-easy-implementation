var AppDispatcher = require('../AppDispatcher')
var Constants = require('../Constants')

var ListActions = {
  create: function (item) {
    AppDispatcher.dispatch({
      actionType: Constants.LISTITEM_CREATE,
      item: item
    })
  },

  remove: function (itemId) {
    AppDispatcher.dispatch({
      actionType: Constants.LISTITEM_REMOVE,
      itemId: itemId
    })
  },

  update: function (item) {
    AppDispatcher.dispatch({
      actionType: Constants.LISTITEM_UPDATE,
      item: item
    })
  }
}

export default ListActions
