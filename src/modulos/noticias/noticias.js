var rv = require('russell-view')
var style = require('./noticias_css.js')
var csjs = require('csjs')

module.exports = function cuadro (state, index) {

  return rv`<div id="${style.cuadro + index}" class="${style.cuadro}">
${state.img ? `<div class="${style.imgheight}"><img src="${state.img}" width='100%' height='auto'></div>` : ''}
<div  class="${(index + 1) % 2 === 0 ? style.naranja : style.azul}"></div>
<h2 class="${style.titulo}" style="color: #565656; background-color:#f7f6f6;">${state.title}</h2>
<hr style="border: 1px dashed #dedede"/>
<div class="${style.contenido}">${state.description || ''}</div>
</div>`
}