var store = require('./store.js')
var app = require('./app.js')

module.exports = function (self) {
self.addEventListener('message', function(ev){
  return store(ev.data)
})
store.on('*', function (action, state, oldstate) {
  if (state !== oldstate) {
  self.postMessage({view: app(state), url: state.url})
  }
})
}
