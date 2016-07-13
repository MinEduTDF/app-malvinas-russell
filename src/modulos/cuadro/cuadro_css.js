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

.tiempo {
padding: 7px;
font-size: 15px;
color: #969696;
background-color: #f3f3f3
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
font-size: 17px;
background: white;
}

.divbtn {
	width: 100%;
    padding: 10px;
    text-align: right;
}

.btn {
    background: #6389c8;
    padding: 6px;
    text-decoration: none;
    color: white;
    font-size: 15px;
}
`;