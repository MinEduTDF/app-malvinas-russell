var rv = require('russell-view')
var menu = require('../modulos/menu_hidden/menu_hidden.js')
var line = require('../modulos/timeline/timeline.js')
var dialog = require('../modulos/dialog/dialog.js')
var style = require('./secciones_css.js')
module.exports = function timeline (state, params) {
  var d = params.index ? dialog(state.timeline[params.index], state, params.index, state) : ''
  // var width = 'width:100%'
  // if (state.windowWidth > 500) {
  //   width = 'width:500px;'
  // }

  var fixit = state.isOpen || params.index ? style.fixit : ''
  return rv`<div>${menu(state)}<div class='${fixit}'><div class="${style.info}"><h1 class="${style.header}">L&iacute;nea de tiempo</h1></div>
  <div class=${style.line}>
${state.timeline.map(line,state)}
  	</div>
	</div>${d}</div>`
}