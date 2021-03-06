//sketch file
var balls = [];
var boid = [];
var ball;
var other;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(getRandomColor());
  loadBalls(30);
  stroke(0);
  frameRate(60);
}
function draw() {
  background(255,255,255);
  ball.run();
	for(var i = 0; i < balls.length; i++){
		balls[i].run();
	}
	
}
function loadBoid(numBoids){
	for(var j = 0; j<numBoids; j++){
		var loc = createVector(random(width), random(height));
		var vel = createVector(random(-2,2), random(-2,2));
		var rad = random(5,10);
		var col = getRandomColor();
		balls.push(new triangle(loc, vel, rad, col)); // replace loc vel rad col with other stuff
		
		push();
		translate(this.loc.x, this.loc.y);
		rotate(someAngle);
		triangle(-5,0,5,0,0,-15);
		pop();
	
	}
	
}

function loadBalls(numBalls){
	for(var i = 0; i < numBalls; i++){
		var loc = createVector(random(width), random(height));
		var vel = createVector(random(-2,2), random(-2,2));
		var rad = random(5,10);
		var col = getRandomColor();
		balls.push(new Ball(loc, vel, rad, col));
	}
  var loc = createVector(width/2, height/2);
  var vel = createVector(random(-2,2), random(-2,2));
  var rad = 55;
  var col = color(0,0,150);
    ball = new Ball(loc, vel, rad, col);
}
function getRandomColor(){
  var r = random(100,255);
  var g = random(100,255);
  var b = random(100,255);
  return color(r,g,b);
}
console.log(balls);
