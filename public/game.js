var socket = getSocket();
var w = window.innerWidth;
var h = window.innerHeight;
var canvas = document.getElementById("canvas");
canvas.width = w;
canvas.height = h;
var ctx = canvas.getContext("2d");

function hexagon(center, dim, ctx) {
    prev = new Position(0,0);
    curr = new Position(center.x+dim,center.y);
    for(i=1; i <= 6; i++){
        prev.x = curr.x;
        prev.y = curr.y;
        curr.x = center.x + dim * Math.cos(i * 60 * Math.PI / 180), 
        curr.y = center.y + dim * Math.sin(i * 60 * Math.PI / 180);
        ctx.moveTo(prev.x,prev.y);
        ctx.lineTo(curr.x,curr.y);
        ctx.stroke();
    }   // The function returns the product of p1 and p2
  }

var center = new Position(100,200);
hexagon(center,50,ctx);

ctx.moveTo(0, 0);
ctx.lineTo(center.x, center.y);
ctx.stroke();