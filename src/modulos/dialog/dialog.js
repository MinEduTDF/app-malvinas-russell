var yo = require('russell-view')
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


return yo`<div>
<div class="${back}">
	<div class="${dialog}">

<div class="${title}">Año ${state.title}</div>
<img style="width:${width};" src="${state.img}" />
<div class="${body}">${state.body}</div>
<div class="${divbtn}">
<a class="${btn}" href="${state.url}" target="_blank">Ver mas</a>
<a class="${btn}" href="#" data-type="dialogClose" data-payload="${index}" target="_blank">Cerrar</a>
</div>
</div>
</div>`	
}



