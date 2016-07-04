var xtend = require('xtend')
var  initialState = {
  isOpen: false,
  url: '/'
}

var reducers = {
  menu: function menu(action, state) {
    return xtend(state, {isOpen: !state.isOpen})
    },
  setUrl: function setUrl(action, state) {
    return xtend(state, {url: action.payload})
  },
  closeMenu: function closeMenu(action, state) {
    if(state.isOpen)
      return xtend(state, {isOpen: false})
  }
}
var reducer = function (reducers) {
  return reducers
}

// var cb = function () {
//   return self.postMessage({view: app(state), url: state.url})
// }
/* Creamos el store pasando como parámetros la función que lo modifica y el estado inicial. */
var store = function (reducers, initialState) {
  var state = initialState
  return function(action) {
    var type = action.type
    state = reducers[type](action, state) || state
    return state
  }
}
var blah = store(reducer(reducers), initialState)
module.exports = blah
