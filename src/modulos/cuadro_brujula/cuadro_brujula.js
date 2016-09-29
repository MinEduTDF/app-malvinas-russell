var rv = require('russell-view')
var style = require('./cuadro_brujula_css.js')
var compass = require('../brujula/brujula.js')
var csjs = require('csjs')
var azimuth = require('azimuth')

module.exports = function cuadro (state, index) {
  var color1 = '#175f8a'
  var color2 = '#f08030'


  var color = color1
  if (index % 2 === 0) {
    color = color2
  }

  var width = ''
  if (this.windowWidth > 690) {
    width = 'float: left; width: 47%; '
  }

  if (this.windowWidth > 850) {
    width = 'float: left; width: 47.5%; '
  }

  if (this.windowWidth > 1108) {
    width = 'float: left; width: 31.5%; '
  }

  if (this.windowWidth > 1170) {
    width = 'float: left; width: 31.6%; '
  }
  var az = azimuth.azimuth(
    {lat: this.position.lat, lng: this.position.lng, elv: 0},
    state.coordenadas)
  var sh = Math.round(az.azimuth)
  var angulo = this.orientation + sh
  var distancia = Math.round(az.distance / 1000)
  var brujula = this.orientation ? compass({angulo: angulo}) : ''
  return rv`<div class="${style.cuadro}" style="${width}">
 <style type='text/css'>${csjs.getCss(style)}</style>
${state.img ? `<img src="${state.img}" width='100%' height='auto'>` : ''}
<div  style="padding: 5px; background-color: ${color};"></div>
<h2 class="${style.titulo}" style="color: #565656; background-color:#f7f6f6;">${state.title}</h2>
<hr style="border: 1px dashed #dedede"/>
<div class="${style.contenido}">${state.description || ''}${brujula}</div>
<div class="${style.calculo}">Rumbo: ${sh}º</div>
<div class="${style.calculo}">Distancia: ${distancia}km</div>
</div>`
}
