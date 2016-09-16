var rv = require('russell-view')
var style = require('./menu_hidden_css.js')
var store = require('../../store.js')
var ModCuadro = require('../cuadro/cuadro.js')


module.exports = function menu_hidden (state) {
var wrapper = style['wrapper']
var nav = style['nav'] 
var active = style['active']
var title = style['title']
var probando = style['probando']
var img = style['img']
var icon = style['icon']
var content = style['content']
var menu = style['menu']
var menubarra = style['menubarra']
var svgmenu = style['svgmenu']


var black = state.isOpen && state.started ? style['black'] +" "+style['isOpen'] :style['black']
  var sidebar = ''
  if (state.started) {
  sidebar = state.isOpen ? style['isOpen'] : style['isClosed']
  }
   return rv`<div>
  <div class='${style['sidebar']  + " " + sidebar}'>

    <div class='${img}'>
    </div>
    <ul class="${nav}">
      <li>
          <a href="/"><svg class="${icon}"> <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
              Inicio</a>
      </li>
      <li>
          <a href="/mensajes"><svg class="${icon}"> <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
              Mensajes en el tiempo</a>
      </li>

      <li>
          <a href="/noticias"><svg class="${icon}"> <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
              Noticias</a>
      </li>

            <li>
        <a href="/historia">
<svg class="${icon}"> <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
    </svg>

        Historia</a>
      </li>
      <li>
        <a href="/azimuth">
<svg class="${icon}">     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
        Distancias del corazon</a>
      </li>
    </ul>
  </div>
  <div class='${black}'></div>
<div class="${menu}"  data-type="menu"></div>
<div class="${menubarra}">
<div class="${svgmenu}">
<svg  viewBox="0 0 500 500">
<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="white" stroke="none">
<path d="M565 4151 c-90 -22 -173 -90 -215 -176 -33 -69 -34 -199 -2 -265 34
-71 75 -113 144 -151 l63 -34 2005 0 2005 0 50 25 c64 31 124 91 155 155 35
72 35 198 0 270 -31 64 -91 124 -155 155 l-50 25 -1985 2 c-1092 0 -1998 -2
-2015 -6z"/>
<path d="M565 2871 c-90 -22 -173 -90 -215 -176 -35 -73 -35 -199 0 -270 31
-64 91 -124 155 -155 l50 -25 2005 0 2005 0 50 25 c64 31 124 91 155 155 35
72 35 198 0 270 -31 64 -91 124 -155 155 l-50 25 -1985 2 c-1092 0 -1998 -2
-2015 -6z"/>
<path d="M540 1583 c-141 -49 -229 -182 -218 -326 10 -115 79 -216 183 -267
l50 -25 2005 0 2005 0 50 25 c64 31 124 91 155 155 35 72 35 198 0 270 -31 64
-91 124 -155 155 l-50 25 -1990 2 c-1790 2 -1995 1 -2035 -14z"/>
</g>
</svg>
</div>
</div>

</div>`;
}
