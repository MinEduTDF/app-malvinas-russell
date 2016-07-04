/* Nos permite mantener el estado completo de la aplicacion en un unico objeto que emite eventos ante cualquier modificacion */
var store = require('./store.js')()
var app = require('./app.js')

/* Exportamos el modulo para que pueda ser importado con webworkify. Esto nos permite manejar todo en un unico bundle de browserify sin necesidad de compilar el worker aparte. */
module.exports = function (self) {

/* Ante cualquier tipo de modificacion en el estado, enviamos el nuevo estado al UI thread para que actualice las vistas. */
// store.on('*', function ( action, state, old ) { 
//   self.postMessage({view: app(state), url: state.url})
// })

/* Ante cualquier evento proveniente del UI thread actualizamos el estado con los nuevos datos. */
self.addEventListener('message', function(ev){
  var state = store(ev.data)
      self.postMessage({view: app(state), url: state.url})
})

/* Inicializamos el UI thread enviandole el estado inicial. */
 // self.postMessage(store.getState())
}
