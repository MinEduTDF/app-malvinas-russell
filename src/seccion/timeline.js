var rv = require('russell-view')
var menu = require('../modulos/menu_hidden/menu_hidden.js')
var line = require('../modulos/timeline/timeline.js')
module.exports = function timeline ( state ) {

var width = ""
if (state.windowWidth > 500) {
	width = "width:500px;"
}
	return rv`<div>${menu(state)}
  <div style="${width}">
${state.timeline.map(line)}
  </div>
	</div>`
}


