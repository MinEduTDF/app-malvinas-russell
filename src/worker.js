var store = require('./store.js')
var app = require('./app.js')

module.exports = function (self) {
self.addEventListener('message', function(ev){
  // var actualstate = store(ev.data)
  //     self.postMessage({view: app(actualstate), url: actualstate.url})
  return store(ev.data)
})
store.on('*', function (action, state, oldstate) {
  self.postMessage({view: app(state), url: state.url})
})
}
