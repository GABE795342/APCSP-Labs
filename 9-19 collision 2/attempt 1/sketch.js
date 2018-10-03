/*
**  Sketch File
**  Gabriel Wilde 9-24
**  Boid revision
*/
var Boids = [];
var boid;
var other;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(getRandomColor());
  loadBoids(30);
  stroke(0);
  //frameRate(5);
}
function draw() {
  background(255,255,255);
  boid.run();
	for(var i = 0; i < balls.length; i++){
		boids[i].run();
	}
	// todo list:
	//replace balls with triangles
}
function loadBoids(numBoids){
	for(var j = 0; j<numBoids; j++){
		var loc = createVector(random(width), random(height));
		var vel = createVector(random(-2,2), random(-2,2));
		var rad = random(5,10);
		var col = getRandomColor();
		boids.push(new triangle(loc, vel, rad, col)); // replace loc vel rad col with other cool stuff
		
		push();
		translate(this.loc.x, this.loc.y);
		rotate(someAngle);
		triangle(-5,0,5,0,0,-15);
		pop();
	
	}
	var loc = createVector(width/2, height/2);
	var vel = createVector(random(-2,2), random(-2,2));
	var rad = 55;
	var col = color(0,0,150);
    boid = new Boid(loc, vel, rad, col);
}

function loadBoids(numBoids){
	for(var i = 0; i < numBoids; i++){
		var loc = createVector(random(width), random(height));
		var vel = createVector(random(-2,2), random(-2,2));
		var rad = random(5,10);
		var col = getRandomColor();
		Boids.push(new Boid);
	}
  var loc = createVector(width/2, height/2);
  var vel = createVector(random(-2,2), random(-2,2));
  var rad = 55;
  var col = color(0,0,150);
    boid = new Boid(loc, vel, rad, col);
}
function getRandomColor(){
  var r = random(100,255);
  var g = random(100,255);
  var b = random(100,255);
  return color(r,g,b);
}
console.log(boid);
