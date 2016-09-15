var rv = require('russell-view')
var calculate = require('azimuth');
var menu = require('../modulos/menu_hidden/menu_hidden.js')
var cuadro_brujula = require('../modulos/cuadro_brujula/cuadro_brujula.js')

module.exports = function (state) {
return rv`<div>${menu(state)}${state.azimuth.map(cuadro_brujula, state)}</div>`
}
