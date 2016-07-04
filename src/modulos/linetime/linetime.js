var yo = require('russell-view')
var styles = require('./linetime_css.js')

module.exports = function linetime(lado,color,fecha) {
var circle = styles['circle'];
var titulo = styles['titulo'];

if ( lado === "left") {
 return yo`<div style="float:left;">
<div class="${circle}">
<svg width="130" height="130">
 <g>
  <ellipse stroke="#000000" ry="63.499999" rx="63.499999" id="svg_6" cy="65.500001" cx="64.500001" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="${color}"/>
 </g>
</svg>
</div>

<div style="float:left;">
<svg width="40" height="192">
 <g>
  <rect stroke="#000000" id="svg_6" height="192" width="16" y="0" x="11" stroke-width="0" fill="${color}"/>
  <polygon stroke="#000000" transform="rotate(-179.82810974121094 13.647021293640137,98.49549865722655) " stroke-width="0" points="25.247710149608952,98.49549736149544 16.38557325423965,108.39902366764778 2.0463336359660964,104.6162172711634 2.0463336359660964,92.37477745182747 16.38557325423965,88.5919710553431 25.247710149608952,98.49549736149544 " strokeWidth="0" strokecolor="#000000" fill="${color}" edge="20.275875" orient="x" sides="5" shape="regularPoly" id="svg_8" cy="104" cx="33"/>
 </g>
</svg>
</div>

<div class="${titulo}" style="color:${color};">${fecha}</div>
</div>`	
}

if ( lado === "right") {
 return yo`<div style="float:left;">
<div class="${titulo}" style="color:${color};">${fecha}</div>

<div style="float:left;">
<svg width="40" height="192">
 <g>
   <rect stroke="#000000" id="svg_6" height="192" width="16" y="0" x="11" stroke-width="0" fill="${color}"/>
  <polygon stroke="#000000" transform="rotate(-0.6391886472702026 23.647022247314553,98.49549865722663) " stroke-width="0" points="35.247711181640625,98.49549865722656 26.38557243347168,108.3990249633789 12.046333312988281,104.61621856689453 12.046333312988281,92.3747787475586 26.38557243347168,88.59197235107422 35.247711181640625,98.49549865722656 " strokeWidth="0" strokecolor="#000000" fill="${color}" edge="20.275875" orient="x" sides="5" shape="regularPoly" id="svg_8" cy="104" cx="33"/>
 </g>
</svg>
</div>

<div class="${circle}">
<svg width="130" height="130">
 <g>
  <ellipse stroke="#000000" ry="63.499999" rx="63.499999" id="svg_6" cy="65.500001" cx="64.500001" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="${color}"/>
 </g>
</svg>
</div>


</div>`	
}

}