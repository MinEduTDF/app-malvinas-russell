var rv = require('russell-view')
var routes = require('routes')
var router = routes()
var menu = require('./modulos/menu_hidden/menu_hidden.js')
var timeline = require('./seccion/timeline.js')
var azimuth = require('./seccion/azimuth.js')
var noticiasget = require('./seccion/noticias.get.js')

router.addRoute('/', noticiasget)
router.addRoute('/azimuth', azimuth)
router.addRoute('/historia', timeline)
router.addRoute('*', function(){return console.log('404')})

module.exports = function app(state) {
  return router.match(state.url).fn(state)
}
