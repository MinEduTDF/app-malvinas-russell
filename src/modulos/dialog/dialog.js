var yo = require('russell-view')
var csjs = require('csjs')
var styles = require('./dialog_css.js')
module.exports = function dialog (state,globalstate,index) {

var dialog = styles['dialog']
var back = styles['back']
var title = styles['title']
var body = styles['body']
var btn = styles['btn']
var divbtn = styles['divbtn']

if (globalstate.windowWidth > 900) {
var width = "50%"
} else {
var width = "100%"
}

var color1 = '#175f8a'
var color2 = '#f08030' 
 

var color = color1
if (index % 2 === 0) {
  color = color2;
}


return yo`<div>
 <style type='text/css'>${csjs.getCss(styles)}</style>
<div class="${back}">
	<div class="${dialog}">
${state.img ? `<img style="width:${width}; padding:10px;" src="${state.img}" />` : ''}
<div  style="padding: 5px; background-color: ${color};"></div>
<div class="${title}" style="color: #565656; background-color:#f7f6f6;">Año ${state.title}</div>
<hr style="border: 1px dashed #dedede"/>
<div class="${body}">${state.body}</div>

<div class="${divbtn}" style="color: ${color}">[<a class="${btn}" href="${state.url}" target="_blank">Ver mas ...</a>]
[<a class="${btn}" href="/historia" >Cerrar</a>]</div>
</div>
</div>`	
}



