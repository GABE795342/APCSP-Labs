//sketch file
//boids under ball
//chaser seperate
var balls = [];
var ball;
// var balls are stand-in for boid so that we do not have to rename everything
// var balls and chaser on same file
var chaser;
var c1;
var distance;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(getRandomColor());
  loadBalls(20);
  stroke(0);
  frameRate(30);
  var c1 = new Chaser (random(width), random(height),random(5,10),color(255));


}
function draw() {
	background(20,20,20);
	ball.run();
	//c1.run();
	for(var i = 0; i < balls.length; i++){
		balls[i].run();
	}
	
}
function loadBalls(numBalls){
	for(var i = 0; i < numBalls; i++){
		var loc = createVector(random(width), random(height));
		var vel = createVector(random(-2,2), random(-2,2));
		var rad = random(5,10);
		var col = getRandomColor();
		var ded = false
		balls.push(new Ball(loc, vel, rad, col, ded));
	}
  var loc = createVector(width/2, height/2);
  var vel = createVector(random(-2,2), random(-2,2));
  var rad = 55;
  var col = color(255,0,0);
    ball = new Chaser(loc, vel, rad, col);
}
//my own attempt at collision detection

function removebob (ball){
	var distance = this.loc
	if (distance < 10){
		delete balls[i];
	}
	
}





//taken from online example, does not seem to work
 for (var i = 0; i < balls.loc; i++) {
    for (var j = 0; j < chaser.loc; j++) {
      const hit = balls[i].hit(chaser[j]);
      if (hit) {
        ball[i].delete
        break;
      } 
    }
  }


function getRandomColor(){
  var r = random(100,255);
  var g = random(100,255);
  var b = random(100,255);
  return color(r,g,b);
}
console.log(balls);
