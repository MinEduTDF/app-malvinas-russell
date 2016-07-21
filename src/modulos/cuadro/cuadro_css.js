var csjs = require('csjs');
module.exports = csjs`

.cuadro {
    position: relative;
    background-color:white;
    margin: 10px;
    padding: 10px;
    border-style: solid;
    border-width: 0.1em;
    border-color: #E4E4E4;
    box-shadow: 0px 2px 10px -5px #888888;
}

.tiempo {
	padding-left: 15px;
    padding-top: 15px;
    font-size: 15px;
}

.titulo {
    font-family: serif;
    padding-left: 14px;
    padding-right: 14px;
    padding-bottom: 16px;
    padding-top: 35px;
    color: white;
    font-size: 22px;
}

.contenido {
    font-family: serif;
    padding: 15px;
    color: rgba(0, 0, 0, 0.69);
    line-height: 24px;
    font-size: 18px;
    padding-bottom: 15%;
}

.divbtn {
    width: 100%;
    position: absolute;
    padding: 10px;
    text-align: right;
    left: 0;
    bottom: 0;
    padding-bottom: 17px;
}

.btn {
    padding: 6px;
    text-decoration: none;
    color: white;
    font-size: 15px;
}`;