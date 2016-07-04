var rv = require('russell-view')
var menu = require('../modulos/menu_hidden/menu_hidden.js')
var line = require('../modulos/linetime/linetime.js')
module.exports = function linetime ( state ) {
	return rv`<div>${menu(state)}
${line('left','#5b4f35','2000')}
${line('right','#323776','2015')}
${line('left','#d1652f','2050')}
${line('right','#b1c482','3000')}
${line('left','#6dbacc','4000')}
	</div>`
}


