var yo = require('russell-view')
var styles = require('./timeline_css.js')

module.exports = function timeline(state,index) {
var circle = styles['circle'];
var titulo = styles['titulo'];
var color = RandomColor()


//LEFT ******************** //
var left = { line: 'transform="rotate(180 600 100)"',
time: '670',
img: 'transform="translate(-280)"'}

var right = { line: '', time: '370', img: '' }
var side = left
if (index % 2 === 0) {
  side = right;
} 
console.log(side)
return yo`<div><svg
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
    <g ${side.img}>
    <image
       y="21"
       x="675"
       id="image3398"
       xlink:href="http://192.168.99.100:8000/assets/img/malvinas.jpg"
       height="150"
       width="150"
       style="-webkit-clip-path: url(#clip); clip-path: url(#clip)" />
    </g>
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

function RandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    	lum = "-0.3";
    	hex = color;

    	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}
