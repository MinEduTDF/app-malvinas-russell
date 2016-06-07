var yo = require('yo-yo')
var styles = require('./login.csjs.js')

var mc = styles['mdl-card']
var mct = styles['mdl-card__title']

module.exports = function login (text) {
 return yo`<div id="container"><div class="center"><div class="login"><div class="demo-card-square ${mc} mdl-shadow--2dp">
  <div class="${mct} ${mc}--expand">
    <h2 class="${mct}-text">${text}</h2>
  </div>
  <div class="mdl-card__supporting-text">
<form action="#">
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input class="mdl-textfield__input" type="text" id="sample3">
    <label class="mdl-textfield__label" for="sample3">Usuario</label>
  </div>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input class="mdl-textfield__input" type="text" id="sample3">
    <label class="mdl-textfield__label" for="sample3">Contraseña</label>
  </div>
</form>
  </div>
  <div class="mdl-card__actions mdl-card--border">
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
     Login
    </a>
  </div>
</div></div></div></div>`	
}

