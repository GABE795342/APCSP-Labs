//sketch file
var balls = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(getRandomColor());
  loadBalls(120);  
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
		var rad = random(20,40);
		var col = getRandomColor();
		balls.push(new Ball(loc, vel, rad, col));
	}
	
	
}


function getRandomColor(){
  var r = random(255);
  var g = random(255);  
  var b = random(255); 
  
  return color(r,g,b);
  
}
