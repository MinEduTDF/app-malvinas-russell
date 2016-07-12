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


  var sidebar = state.isOpen ? style['sidebar'] + " "+ style['isOpen'] : style['sidebar']
   return rv`<div>
  <div class='${sidebar}'>
    <div class='${img}'>
    </div>
    <ul class="${nav}">
      <li>
          <a href="/"><svg class="${icon}"> <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
              Principal</a>
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
        Brujula</a>
      </li>
      <li>
        <a>
    </ul>
  </div>
  <button data-type="menu">menu</button>
</div>`;
}
