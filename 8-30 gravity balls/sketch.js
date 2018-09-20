//sketch file
var balls = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(getRandomColor());
  loadBalls(20);  
  stroke(getRandomColor());

}
function draw() {
	for(var i = 0; i < balls.length; i++){
		balls[i].run();
	}
}
function loadBalls(numBalls){
	for(var i = 0; i < numBalls; i++){
		var loc = createVector(random(width), random(height));
		var vel = createVector(random(-3,3), random(-3,3));
		var rad = random(5,10);
		var col = getRandomColor();
		balls.push(new Ball(loc, vel, rad, col));
	}
	
	
}
function getRandomColor(){
  var r = random(100);
  var g = random(100);  
  var b = random(200,255); 
  return color(r,g,b);
}
