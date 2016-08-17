var csjs = require('csjs');

module.exports = csjs`

.back {
	background-color: rgba(0, 0, 0, 0.15);
	height: 100%;
	width: 100%;
	position: fixed;
	left: 0;
	top: 0;
	margin: 0;
	padding: 0;
	
}

.btn {
    padding: 6px;
    text-decoration: none;
    color: white;
    font-size: 15px;
    background-color: rgb(240, 128, 48);
}

.divbtn {
    width: 100%;
    padding: 10px;
    text-align: right;
    left: 0;
    bottom: 0;
    padding-bottom: 17px;
}

.title {
font-size: 35px;
    color: white;
    background: rgb(240, 128, 48);
    padding: 4px;
        margin-bottom: 4px;
}

.body {
	padding:10px
}

.dialog {
    margin-top: 3%;
    margin-left: 10%;
    margin-right: 10%;
    padding-top: 4px;
    padding-left: 5px;
    padding-right: 5px;
    background-color: #ffffff;
    border-style: solid;
    border-width: 0.1em;
    border-color: #E4E4E4;
    font-size: 18px;
    font-family: arial;
    box-shadow: 0px 2px 17px -5px #888888;
}

`;