var csjs = require('csjs');
var color = '#6389c8'
module.exports = csjs`
.cuadro {
margin: 10px;
 border-style: solid;
 border-width: 0.1em;
border-color: #E4E4E4;
    box-shadow: 0px 2px 10px -5px #888888;
}
.titulo {
font-family: arial;
padding: 10px;
text-align: center;
color: white;
font-size: 20px;
background-color: ${color};
}

.contenido {
font-family: arial;
padding: 10px;
color: rgba(0,0,0,.54);
line-height: 18px;
font-size: 15px;
}
`;