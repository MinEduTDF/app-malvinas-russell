var yo = require('yo-yo')
var wayfarer = require('wayfarer')
var login = require('./modulos/login/login.js')
var router = wayfarer('/404')
module.exports = function (state) {
  router.on('/', function () {return yo`<h1>Hola</h1>`})
  router.on('/login', function(){return login('blah')})
  router.on('/404', function () {return undefined})
  return router(state.url)
}
