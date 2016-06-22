var rv = require('russell-view')
var wayfarer = require('wayfarer')
var login = require('./modulos/login/login.js')
var menu = require('./modulos/menu_hidden/menu_hidden.js')
var router = wayfarer('/404')
module.exports = function app(state) {
  router.on('/', function () {return rv`<div id='container'><h1><a href='/login'>login</a> <a href='/menu'>menu</a></h1></div>`})
  router.on('/menu', function (){return menu(state)})
  router.on('/login', function () {return login(state)})
  router.on('/404', function () {return undefined})
  return router(state.url)
}
