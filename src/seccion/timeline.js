var rv = require('russell-view')
var menu = require('../modulos/menu_hidden/menu_hidden.js')
var line = require('../modulos/timeline/timeline.js')
module.exports = function timeline ( state ) {

var width = "width:100%"
if (state.windowWidth > 500) {
	width = "width:500px;"
}

	return rv`<div>${menu(state)}<h1>L&iacute;nea de tiempo</h1>
	<div style="width:100%; text-align:center;">
  <div style="${width} display: inline-block;">
${state.timeline.map(line,state)}
  </div>
  	</div>
	</div>`
}


