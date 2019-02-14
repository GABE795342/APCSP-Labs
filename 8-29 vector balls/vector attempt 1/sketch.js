//sketch file
var balls = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0,0,100);
  loadBalls(12);
  stroke(0,255,0);
}
function loadBalls(numBalls){
	for( var i = 0; i < numBalls; i++){
		var loc = createVector(random(width), random(height));
		var vel = createVector(random(-3,3), random(-3,3));
		var rad = random(20,40);
		var col = color(255,0,0);
		balls.push(new Ball(loc, vel, rad, col));
	}
}

function draw() {
	balls.run
	for(var i = 0; i < balls.length; i++){
		balls[i].run();
	}
}

//moved func draw below func loadballs