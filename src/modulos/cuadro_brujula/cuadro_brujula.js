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
var az = azimuth.azimuth(
    {lat: this.position.lat, lng: this.position.lng, elv: 0},
    state.coordenadas    )
var sh = Math.round(az.azimuth)
var angulo =  this.orientation + sh
var distancia = Math.round(az.distance / 1000)
var brujula = this.orientation ? compass({angulo: angulo}) : ''
 return rv`<div class="${cuadro}" style="${width}">
 <style type='text/css'>${csjs.getCss(style)}</style>
<img src="${state.img}">
<div class="${titulo}" style="background-color: ${color};">${state.title}</div>
<div class="${contenidox}">${state.description || ''}${brujula}</div>
<div>Rumbo: ${sh}º</div>
<div>Distancia: ${distancia}km</div>
</div>`	
}
