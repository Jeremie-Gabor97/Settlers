function drawHexagon(center, dim, ctx) {
    prev = new Position(0,0);
    curr = new Position(center.x,center.y+dim);
    vertexPos = [90,150,210,270,330,30];
    for(i=1; i <= 6; i++){
        prev.x = curr.x;
        prev.y = curr.y;
        curr.x = center.x + dim * Math.cos(vertexPos[i%6] * Math.PI / 180), 
        curr.y = center.y + dim * Math.sin(vertexPos[i%6] * Math.PI / 180);
        ctx.moveTo(prev.x,prev.y);
        ctx.lineTo(curr.x,curr.y);
        ctx.stroke();
    }   // The function returns the product of p1 and p2
  }

function drawBoard(windowHeight, windowWidth, ctx) {
    heightOfTile = (windowHeight * 0.95) / 5;
    centerToVertex = heightOfTile / 2;
    xSpace = 2 * centerToVertex * Math.cos(30 * Math.PI / 180);
    ySpace = centerToVertex + centerToVertex * Math.sin(30 * Math.PI / 180);
    center = new Position(300,100);
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