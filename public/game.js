var socket = getSocket();
var w = window.innerWidth;
var h = window.innerHeight;
var canvas = document.getElementById("canvas");
canvas.width = w;
canvas.height = h;
var ctx = canvas.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(w, h);
ctx.stroke();