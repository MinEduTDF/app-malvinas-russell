var yo = require('russell-view')
var styles = require('./timeline_css.js')
var dominant = require('dominant-color')
    


module.exports = function timeline(state,index) {
var circle = styles['circle'];
var titulo = styles['titulo'];
var color = '#666'

//LEFT ******************** //
var left = { line: 'transform="rotate(180 600 100)"',
time: '670',
img: 'x="380" y="30" width="150" height="150"'}

var right = { line: '', time: '370', img: 'x="700" y="30" width="150" height="150"' }
var side = left
if (index % 2 === 0) {
  side = right;
} 

return yo`<div>

<svg
  viewBox="320 0 600 200"
  preserveAspectRatio="xMinYMin meet" 
  id="svg3184"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
       <clippath id="clip">
      <circle
         cx="750"
         cy="96"
         r="65"
         id="svg_6-3"
         fill="transparent" />
         </clippath>
</defs>
  <g id="main" >
  
    <g
       id="g3037" ${side.line}>
      <rect
         width="16"
         height="200"
         x="592"
         y="0"
         id="svg_6"
         fill=${color} />
      <polygon
         points="608 90, 618 100, 608 110"
         id="svg_8"
         fill=${color} />
    </g>


<foreignobject ${side.img}>
    <body xmlns="http://www.w3.org/1999/xhtml">
    <div class="${circle}" style="background: url(${state.img}) no-repeat; background-position: 50% 50%;"></div>
    </body>
 
  </foreignobject>

    <text
       x="300"
       y="130"
       id="text3130"
       xml:space="preserve"
       style="font-size:80.08296204px;font-style:normal;font-weight:normal;line-height:125%;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;font-family:Sans"><tspan
         x="${side.time}"
         y="130"
         id="tspan3132"
         fill=${color}>${state.title}</tspan></text>
  </g>
</svg>
</div>`	
}
    // <g ${side.img}>
    // <image
    //    y="21"
    //    x="675"
    //    id="image3398"
    //    xlink:href=${state.img}
    //    height="150"
    //    width="150"
    //    style="-webkit-clip-path: url(#clip); clip-path: url(#clip); background-position: 50% 50%;" />
    // </g>
