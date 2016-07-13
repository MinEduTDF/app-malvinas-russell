var rv = require('russell-view')
var menu = require('../modulos/menu_hidden/menu_hidden.js')
var noticia = require('../modulos/cuadro/cuadro.js')
module.exports = function noticias( state ) {
	return rv`<div>${menu(state)}
    ${state.news.map(noticia)}
  </div>`
}

