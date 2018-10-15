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
  var paddle1 = new paddle//(createVector(width/2, height/2, createVector(1,2), 25, color(255,0,0)))
  frameRate(60);

}

function paddle(){
	
	var loc = createVector(random(width), random(height));
	var vel = createVector(random(-2,2), random(-2,2));
	//var rad = random(5,10);
	var col = getRandomColor();
	//var ded = false
	new paddle(loc, vel, rad, col, );
	
	
	
	
	
	
	
	var loc = createVector(width/2, height/2);
    var vel = createVector(random(-2,2), random(-2,2));
    var rad = 55;
    var col = color(255,0,0);
}




function loadBalls(numBalls){
	for(var i = 0; i < numBalls; i++){
		var loc = createVector(random(width), random(height));
		var vel = createVector(random(-2,2), random(-2,2));
		var rad = random(5,10);
		var col = getRandomColor();
		var ded = false
		Balls.push(new Ball(loc, vel, rad, col, ded));
	}
	
	
	
	
	
	
	  var loc = createVector(width/2, height/2);
      var vel = createVector(random(-2,2), random(-2,2));
      var rad = 55;
      var col = color(255,0,0);
}





function getRandomColor(){
  var r = random(100,255);
  var g = random(100,255);
  var b = random(100,255);
  return color(r,g,b);
}

//  The draw function is called @ 30 fps
function draw() {
	paddle.run();
	ball.run();
	
	}
	
	
	
	
	
	//if(bigBall.loc.x && padd.loc x( - x+loc.w) 
	//.y-loc.h+(loc.w) &
	//.y-loc.h+(loc.w) &
	
	//&& paddle.x + bigBall.y-loc.h+(loc.w) && true)

