var rv = require('russell-view')
var style = require('./cuadro_css.js')

module.exports = function cuadro (state) {
var titulo = style['titulo']
var contenidox = style['contenido']
var cuadro = style['cuadro']
 return rv`<div class="${cuadro}">
<div class="${titulo}">${state.title}</div>
<div class="${contenidox}">${state.description}</div>
<div>${state.pubdate}</div>
<div>${state.link}</div>
</div>`	
}
