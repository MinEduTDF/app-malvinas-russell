var rv = require('russell-view')
var calculate = require('azimuth');
var menu = require('../modulos/menu_hidden/menu_hidden.js')
var compass = require('../modulos/brujula/brujula.js')

module.exports = function (state) {
	var az = calculate.azimuth({
  lat: 18.513929,
  lng: 73.924475,
  elv: 561.9
}, {
  lat: 18.513964,
  lng: 73.924471,
  elv: 562
});
  return rv`<div>${menu(state)}${compass(state)}</div>`

}

