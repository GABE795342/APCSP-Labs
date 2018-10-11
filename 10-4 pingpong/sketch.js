/*
**
**
**
**
**
*/
 
var Balls = [];
var paddle;

//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255, 100, 0);
  fill(200, 30, 150);
  loadBalls(10)
  paddle= new paddle(createVector(width/2, height/2, createVector(1,2), 25, color(255,0,0)))


}

//  The draw function is called @ 30 fps
function draw() {

}
