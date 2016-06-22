/* Trabajamos el worker mediante webworkify. Esto resulta mas natural que compilar el worker aparte y llamarlo desde index.html. */
var work = require('webworkify')
var worker = work(require('./worker.js'))
var morphdom = require('morphdom')

/* app, es nuestra vista principal. Contiene ademas la logica para elegir la vista en funcion de la url en el estado. */

/* Permite identificar los links locales facilmente y sin lidiar con diferencias entre navegadores. */
var localLinks = require('local-links')

/* El elemento base sobre el que vamos a correr yo.update */
var el = document.getElementById('container')
/* Por cada evento que recibimos del woker verificamos si existe el elemento base el.
   Si no existe, vaciamos el body y lo inicializamos.
   Si existe, ya podemos correr yo.update.
*/
worker.onmessage = function onmsg(ev) {
    var newel = ev.data.view
    var url = ev.data.url
  // if (!el) {
  //       var elemento = document.createElement('div')
  //         elemento.innerHTML = newel
  //         el = elemento.firstChild
  //   document.body.appendChild(el)
  // }
requestAnimationFrame( function render() { 
morphdom(el, newel)
})
/* Si la url de la barra de navegacion no coincide con la recibida, la actualizamos. */
  if (location.pathname !== url) {
    history.pushState(null, null, url)
  }
}

/* Escuchamos eventos de los botones atras y adelante del navegador y enviamos la nueva url al worker para que actualice el estado */
window.addEventListener('popstate', function () {
  worker.postMessage({type: 'setUrl', payload: location.pathname.toString()})
})
window.addEventListener('load', function () {
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
    worker.postMessage({type: 'setUrl', payload: pathname})
    return
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
  var click = JSON.parse(event.target['dataset'].click)
  if (click) {
    // console.log(typeof JSON.parse(click))
    event.preventDefault()
    worker.postMessage(click)
  }
})
