var rv = require('russell-view')
var menu = require('../modulos/menu_hidden/menu_hidden.js')
var line = require('../modulos/timeline/timeline.js')
var dialog = require('../modulos/dialog/dialog.js')
module.exports = function timeline (state, params) {
  var d = params.index ? dialog(state.timeline[params.index], state, params.index, state) : ''
  // var width = 'width:100%'
  // if (state.windowWidth > 500) {
  //   width = 'width:500px;'
  // }

  var fixit = state.isOpen ? `position: fixed; overflow: hidden;` : ''
  return rv`<div>${menu(state)}<div style='width: 100%; ${fixit}'><h1>L&iacute;nea de tiempo</h1>
  <div>
${state.timeline.map(line,state)}
  	</div>
	</div>${d}</div>`
}
