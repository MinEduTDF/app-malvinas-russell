var rv = require('russell-view')
var menu = require('../modulos/menu_hidden/menu_hidden.js')
var noticia = require('../modulos/cuadro/cuadro.js')
module.exports = function noticias( state ) {

return rv`<div>${menu(state)}<h1>Mensajes en el tiempo</h1>
		${state.mensajes.map(noticia,state)}	
	</div>`

}
