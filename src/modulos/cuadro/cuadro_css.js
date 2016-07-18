var csjs = require('csjs');

module.exports = csjs`
.cuadro {
margin: 10px;
 border-style: solid;
 border-width: 0.1em;
border-color: #E4E4E4;
    box-shadow: 0px 2px 10px -5px #888888;
}

.tiempo {
	padding-left: 15px;
    padding-top: 15px;
    font-size: 15px;
    color: #638bc8;
    background-color: #f9f9f9;
}

.titulo {
font-family: arial;
padding: 10px;
text-align: center;
color: white;
font-size: 20px;
}

.contenido {
font-family: arial;
padding: 15px;
color: rgba(0,0,0,.54);
line-height: 18px;
font-size: 17px;
background: #f9f9f9;
}

.divbtn {
	width: 100%;
    text-align: right;
    padding-right: 12px;
    padding-bottom: 19px;
    background: #f9f9f9;
}

.btn {
    padding: 6px;
    text-decoration: none;
    color: white;
    font-size: 15px;
}
`;