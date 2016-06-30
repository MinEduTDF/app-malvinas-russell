var rv = require('russell-view')
var style = require('./menu_hidden_css.js')
var store = require('../../store.js')
var ModCuadro = require('../cuadro/cuadro.js')


module.exports = function menu_hidden (state) {
var wrapper = style['wrapper']
var sidebar = style['sidebar']
var nav = style['nav'] 
var active = style['active']
var title = style['title']
var probando = style['probando']
var img = style['img']
var icon = style['icon']


  var content = state.isOpen ? style['content'] + " "+ style['isOpen'] : style['content']
   return rv`<div id='container' class='${wrapper}'>
  <div class='${sidebar}'>
    <div class='${img}'>
    </div>
    <ul class='${nav}'>
      <li>
          <a><svg class="${icon}"> <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
              Principal</a>
      </li>

      <li>
        <a>
<svg class="${icon}"> <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
    </svg>

        Historia</a>
      </li>
      <li>
        <a class='${active}'>
<svg class="${icon}">     <path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
    </svg>
        Efemérides</a>
      </li>
      <li>
        <a>
<svg class="${icon}">     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
        Geolocalización</a>
      </li>
      <li>
        <a>
<svg class="${icon}">     <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
        Centros</a>
      </li>
      <li>
        <a>
<svg class="${icon}">   <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
        Eventos</a>
      </li>
    </ul>
  </div>
  <div class='${content}'>
  <button data-click='{"type": "menu"}'>menu</button>
    <h1>CONTENIDO</h1>
    ${ModCuadro('titulo','blabla','#666')}
  </div>
</div>`;
}
