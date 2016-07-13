var rv = require('russell-view')
var style = require('./cuadro_css.js')

module.exports = function cuadro (state) {
var titulo = style['titulo']
var contenidox = style['contenido']
var cuadro = style['cuadro']
var tiempo = style['tiempo']
var btn = style['btn']
var divbtn = style ['divbtn']
 return rv`<div class="${cuadro}">
<div class="${titulo}">${state.title}</div>
<div class="${tiempo}">${state.pubdate}</div>
<div class="${contenidox}">${state.description}</div>
<div class="${divbtn}"><a class="${btn}" href="${state.link}" target="_blank">Ver mas</a></div>
</div>`	
}
