var yo = require('yo-yo')
var styles = require('./dialog_css.js')



module.exports = function dialog (contrato) {

var dialog = styles['dialog']
var back = styles['back']

return yo`<div>

<div class="${back}">
	<div class="${dialog}">${contrato}</div>
</div>


</div>`	
}

