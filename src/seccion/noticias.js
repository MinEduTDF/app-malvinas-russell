var rv = require('russell-view')
var menu = require('../modulos/menu_hidden/menu_hidden.js')
var noticia = require('../modulos/cuadro/cuadro.js')
var style = require('./secciones_css.js')
module.exports = function noticias (state) {
  var fixit = state.isOpen ? style.fixit : ''
  return rv`<div>${menu(state)}<div class='${fixit}'>
  <div class="${style.info}"><h1 class="${style.header}">Noticias</h1>Todas las Noticias exhibidas en esta sección son reproducidas del sitio web El Malvinense, al cual serán automáticamente redirigidos para ampliar el Titular.</div>
		${state.news.map(noticia,state)}	
	</div></div>`
}
