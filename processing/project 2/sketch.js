function setup() {
  createCanvas(500,400,WEBGL);
}

function draw() {
  background(445);
  if (mouseIsPressed) {
    fill(79);
  } else {
    fill(600);
  }

  {ellipseMode(CENTER);
    fill(100); 
    ellipse(50, 50, 55, 30);}

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.05);
  sphere(59);
}