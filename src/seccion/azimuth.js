var rv = require('russell-view')
var calculate = require('azimuth');
var menu = require('../modulos/menu_hidden/menu_hidden.js')
var cuadro_brujula = require('../modulos/cuadro_brujula/cuadro_brujula.js')

module.exports = function (state) {
  var fixit = state.isOpen ? `position: fixed; overflow: hidden;` : '' 
return rv`<div>${menu(state)}<div style='${fixit}'><h1>Distancias del coraz&oacute;n</h1>${state.azimuth.map(cuadro_brujula, state)}</div></div>`
}
