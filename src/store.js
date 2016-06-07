var createStore = require('store-emitter')
var xtend = require('xtend')
/* Qué vamos a hacer con los eventos que reciba el store.
 * Por el momento, solo respondemos a eventos de modificacion de url. */
function modifier ( action, state ) {
  if (action.type === 'setUrl')
  return xtend(state, {url : action.payload})
  if (action.type === 'menu') {
  return xtend(state, {isOpen: !state.isOpen})

  }
}

/* Creamos el store pasando como parámetros la función que lo modifica y el estado inicial. */
var store = createStore(modifier, 
{
  isOpen: false,
  milestones: [],
  url: '/',
  title: "El titulo",
  tabs: [
  {title: "Primer titulo", content: "Primer contenido", activeTab: true},
  {title: "Segundo titulo", content: "Segundo contenido"},
  {title: "tercer titulo", content: "Segundo contenido"},
  {title: "cuarto titulo", content: "Segundo contenido"},
  {title: "cuarto titulo", content: "Segundo contenido"},
  {title: "cuarto titulo", content: "Segundo contenido"}
  ]
}
)
module.exports = store
