var rv = require('russell-view')
var menu = require('../modulos/menu_hidden/menu_hidden.js')
var compass = require('../modulos/brujula/brujula.js')

module.exports = function (state) {
  return rv`<div>${menu(state)}${compass(state)}</div>`
}
