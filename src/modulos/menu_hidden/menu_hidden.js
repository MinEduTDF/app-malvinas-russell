var yo = require('yo-yo')
var styles = require('./menu_hidden_css.js')
var style = styles();

var wrapper = style['wrapper']
var sidebar = style['sidebar']
var nav = style['nav'] 
var active = style['active']
var title = style['title']
var probando = style['probando']

module.exports = function menu_hidden () {

  var content = style['content'] + " "+ style['isOpen']

   return yo` <div class='${wrapper}'>
  <div class='${sidebar}'>
    <div class='${title}'>
      Sidebar
    </div>
    <ul class='${nav}'>
      <li>
        <a>Dashboard</a>
      </li>
      <li>
        <a>Statistics</a>
      </li>
      <li>
        <a class='${active}'>Milestones</a>
      </li>
      <li>
        <a>Experiments</a>
      </li>
      <li>
        <a>Previews</a>
      </li>
      <li>
        <a>Assets</a>
      </li>
      <li>
        <a>Settings</a>
      </li>
      <li>
        <a>Logout</a>
      </li>
    </ul>
  </div>
  <div class='${content} '>
    <h1>CONTENIDO</h1>
  </div>
</div>`;
}
