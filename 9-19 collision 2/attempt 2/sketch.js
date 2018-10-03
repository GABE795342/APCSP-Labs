//sketch file
var balls = [];
var ball;
var boids = [];
var other;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(getRandomColor());
  loadBalls(1);
  loadBoids(200);
  stroke(0);
  frameRate(30);
}
function draw() {
  background(20,20,20);
  ball.run();
	for(var i = 0; i < balls.length; i++){
		balls[i].run();
	}
  boid.run();
	for(var i = 0; i < boids.length; i++){
		boids[i].run();
	}
}
function loadBoids(numBoids){
	for(var i = 0; i < numBoids; i++){
		var loc = createVector(random(width), random(height));
		var vel = createVector(random(-2,2), random(-2,2));
		var col = getRandomColor();
		boids.push(new Ball(loc, vel, rad, col));
	}
  var loc = createVector(width/2, height/2);
  var vel = createVector(random(-2,2), random(-2,2));
  var rad = 55;
  var col = color(255,0,0);
    boid = new Boid(loc, vel, rad, col);
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
  var col = color(255,0,0);
    ball = new Ball(loc, vel, rad, col);
}
function getRandomColor(){
  var r = random(100,255);
  var g = random(100,255);
  var b = random(100,255);
  return color(r,g,b);
}
console.log(balls);
