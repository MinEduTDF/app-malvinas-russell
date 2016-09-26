var rv = require('russell-view')
var menu = require('../modulos/menu_hidden/menu_hidden.js')
var noticia = require('../modulos/cuadro/cuadro.js')
module.exports = function noticias( state ) {

var texto = `<p>Nuestras Malvinas es el  lugar donde nos encontrarnos todos los Argentinos y Amigos de Malvinas. El fin de este sitio es recordar la escencia Argentina, recordando a los Héroes más cercanos en el tiempo, quienes han sacrificado el bien más preciado que tiene el Ser Humano, para defender la Argentinidad y mostrar al mundo el valor y cualidades superlativas de los Argentinos. Es el deseo de los creadores de este sitio, el que puedan encontrarse con su Ser Nacional y, de esta manera, una vez identificados los valores y cualidades que hacen al Argentino biennacido, poder imitarlos y replicarlos en nuestra familia y vida cotidiana, ya sea estudiando, trabajando o simplemente siendo un buen ciudadano para bien de la Nación. 
</p><p>Esta aplicación es una idea del Centro de Excombatientes de Malvinas en Ushuaia, creado y desarrollado por Amigos de Malvinas pertenecientes a la Dirección de Ciencia y Tecnología del Ministerio de Educación de la Provincia de Tierra del Fuego.</p>
<p>Todas las fotografías exhibidas en esta Aplicación fueron provistas por el Centro de Excombatientes de Malvinas en Ushuaia, con quienes se han compartido las mismas a través de las redes sociales. Si alguien siente que se vulneran sus derechos, solicitamos nos lo hagan saber al e-mail cemushuaia@hotmail.com teléfono + 54 2901 432 472 para comunicarnos con él. Muchas gracias.</p>
<p>Bienvenidos, argentinos de todos los lugares del Mundo y de todos los tiempos, niños, jóvenes, adultos y ancianos.</p>`
  var fixit = state.isOpen ? `position: fixed; overflow: hidden;` : '' 
return rv`<div>${menu(state)}
	<div style='${fixit}'>	${noticia({title: 'Inicio', description: texto})}	
	</div></div>`

}
