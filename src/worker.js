var store = require('./store.js')
var app = require('./app.js')
var ng = require('./seccion/noticias.get.js')

module.exports = function (self) {
self.addEventListener('message', function(ev){
  if (ev.data.type === 'setUrl' && ev.data.payload === '/') ng() 
  return store(ev.data)
})
store.on('*', function (action, state, oldstate) {
  if (state !== oldstate) {
  self.postMessage({view: app(state), url: state.url})
  }
})
}
