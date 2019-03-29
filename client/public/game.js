var socket = getSocket();
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var canvas = document.getElementById("canvas");
canvas.width = windowWidth;
canvas.height = windowHeight;
var ctx = canvas.getContext("2d");


drawBoard(windowHeight, windowWidth, ctx);

//hexagon(center,50,ctx);
