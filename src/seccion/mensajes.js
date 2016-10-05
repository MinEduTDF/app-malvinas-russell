var rv = require('russell-view')
var menu = require('../modulos/menu_hidden/menu_hidden.js')
var noticia = require('../modulos/cuadro/cuadro.js')
var style = require('./secciones_css.js')
module.exports = function noticias (state) {
  var fixit = state.isOpen ? style.fixit : ''
  return rv`<div>${menu(state)}<div class='${fixit}'>
  <div class="${style.info}"><h1 class="${style.header}">Mensajes en el tiempo</h1>En esta Sección encontrarán escritos y cartas de puño y letra de los protagonistas de una gesta de lucha por la justicia, que no solo es de la República Argentina, sino de todos los pueblos y naciones que viven en el mundo libre.</div>
		${state.mensajes.map(noticia)}	
	</div></div>`
}
