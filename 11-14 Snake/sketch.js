//SNAKE SKETCH FILE
var snake;
//var snake = [];
var food = [];
//position array for non-linear movement (blocky), certain number of times a second moved, determined by score
//position = [];
var numSeg = 1;
var start = "true"
var font;
var score = 0;
//var score; //score, snake speed increases with higher score
//var hertz; //milliseconds between game step
//var activeround // high=paused low=active
var snakemovement//directional movement of snake //1=up 2=down 3=left 4=right
//var score = 0;
//var snake = [];//experimental use of array//*(unnecessary due to there only being one used element)
var positionmiddlevalueswapper //position middle value swapper for moving the snake bit by bit



function setup(){
  textAlign(CENTER, CENTER);
  frameRate(10); //lower speed=lower difficulty, inverse true.
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(121, 139, 19);
    //var snake = new snake(loc, vel);
  //fill(200, 30, 150);
  //numSnake = 1;
  //loadSnake(numSnake);
//  if(activeround = 0){ //mechanism to move snake when paused variable low
//	  var vel = 10  
//  } else if (activeround = 1){ //mechanism to stop snake when paused 
//	  var vel = 0  
//  }
  loadSnake();
  loadFood(1);
}
//draw function


function draw(){
  //color of background
  background(0, 0, 100);

  fill(255, 0, 0);
  snake.run();
  textSize(40);
  //location of score
  text(score, 100, 100);
  for(var i = 0; i < food.length; i++){
    food[i].run();
  }

  locUPDATERfunction();
  deadGame();
  gameStart();
  //	//movementintegerclock();
//	movesnake();
//snake.run();
//food.run();
//score system/tiers?
  
}
function initialloadscheme(){
	var a = new snake(loc, vel, dir);
	for(var b = 0; b < snake.length; b++){	
	}
}


function locUPDATERfunction(){
  for(var i = 0; i < food.length; i++){
    var distX = food[i].loc.x - snake.loc.x;
    var distY = food[i].loc.y - snake.loc.y;
    if(distX == (0) && distY == (0)){
      //splices food(gets rid of food and puts it in new location)
      food.splice(i, 1);
      loadFood(1);
      snake.segments.push(createVector(0, 0));
      score = score + 10

    }
  }
}
//snake function
function loadSnake(){
  var loc = createVector(200, 200);
  var vel = createVector(0, 0);
  snake = new Snake(loc, vel);
}
//food function
function loadFood(numFood){ // similar to schemes used for paddle ball game (with number of 
  //food loading scheme not my own
  for(var i = 0; i < numFood; i++){
    var min = 1;
    //40 * 20 = 800
    var max = 40;
    //random location
    var locX = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    var locY = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    var loc = createVector(locX, locY);
    var f = new Food(loc);
    food.push(f);
  }
}
function food(loc, liv){ //location, //liv= uneaten or eaten food
	snake.loc = createVector(random(0,790),random(0,790));
	rect(loc.width, loc.height, 10, 10);
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//unused clock integer variable 
//function movementintegerclock(){
	//var hertz = 500
//	setInterval(movesnake, hertz)
//}
//\/ old snake loading scheme \/  
//function loadSnakeloadSnake(){ //snake initial loader
	//var loc = createVector(random(0,790),random(0,790))
	//var vel = createVector(random(-15, 15), random(-15, 15));
//	var b = new Snake(loc, vel);
//	snake.push(b);
//}
//position incremented one position in position array for every hertz tick//UNUSED
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//directions I move with arrow keys
function keyPressed(){
  start = "false"
  //up arrow key
  if(keyCode === 38){
	var snakemovement = 1;
    snake.vel = createVector(0, -20)
  }
  //down arrow key
  if(keyCode === 40){
	var snakemovement = 2;
    snake.vel = createVector(0, 20)
  }
  //right arrow key
  if(keyCode === 39){
 var snakemovement = 4;
    snake.vel = createVector(20, 0)
  }
  //left arrow key
  if(keyCode === 37){
	   var snakemovement = 3;
    snake.vel = createVector(-20, 0)
  }
  	console.log(snakemovement);
}


function deadGame(){
  if(snake.status == "true"){
    snake = 0; //resets length of snake
    score = 0; //resets score counter
    loadSnake();
    gameStart();
  }
}



//when game starts
function gameStart(){
  if(start == "true"){
    textFont()
    fill(255);
    textAlign(CENTER);
    textSize(25);
    text("Press any button to start", 400, 700);
  }
   if(this.status  == "gameover"){
    textFont()
    fill(255);
    textAlign(CENTER);
    textSize(25);
    text("Learn to play", 400, 550)
  }
}

