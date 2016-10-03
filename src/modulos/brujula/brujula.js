var yo = require('russell-view')
var style = require('./brujula_css.js')

module.exports = function brujula (state) {
  return yo`<div class='${style.brujula}'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
  <circle cx="150" cy="149" r="143.4" fill="#364e66"/>
  <circle cx="150" cy="149" r="121.5" fill="#fff"/>
  <path fill="#bfbfbf" d="M59.7 211l21-2.3L72 228l-12.4-17zM218 232l-4.5-20.5 20 6.6-15.5 14zM75.4 71.2l6.7 20-20.3-4.5 14-15.5zM240 86l-21 3 7.8-19.3L240 86z"/>
  <g transform="rotate(${state.angulo || 0},148,148)">
    <path fill="#f08030" d="M135 147.2l13.6-103L162 147h-27z"/>
    <path fill="#ccc" d="M162.2 147l-14.4 103-12.6-103.2 27 .2z"/>
  </g>
  <circle cx="148.4" cy="147.4" r="7.9" fill="#fff"/>
</svg>
</div>`
}
