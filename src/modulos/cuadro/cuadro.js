var rv = require('russell-view')
var style = require('./cuadro_css.js')


module.exports = function cuadro (titulox,contenido) {
var titulo = style['titulo']
var contenidox = style['contenido']
var cuadro = style['cuadro']
 return rv`<div class="${cuadro}">
<div class="${titulo}">${titulox}</div>
<div class="${contenidox}">${contenido}</div>
</div>`	
}
