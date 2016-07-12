var rv = require('russell-view')
var menu = require('../modulos/menu_hidden/menu_hidden.js')
var line = require('../modulos/timeline/timeline.js')
module.exports = function timeline ( state ) {
	return rv`<div>${menu(state)}
  <div style="width:60%">
${state.timeline.map(line)}
  </div>
	</div>`
}


