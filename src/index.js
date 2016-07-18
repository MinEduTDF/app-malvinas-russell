var work = require('webworkify')
var worker = work(require('./worker.js'))
var morphdom = require('morphdom')
var nT = requestAnimationFrame
var localLinks = require('local-links')

var el = document.getElementById('main')

var url
worker.onmessage = function onmsg(ev) {
  url = ev.data.url
  if (location.pathname !== url) {
    history.pushState(null, null, url)
  }
nT( function render() { 
  morphdom(el, ev.data.view)
})
}
window.addEventListener('popstate', function () {
  worker.postMessage({type: 'setUrl', payload: location.pathname.toString()})
})
window.addEventListener('load', function () {
  // worker.postMessage({type: 'hydrate', payload: JSON.parse(window.state.innerText)})
  worker.postMessage({type: 'setUrl', payload: location.pathname.toString()})
})


document.body.addEventListener('click', function (event) {
  var pathname = localLinks.getLocalPathname(event)
  if (pathname) {
    event.preventDefault()
    return worker.postMessage({type: 'setUrl', payload: pathname})
  }

  if (!event.target.dataset.type) {
    return worker.postMessage({type: 'closeMenu'})
  }
  var click = {type: event.target['dataset'].type} //JSON.parse(event.target['dataset'].click)
  if (click) {
    event.preventDefault()
    return worker.postMessage(click)
  }
})
