//sketch/setup file
var Ball;
var balls = [200];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255);
  stroke(255)
  cnv.position((windowWidth-width)/2, 30);
  b1 = new Ball (random(width), random(height),random(5,10),color(255,0,0));
}
function draw() {
}
var b = new Ball(x, y, dx, dy, 12);
balls.push(B)
console.log(balls);

for( var i=0; i<12; i = i +1){
	var b1=new Ball(x, y, dx, dy, rad)
	balls.push(b1)
}
for(var i=0; balls.length; i=i+1);
balls[i].run()
