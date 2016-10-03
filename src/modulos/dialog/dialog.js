var yo = require('russell-view')
var csjs = require('csjs')
var style = require('./dialog_css.js')
module.exports = function dialog (state, globalstate, index) {
  if (globalstate.windowWidth > 900) {
    var width = '50%'
  } else {
    var width = '100%'
  }

  var color1 = '#175f8a'
  var color2 = '#f08030'


  var color = color1
  if (index % 2 === 0) {
    color = color2
  }

  return yo`<div>
<div class="${style.back}">
	<div class="${style.dialog}">
${state.img ? `<img style="width:${width}; padding:10px;" src="${state.img}" />` : ''}
<div  style="padding: 5px; background-color: ${color};"></div>
<div class="${style.title}" style="color: #565656; background-color:#f7f6f6;">Año ${state.title}</div>
<hr style="border: 1px dashed #dedede"/>
<div class="${style.body}">${state.body}</div>

<div class="${style.divbtn}" style="color: ${color}">[<a class="${style.btn}" href="${state.url}" target="_blank">Ver mas ...</a>]
[<a class="${style.btn}" href="/historia" >Cerrar</a>]</div>
</div>
</div>`
}
