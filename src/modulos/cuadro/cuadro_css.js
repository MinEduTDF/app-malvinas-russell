var csjs = require('csjs');

module.exports = csjs`
.cuadro {
    position: relative;
    background-color:white;
    float: left;
    width: 100%;
    min-width: 259px;
    max-width: 317px;
    height: 344px;
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
}

.titulo {
    font-family: serif;
    padding-left: 14px;
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
}

.divbtn {
    padding-right: 12px;
    padding-bottom: 19px;
    position: absolute;
    right: 0;
    bottom: 0;
}

.btn {
    padding: 6px;
    text-decoration: none;
    color: white;
    font-size: 15px;
}
`;