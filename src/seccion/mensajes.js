var rv = require('russell-view')
var menu = require('../modulos/menu_hidden/menu_hidden.js')
var noticia = require('../modulos/cuadro/cuadro.js')
module.exports = function noticias( state ) {

var scroll = state.isOpen ? "hidden" : "scroll"

return rv`<div>${menu(state)}<div style="overflow-y: ${scroll}; height:92%;"><h1>Mensajes en el tiempo</h1>
		${state.mensajes.map(noticia,state)}	
	</div></div>`

}
