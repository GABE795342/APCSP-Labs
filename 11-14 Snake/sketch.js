//SNAKE SKETCH FILE
var snake;
//position array for non-linear movement (blocky), certain number of times a second moved, determined by score
var position = []; //position of every block of snake
var score; //score, snake speed increases with higher score
//var hertz; //milliseconds between game step
//var activeround // high=paused low=active
var snakemovement//directional movement of snake //1=up 2=down 3=left 4=right
var score = 0;
//var snake = [];//experimental use of array//*(unnecessary due to there only being one used element)
var positionmiddlevalueswapper //position middle value swapper for moving the snake bit by bit





function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  //var snake = new snake(loc, vel);
  //fill(200, 30, 150);
  //numSnake = 1;
  //loadSnake(numSnake);
//  if(activeround = 0){ //mechanism to move snake when paused variable low
//	  var vel = 10  
//  } else if (activeround = 1){ //mechanism to stop snake when paused 
//	  var vel = 0  
//  }
  var loc = createVector(random(0,800),random(0,800));
  var dir = random(1,4); //up=1, down=2, left=3, right=4
  var vel 
  Snake = new Snake(loc, vel, dir)
}

//  The draw function is called @ 30 fps
function draw() {
	keyPressed();
//	movementintegerclock();
	movesnake();
	snake.run();
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



function movesnake(){ //function to load and move snake
	//squares to be moved on 80x80 grid of possible locations based on upper left corner location, 10x10 pixel food and snake elements.
	
	
	//old code for reference pushing to array
	//var b = new Ball(loc, vel, rad, col, sp);
   // Balls.push(b);
//	var b = new Snake(loc, vel);
//	snake.push(b);
	
	
	
	
	
	
	//loop to increment location of snake
	for (var i = 0; i < position.length; i ++){
		position[i] = position[i+1]
		

	
		
	}
	
}

function keyPressed(){
//	if(keyCode == 32){
//		//32 value is space
//		//pause game
//		var activeround = 1
//	}
//	if(keyCode == 80){
//		//80 value is p
//		//unpause game
//		var activeround = 0
//	}
	if(keyCode === 40){
		//arrow down
		var snakemovement = 2
		snake.vel = createVector(0,20);
		snake.loc.add(snake.vel);
	}
	if(keyCode === 38){
		//arrow up
		var snakemovement = 1
		snake.vel = createVector(0,-20);
		snake.loc.add(snake.vel);
	}
	if(keyCode === 39){
		//arrow right
		var snakemovement = 4
		snake.vel = createVector(20,0);
		snake.loc.add(snake.vel);		
	}
	if(keyCode === 37){
		//arrow left
		var snakemovement = 3
		snake.vel = createVector(-20, 0);
		snake.loc.add(snake.vel);		
	}
	

}