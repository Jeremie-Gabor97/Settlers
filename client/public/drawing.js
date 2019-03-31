function drawHexagon(center, dim, ctx) {
    prev = new Position(0,0);
    curr = new Position(center.x,center.y+dim);
    vertexPos = [90,150,210,270,330,30];
    ctx.beginPath();
    ctx.moveTo(curr.x,curr.y);
    for(i=1; i <= 6; i++){
        prev.x = curr.x;
        prev.y = curr.y;
        curr.x = center.x + dim * Math.cos(vertexPos[i%6] * Math.PI / 180), 
        curr.y = center.y + dim * Math.sin(vertexPos[i%6] * Math.PI / 180);
        ctx.lineTo(curr.x,curr.y);
        ctx.stroke();
    }   // The function returns the product of p1 and p2
    ctx.fillStyle = "red";
    ctx.fill();
  }

function drawBoard(windowHeight, windowWidth, ctx) {
    centerOfWindow = new Position(windowWidth/2,windowHeight/2);
    heightOfTile = (windowHeight) / 5;
    centerToVertex = heightOfTile / 2;
    xSpace = 2 * centerToVertex * Math.cos(30 * Math.PI / 180);
    ySpace = centerToVertex + centerToVertex * Math.sin(30 * Math.PI / 180);
    center = new Position(0,0);
    center.x = centerOfWindow.x - xSpace;
    center.y = centerOfWindow.y - 2 * ySpace;
    // center is will be the center of each hexagon separately,
    // it starts at the center of the top left one
    currCenter = new Position(center.x,center.y);
    tilePerRow = [3,4,5,4,3];
    for(var row=0; row < 5; row++){
        currCenter = new Position(center.x ,center.y);
        currCenter.x -= (tilePerRow[row] - 3) * centerToVertex * Math.cos(30 * Math.PI / 180);
        currCenter.y += row * ySpace;
        for(var tile=0; tile < tilePerRow[row]; tile++){
            drawHexagon(currCenter, centerToVertex, ctx);
            currCenter.x += xSpace;
        }
    }
}