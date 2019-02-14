//sketch/setup file
var b1;
var b2;
var b3;
var b4;
var b5;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255);
  stroke(255)
  b1 = new Ball (random(width), random(height),random(5,10),color(255,0,0));
  cnv.position((windowWidth-width)/2, 30);
  b2 = new Ball (random(width), random(height),random(5,10),color(255));
  b3 = new Ball (random(width), random(height),random(5,10),color(0));
  b4 = new Ball (random(width), random(height),random(5,10),color(255,0,0));
  b5 = new Ball (random(width), random(height),random(5,10),color(255));
  b6 = new Ball (random(width), random(height),random(5,10),color(0));
  b7 = new Ball (random(width), random(height),random(5,10),color(255,0,0));
  b8 = new Ball (random(width), random(height),random(5,10),color(255));
  b9 = new Ball (random(width), random(height),random(5,10),color(0));
}
function draw() {
	b1.run();
	b2.run();
	b3.run();
	b4.run();
	b5.run();
	b6.run();
	b7.run();
	b8.run();
	b9.run();
}