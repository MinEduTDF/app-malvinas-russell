/* Trabajamos el worker mediante webworkify. Esto resulta mas natural que compilar el worker aparte y llamarlo desde index.html. */
var work = require('webworkify')
var worker = work(require('./worker.js'))
var morphdom = require('morphdom')
var nT = requestAnimationFrame
/* app, es nuestra vista principal. Contiene ademas la logica para elegir la vista en funcion de la url en el estado. */

/* Permite identificar los links locales facilmente y sin lidiar con diferencias entre navegadores. */
var localLinks = require('local-links')

/* El elemento base sobre el que vamos a correr yo.update */
var el = document.getElementById('main')
/* Por cada evento que recibimos del woker verificamos si existe el elemento base el.
   Si no existe, vaciamos el body y lo inicializamos.
   Si existe, ya podemos correr yo.update.
*/
var url
worker.onmessage = function onmsg(ev) {
  url = ev.data.url
  if (location.pathname !== url) {
    history.pushState(null, null, url)
  }
nT( function render() { 
  // newel = ev.data.view
  morphdom(el, ev.data.view)
  // el.innerHTML = ev.data.view
})
}
/* Si la url de la barra de navegacion no coincide con la recibida, la actualizamos. */

/* Escuchamos eventos de los botones atras y adelante del navegador y enviamos la nueva url al worker para que actualice el estado */
window.addEventListener('popstate', function () {
  worker.postMessage({type: 'setUrl', payload: location.pathname.toString()})
})

function changeWidth() {
  worker.postMessage({type: 'changeWidth', payload: window.innerWidth})
}
window.addEventListener('resize', changeWidth)
window.addEventListener('load', function () {
  // worker.postMessage({type: 'hydrate', payload: JSON.parse(window.state.innerText)})
  changeWidth()
  worker.postMessage({type: 'setUrl', payload: location.pathname.toString()})
})


// Escuchamos todos los clicks.
document.body.addEventListener('click', function (event) {
  // handles internal navigation defined as
  // clicks on <a> tags that have `href` that is
  // on the same origin.
  // https://www.npmjs.com/package/local-links
  var pathname = localLinks.getLocalPathname(event)
  if (pathname) {
    // stop browser from following the link
    event.preventDefault()
    // instead, post the new URL to our worker
    // which will trigger compute a new vDom
    // based on that new URL state
    return worker.postMessage({type: 'setUrl', payload: pathname})
  }

  // this is for other "onClick" type events we want to
  // respond to. We check existance of an `data-click`
  // attribute and if it exists, post that back.
  // In our case, the messages look like either
  // {type: "increment"}
  // or
  // {type: "decrement"}
  // but could contain any serializable payload
  // describing the action that occured
  // worker.postMessage({type: 'closeMenu'})
  if (!event.target.dataset.type) {
    return worker.postMessage({type: 'closeMenu'})
  }
  var click = {type: event.target['dataset'].type} //JSON.parse(event.target['dataset'].click)
  if (click) {
    event.preventDefault()
    return worker.postMessage(click)
  }
})
