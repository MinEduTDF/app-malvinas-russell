var rv = require('russell-view')
var style = require('./cuadro_brujula_css.js')
var compass = require('../brujula/brujula.js')
var csjs = require('csjs')
var azimuth = require('azimuth')

module.exports = function cuadro (state,index) {
var titulo = style['titulo']
var contenidox = style['contenido']
var cuadro = style['cuadro']
var tiempo = style['tiempo']
var btn = style['btn']
var divbtn = style ['divbtn']
var calculo = style['calculo']

var appstate = this

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
var az = azimuth.azimuth(
    {lat: this.position.lat, lng: this.position.lng, elv: 0},
    state.coordenadas    )
var sh = Math.round(az.azimuth)
var angulo =  this.orientation + sh
var distancia = Math.round(az.distance / 1000)
var brujula = this.orientation ? compass({angulo: angulo}) : ''
 return rv`<div class="${cuadro}" style="${width}">
 <style type='text/css'>${csjs.getCss(style)}</style>
${state.img ? `<img src="${state.img}" width='100%' height='auto' style="width:100%;">` : ''}
<div  style="padding: 5px; background-color: ${color};"></div>
<h2 class="${titulo}" style="color: #565656; background-color:#f7f6f6;">${state.title}</h2>
<hr style="border: 1px dashed #dedede"/>
<div class="${contenidox}">${state.description || ''}${brujula}</div>
<div class="${calculo}">Rumbo: ${sh}º</div>
<div class="${calculo}">Distancia: ${distancia}km</div>
</div>`	
}


