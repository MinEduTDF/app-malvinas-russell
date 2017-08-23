var rv = require('russell-view')
var menu = require('../modulos/menu_hidden/menu_hidden.js')
var noticia = require('../modulos/noticias/noticias.js')
var style = require('./secciones_css.js')
module.exports = function noticias (state) {
  var fixit = state.isOpen ? style.fixit : ''
  return rv`<div>${menu(state)}<div class='${fixit}'>
  <div class="${style.info}"><h1 class="${style.header}">Noticias educativas</h1></div>
		${state.noticias.map(noticia,state)}	
	</div></div>`
}
