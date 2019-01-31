x =50;
y =50;
k=1;
l =1;
function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(2);
 noFill();
  ellipse(x,y,50,50);
  if(x>width  || x <0){k = -1*k;}
  x = x+k;
  if(y>height || y <0){l = l*-1};
  y = y+l;
}