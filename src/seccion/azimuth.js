var rv = require('russell-view')
var menu = require('../modulos/menu_hidden/menu_hidden.js')
var cuadro_brujula = require('../modulos/cuadro_brujula/cuadro_brujula.js')
var style = require('./secciones_css.js')

module.exports = function (state) {
  var fixit = state.isOpen ? style.fixit : ''
  return rv`<div>${menu(state)}<div class='${fixit}'><div class="${style.info}"><h1 class="${style.header}">Distancias del coraz&oacute;n</h1>La idea de esta sección es que cualquier Argentino o Amigo de Malvinas en cualquier lugar del mundo pueda conocer hacia dónde y a qué distancia se encuentran tres puntos neurales del conflicto Malvinas, y por este motivo grabados a fuego en el corazón de Argentinos, Latinoamericanos, Africanos y Todo aquel que desee apoyar el reclamo de soberanía de La República Argentina sobre las Islas Malvinas, Georgias y Sandwich del Sur.</div>${state.azimuth.map(cuadro_brujula, state)}</div></div>`
}
