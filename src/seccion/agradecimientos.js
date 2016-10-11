var rv = require('russell-view')
var menu = require('../modulos/menu_hidden/menu_hidden.js')
var style = require('./secciones_css.js')
module.exports = function noticias (state) {
  var texto = `<div><h3>Centro de Ex-Combatientes de Ushuaia</h3>
    <p>
    <ul>
    <li>Idea, Diseño y Textos: VGM Walter Andrés Batista</li>
    <li>Colaboración: VGM Daniel Eduardo Arias</li>
    </ul>
    </p>
    <br/>
    <h3>Dirección Provincial de Educación, Ciencia y Tecnología, Subsecretaría
    de Planeamiento Educativo, Informática y Evaluación del Ministerio de
    Educación de Tierra del Fuego, Antártida e Islas del Atlántico Sur</h3>
    <br/>
    <h4>Diseño Técnico, Desarrollo y Programación</h4>
    <p><ul>
    <li>Marcos Flores</li>
    <li>Santiago Gil</li>
    <li>Pablo Gay</li>
    </ul></p>
    <h4>Contenido Histórico</h4>
    <p>Lic. Carina Bonnano</p>
    <h4>Dirección</h4>
    <p>Prof. Gustavo Iturriz</p>
    <br/>
    <h3>Licencia</h3>
    <p><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Licencia Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/InteractiveResource" property="dct:title" rel="dct:type">Nuestras Malvinas</span> por <a xmlns:cc="http://creativecommons.org/ns#" href="https://nuestrasmalvinas.org" property="cc:attributionName" rel="cc:attributionURL">Centro de Excombatientes de Malvinas en Ushuaia y Dirección Provincial de Educación, Ciencia y Tecnología, Subsecretaría de Planeamiento Educativo, Informática y Evaluación del Ministerio de Educación de Tierra del Fuego, Antártida e Islas del Atlántico Sur</a> se distribuye bajo una <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Licencia Creative Commons Atribución-NoComercial-SinDerivar 4.0 Internacional</a>.<br />Basada en una obra en <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/MinEduTDF/app-malvinas-russell" rel="dct:source">https://github.com/MinEduTDF/app-malvinas-russell</a>.</p>
    <br/>
    <h3>C&oacute;digo fuente</h3>
    <p><a href="https://github.com/MinEduTDF/app-malvinas-russell">Github</a></p> 
    </div>`
  var fixit = state.isOpen ? style.fixit : ''
  return rv`<div>${menu(state)}
	<div class='${fixit}'><div class="${style.info}"><h1 class="${style.header}">Sobre el proyecto</h1>${texto}</div>
	</div></div>`
}
