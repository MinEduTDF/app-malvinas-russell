var rv = require('russell-view')
var routes = require('routes')
var router = routes()
var menu = require('./modulos/menu_hidden/menu_hidden.js')
var timeline = require('./seccion/timeline.js')
var azimuth = require('./seccion/azimuth.js')
var noticias = require('./seccion/noticias.js')
var inicio = require('./seccion/inicio.js')
var mensajes = require('./seccion/mensajes.js')

router.addRoute('/', inicio)
router.addRoute('/mensajes', mensajes)
router.addRoute('/noticias', noticias)
router.addRoute('/azimuth', azimuth)
router.addRoute('/historia', timeline)
router.addRoute('/historia/:index', timeline)
router.addRoute('*', function(){return console.log('404')})

module.exports = function app(state) {
  var matched = router.match(state.url) 
  return matched.fn(state, matched.params)
}
