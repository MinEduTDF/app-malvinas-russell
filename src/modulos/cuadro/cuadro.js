var rv = require('russell-view')
var style = require('./cuadro_css.js')

module.exports = function cuadro (state,index) {
var titulo = style['titulo']
var contenidox = style['contenido']
var cuadro = style['cuadro']
var tiempo = style['tiempo']
var btn = style['btn']
var divbtn = style ['divbtn']

var appstate = this

var color1 = '#175f8a'
var color2 = '#f08030' 
 

var color = color1
if (index % 2 === 0) {
  color = color2;
}

var width = ""
if (appstate.windowWidth > 690) {
var width = "float: left; width: 47%; height: 344px;"
} 

if (appstate.windowWidth > 850) {
var width = "float: left; width: 47.5%; height: 344px;"
} 

if (appstate.windowWidth > 1108) {
var width = "float: left; width: 31.5%; height: 344px;"
}

if (appstate.windowWidth > 1170) {
var width = "float: left; width: 31.6%; height: 344px;"
}

 return rv`<div class="${cuadro}" style="${width}">
<div class="${titulo}" style="background-color: ${color};">${state.title}</div>
<div class="${tiempo}" style="color: ${color}">
<div style="width:25px; float:left;">
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve">
<g>
	<g>
		<polygon style="fill:#F05565;" points="46.865,4 46.865,8 39.865,8 39.865,4 15.865,4 15.865,8 8.865,8 8.865,4 0.865,4 0.865,15 
			54.865,15 54.865,4 		"/>
		<polygon style="fill:#EFEBDE;" points="8.865,15 0.865,15 0.865,58 54.865,58 54.865,15 46.865,15 39.865,15 15.865,15 		"/>
		<path style="fill:#D5D0BB;" d="M37.865,22h-2h-7h-2h-7h-2h-9v9v2v7v2v9h9h2h7h2h7h2h9v-9v-2v-7v-2v-9H37.865z M28.865,24h7v7h-7
			V24z M35.865,40h-7v-7h7V40z M19.865,33h7v7h-7V33z M19.865,24h7v7h-7V24z M10.865,24h7v7h-7V24z M10.865,33h7v7h-7V33z
			 M17.865,49h-7v-7h7V49z M26.865,49h-7v-7h7V49z M35.865,49h-7v-7h7V49z M44.865,49h-7v-7h7V49z M44.865,40h-7v-7h7V40z
			 M37.865,31v-7h7v7H37.865z"/>
		<rect x="8.865" style="fill:#36495E;" width="7" height="8"/>
		<rect x="39.865" style="fill:#36495E;" width="7" height="8"/>
		<rect x="19.865" y="33" style="fill:#7F6E5D;" width="7" height="7"/>
	</g>
	<g>
		<polygon style="fill:#EDDCC7;" points="35.701,48.489 35.694,48.496 33.705,55.786 38.352,51.139 		"/>
		<path style="fill:#D75A4A;" d="M54.951,34.54l-1.247-1.247c-0.775-0.775-2.032-0.775-2.807,0l-3.582,3.582l2.651,2.651
			L54.951,34.54z"/>
		
			<rect x="40.959" y="35.795" transform="matrix(0.7071 0.7071 -0.7071 0.7071 43.6633 -17.3984)" style="fill:#F29C21;" width="3.749" height="16.424"/>
		<polygon style="fill:#D6C4B1;" points="41.35,54.153 41.358,54.145 38.352,51.139 33.705,55.786 33.572,56.274 		"/>
		<path style="fill:#A34740;" d="M52.972,42.532l3.582-3.582c0.775-0.775,0.775-2.032,0-2.807l-1.602-1.602l-4.985,4.985
			L52.972,42.532z"/>
		
			<rect x="43.536" y="38.623" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 44.8313 112.2409)" style="fill:#E18C25;" width="4.251" height="16.424"/>
		<path style="fill:#5E5E5E;" d="M32.865,57.981c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l2.207-2.207
			c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-2.207,2.207C33.377,57.884,33.121,57.981,32.865,57.981z"/>
	</g>
</g>
</svg>
</div>

<div style="padding:5px;">${state.pubdate}</div></div>
<div class="${contenidox}">${state.description}</div>
<div class="${divbtn}"><a class="${btn}" style="background-color: ${color};" href="${state.link}" target="_blank">Ver mas</a></div>
</div>`	
}
