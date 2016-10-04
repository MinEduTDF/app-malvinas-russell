var yo = require('russell-view')
var style = require('./timeline_css.js')
var dialog = require('../dialog/dialog.js')
var csjs = require('csjs')
module.exports = function timeline (state, index) {

  // LEFT ******************** //
  var left = { line: 'transform="rotate(180 600 100)"',
    time: '670',
    img: 'x="380" y="30" width="150" height="150"',
    color: '#175f8a'
  }

  var right = { line: '', time: '370', img: 'x="700" y="30" width="150" height="150"', color: '#f08030' }
  var side = left
  if (index % 2 === 0) {
    side = right
  }

  return yo`
<div class='${style.anio}'>
<svg width='100%' height:'auto'
  viewBox="320 0 600 200"
  preserveAspectRatio="xMinYMin meet" 
  xmlns="http://www.w3.org/2000/svg">

  <g  >
  
    <g
        ${side.line}>
      <rect
         width="16"
         height="200"
         x="592"
         y="0"
         fill=${side.color} />
      <polygon
         points="608 90, 618 100, 608 110"
         fill=${side.color} />
    </g>

<foreignobject ${side.img}>
    <body xmlns="http://www.w3.org/1999/xhtml">
    <a href="/historia/${index}" data-type="dialogOpen" data-payload="${index}" class="${style.circle}" style="background: url(${state.img || '../assets/img/malvinas.jpg'}) no-repeat; background-position: 50% 50%; border: 12px solid ${side.color};"></a>
    </body>
 
  </foreignobject>

    <text
       x="300"
       y="130"
       xml:space="preserve"
       style="font-size:80.08296204px;font-style:normal;font-weight:normal;line-height:125%;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;font-family:Sans"><tspan
         x="${side.time}"
         y="130"
         fill=${side.color}>${state.title}</tspan></text>
  </g>
</svg>
</div>`
}
