var rv = require('russell-view')
var style = require('./cuadro_css.js')

module.exports = function cuadro (state,index) {
var titulo = style['titulo']
var contenidox = style['contenido']
var cuadro = style['cuadro']
var tiempo = style['tiempo']
var btn = style['btn']
var divbtn = style ['divbtn']

var color1 = '#63a3c8' 
var color2 = '#426d86' 

var color = color1
if (index % 2 === 0) {
  color = color2;
}

 return rv`<div class="${cuadro}">
<div class="${titulo}" style="background-color: ${color};">${state.title}</div>
<div class="${tiempo}">${state.pubdate}</div>
<div class="${contenidox}">${state.description}</div>
<div class="${divbtn}"><a class="${btn}" style="background-color: ${color};" href="${state.link}" target="_blank">Ver mas</a></div>
</div>`	
}
