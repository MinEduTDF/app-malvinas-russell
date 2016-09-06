var rv = require('russell-view')
var style = require('./cuadro_brujula_css.js')
var compass = require('../brujula/brujula.js')
var csjs = require('csjs')


module.exports = function cuadro (state,index) {
var titulo = style['titulo']
var contenidox = style['contenido']
var cuadro = style['cuadro']
var tiempo = style['tiempo']
var btn = style['btn']
var divbtn = style ['divbtn']

var appstate = state

var color1 = '#175f8a'
var color2 = '#f08030' 
 

var color = color1
if (index % 2 === 0) {
  color = color2;
}

var width = ""
if (appstate.windowWidth > 690) {
width = "float: left; width: 47%; "
} 

if (appstate.windowWidth > 850) {
width = "float: left; width: 47.5%; "
} 

if (appstate.windowWidth > 1108) {
width = "float: left; width: 31.5%; "
}

if (appstate.windowWidth > 1170) {
width = "float: left; width: 31.6%; "
}

 return rv`<div class="${cuadro}" style="${width}">
 <style type='text/css'>${csjs.getCss(style)}</style>
<div class="${titulo}" style="background-color: ${color};">Titulo</div>
<div class="${contenidox}">${compass(state)}</div>
<div class="${divbtn}"><a class="${btn}" style="background-color: ${color};" href="asdasdsadsad" target="_blank">Ver mas</a></div>
</div>`	
}