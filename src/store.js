var createStore = require('./russellstore.js')
var reducer = require('./russellreducer.js')
var app = require('./app.js')

// var cb = function () {
//   return self.postMessage({view: app(state), url: state.url})
// }
/* Creamos el store pasando como parámetros la función que lo modifica y el estado inicial. */
var store = function cs() {return createStore(reducer, 
{
  isOpen: false,
  url: ''
})
}

module.exports = store
