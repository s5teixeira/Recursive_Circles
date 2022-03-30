//recursive function//
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(245, 238, 248);
  drawCircle2(width/2, height/2, 200); 
}

function drawCircle(x, y, r) { //r=radius
  stroke(0);
  noFill();
  ellipse(x, y, r);
  if(r > 2) {
    drawCircle(x + r/2, y, r/2);
    drawCircle(x - r/2, y, r/2);
    
    //Diagonal Lines 
    line(0, 0, 100, 100);
    line(0,0,400,400);
    line(400,0,0,400);
  }
}

function drawCircle2(x, y, d) {  //d=diameter
  ellipse(x, y, d);
  if(d > 8) {
    drawCircle(x + d/2, y, d/2);
    drawCircle(x - d/2, y, d/2);
    drawCircle(x, y + d/2, d/2);
    drawCircle(x, y - d/2, d/2);
  }
}