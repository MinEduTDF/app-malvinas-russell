var rv = require('russell-view')
var menu = require('../modulos/menu_hidden/menu_hidden.js')
var noticia = require('../modulos/cuadro/cuadro.js')
module.exports = function noticias( state ) {

return rv`<div>${menu(state)}<h1>Noticias</h1>
		${state.news.map(noticia,state)}	
	</div>`

}
