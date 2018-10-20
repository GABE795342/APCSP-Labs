/*
** Final sketch file for the evil ball game 
Gabriel Wilde
10-19-18
*/


var Balls = [];
var paddle;
var score = 0;

function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  numBalls = 10;
  //loads exact number of balls- same stuff from last project
  loadBalls(numBalls);
  var loc = createVector(400, 550)
  var vel = createVector(0, 0);
  var width = 100;
  var length = 20;
  var col = color(random(0, 255), random(0, 255), random(0, 255))
  paddle = new Paddle(loc, vel, width, length, col);
}



//loads balls
function loadBalls(numBalls){
  for(var i = 0; i < numBalls; i++){

    var loc = createVector(random(100, 800), 20);
    var vel = createVector(random(-5, 5), random(-15, 15));
    var rad = 25
    var col = color(random(0, 255), random(0, 255), random(0, 255));
    var sp = 3
	//new var for ball element and pushes it to array
    var b = new Ball(loc, vel, rad, col, sp);
    Balls.push(b);
  }
}

//most important code in draw function meaning updated 30x second
function draw(){
  background(20, 20, 20, 6000);

  textSize(10);
  fill(0, 255, 0);
  text(score, 700, 50)
  if(score > 100 && score < 200){
  fill(0, 255, random(0,255))
  text("tryhard dont you have something better to do?", 50, 50)}
  if(score > 200){
  fill(0, 255, random(0,255))
  text("yee yee yee ", 100, 400)}
  noStroke();
  //noStroke();
  
  
  
  //ball array anihilator if they touch paddle
  paddle.run();
  for(var i = 0; i < Balls.length; i++){
    Balls[i].run();
    var aBalls = Balls[i];

    var distY = abs(aBalls.loc.y - 560)

    if((distY < 10) && (aBalls.loc.x > mouseX - 100) && (aBalls.loc.x < mouseX + 125) && (aBalls.vel.y > 0)){
      Balls.splice(i,1);
 
 // generous scoring, 1000 for every ball
      score = score + 1000;
    }
    
	
	
	
    if((distY < 10) && (aBalls.loc.x > mouseX - 100 ) && (aBalls.loc.x < mouseX + 100) && (aBalls.vel.y < 0)){
    //ball reset
      var numBalls = Balls.length + 50;
      Balls = []
      loadBalls(numBalls)
      for(var i = 0; i < Balls.length; i++){
        Balls[i].run;
      }
    }
  }
}







