var rv = require('russell-view')
var routes = require('routes')
var router = routes()
var menu = require('./modulos/menu_hidden/menu_hidden.js')
var timeline = require('./seccion/timeline.js')
var azimuth = require('./seccion/azimuth.js')
var noticias = require('./seccion/noticias.js')
var inicio = require('./seccion/inicio.js')
var mensajes = require('./seccion/mensajes.js')
var agradecimientos = require('./seccion/agradecimientos.js')

router.addRoute('/', inicio)
router.addRoute('/mensajes', mensajes)
router.addRoute('/agradecimientos', agradecimientos)
router.addRoute('/noticias', noticias)
router.addRoute('/azimuth', azimuth)
router.addRoute('/historia', timeline)
router.addRoute('/historia/:index([0-9]|[1-5][0-9])', timeline)
router.addRoute('*', function () {return '404 no encontrado'})

module.exports = function app (state) {
  var matched = router.match(state.url)
  return matched.fn(state, matched.params)
}
