/*
** Final sketch file for the ball paddle game 
Gabriel Wilde
10-22-18
*/

var Balls = [];
var paddle;
var score = 0;


function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(40, 40, 40);
  numBalls = 12;
  //loads exact number of balls- same stuff from last project
  loadBalls(numBalls);
  //paddle = new Paddle(loc, vel, width, length, col);
  var loc = createVector(400, 550)
  var vel = createVector(0, 0);
  var width = 60;
  var length = 20;
  var col = color(random(150, 255), random(150, 255), random(150, 255))
  paddle = new Paddle(loc, vel, width, length, col);
   //  var paddle = new Paddle(loc, vel, width, length, col);
}

//load balls

function loadBalls(numBalls){
  for(var i = 0; i < numBalls; i++){
    var loc = createVector(random(100, 800), 20);
    var vel = createVector(random(-15, 15), random(-15, 15));
    var rad = 12
    var col = color(random(0, 255), random(0, 255), random(0, 255));
    var sp = 5
	//new var for ball element and pushes it to array
    var b = new Ball(loc, vel, rad, col, sp);
    Balls.push(b);
  }
}

//draw boids + mouse controlled ball
function draw(){
  background(20, 20, 20, 6000);

  textSize(15);
  fill(0, 255, 0);
  text(score, 700, 50)
  if(score > 250000){
  fill(255)
   textSize(50);
  text("YOU WIN", 100, 400)}
 // noStroke();
  //noStroke();
  //get rid of outlines
 // noStroke();
  paddle.run();
  for(var i = 0; i < Balls.length; i++){
    Balls[i].run();
	
    var altBalls = Balls[i];

    var distY = abs(altBalls.loc.y - 560)

    if((distY < 10) && (altBalls.loc.x > mouseX - 100) && (altBalls.loc.x < mouseX + 125) && (altBalls.vel.y > 0)){
      Balls.splice(i,1);
 
 // generous scoring, 1000 for every ball
      score = score + 1000;
    }
	
	
    if((distY < 10) && (altBalls.loc.x > mouseX - 100 ) && (altBalls.loc.x < mouseX + 100) && (altBalls.vel.y < 0)){
      //decides how many balls are going to be in the next "reset"
      var numBalls = Balls.length + 50;
      //resets the array (deleted all the current balls)
      Balls = []
      loadBalls(numBalls)
      for(var i = 0; i < Balls.length; i++){
        Balls[i].run;
      }
    }
  }
}

