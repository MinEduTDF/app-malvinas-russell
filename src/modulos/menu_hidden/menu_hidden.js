var rv = require('russell-view')
var style = require('./menu_hidden_css.js')

module.exports = function menu_hidden (state) {
  var sidebar = ''
  var black = ''
  if (state.started) {
    sidebar = state.isOpen ? style['isOpen'] : style['isClosed']
    black = state.isOpen ? style['isOpenb'] : style['isClosedb']
  }
  return rv`<div>
  <div class='${style.sidebar  + " " + sidebar}'>

    <div class='${style.img}'>
    </div>
    <ol class="${style.nav}">
      <li>
          <a href="/"><svg viewBox="0 0 32 32" class="${style.icon}"><path class="path1" d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></path>
</svg>
              Inicio</a>
      </li>
      <li>
          <a href="/mensajes"><svg viewBox="0 0 32 32" class="${style.icon}"> <path class="path1" d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM8 8h16c0.286 0 0.563 0.061 0.817 0.177l-8.817 10.286-8.817-10.287c0.254-0.116 0.531-0.177 0.817-0.177zM6 22v-12c0-0.042 0.002-0.084 0.004-0.125l5.864 6.842-5.8 5.8c-0.045-0.167-0.069-0.34-0.069-0.517zM24 24h-16c-0.177 0-0.35-0.024-0.517-0.069l5.691-5.691 2.826 3.297 2.826-3.297 5.691 5.691c-0.167 0.045-0.34 0.069-0.517 0.069zM26 22c0 0.177-0.024 0.35-0.069 0.517l-5.8-5.8 5.865-6.842c0.003 0.041 0.004 0.083 0.004 0.125v12z"></path>
</svg>
              Mensajes en el tiempo</a>
      </li>

            <li>
        <a href="/historia">
<svg viewBox="0 0 32 32" class="${style.icon}"> <path class="path1" d="M28 4v26h-21c-1.657 0-3-1.343-3-3s1.343-3 3-3h19v-24h-20c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24v-28h-2z"></path>
<path class="path2" d="M7.002 26v0c-0.001 0-0.001 0-0.002 0-0.552 0-1 0.448-1 1s0.448 1 1 1c0.001 0 0.001-0 0.002-0v0h18.997v-2h-18.997z"></path>
    </svg>

        L&iacute;nea de tiempo</a>
      </li>
      <li>
        <a href="/azimuth">
<svg viewBox="0 0 32 32" class="${style.icon}">  <path class="path1" d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 30c-1.967 0-3.84-0.407-5.538-1.139l7.286-8.197c0.163-0.183 0.253-0.419 0.253-0.664v-3c0-0.552-0.448-1-1-1-3.531 0-7.256-3.671-7.293-3.707-0.188-0.188-0.442-0.293-0.707-0.293h-4c-0.552 0-1 0.448-1 1v6c0 0.379 0.214 0.725 0.553 0.894l3.447 1.724v5.871c-3.627-2.53-6-6.732-6-11.489 0-2.147 0.484-4.181 1.348-6h3.652c0.265 0 0.52-0.105 0.707-0.293l4-4c0.188-0.188 0.293-0.442 0.293-0.707v-2.419c1.268-0.377 2.61-0.581 4-0.581 2.2 0 4.281 0.508 6.134 1.412-0.13 0.109-0.256 0.224-0.376 0.345-1.133 1.133-1.757 2.64-1.757 4.243s0.624 3.109 1.757 4.243c1.139 1.139 2.663 1.758 4.239 1.758 0.099 0 0.198-0.002 0.297-0.007 0.432 1.619 1.211 5.833-0.263 11.635-0.014 0.055-0.022 0.109-0.026 0.163-2.541 2.596-6.084 4.208-10.004 4.208z"></path>
    </svg>
        Distancias del coraz&oacute;n</a>
      </li>
      <li><a href="/agradecimientos">
<svg viewBox="0 0 32 32" class="${style.icon}">
<path class="path1" d="M29.181 19.070c-1.679-2.908-0.669-6.634 2.255-8.328l-3.145-5.447c-0.898 0.527-1.943 0.829-3.058 0.829-3.361 0-6.085-2.742-6.085-6.125h-6.289c0.008 1.044-0.252 2.103-0.811 3.070-1.679 2.908-5.411 3.897-8.339 2.211l-3.144 5.447c0.905 0.515 1.689 1.268 2.246 2.234 1.676 2.903 0.672 6.623-2.241 8.319l3.145 5.447c0.895-0.522 1.935-0.82 3.044-0.82 3.35 0 6.067 2.725 6.084 6.092h6.289c-0.003-1.034 0.259-2.080 0.811-3.038 1.676-2.903 5.399-3.894 8.325-2.219l3.145-5.447c-0.899-0.515-1.678-1.266-2.232-2.226zM16 22.479c-3.578 0-6.479-2.901-6.479-6.479s2.901-6.479 6.479-6.479c3.578 0 6.479 2.901 6.479 6.479s-2.901 6.479-6.479 6.479z"></path>
     </svg>
      Sobre el proyecto</a> </li>
    </ol>
  </div>
  <div class='${style['black'] + ' ' + black}'></div>
<div class="${style.menu}"  data-type="menu"></div>
<div class="${style.menubarra}">
<div class="${style.svgmenu}">
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

</div>`
}
