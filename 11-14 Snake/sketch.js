
//  This is a comment
//  The setup function function is called once when your program begins
var snake;

//position array for nonlinear movement (blocky), certain number of times a second moved, determined by score
var position = []; //position of every block of snake
var score; //score, snake speed increases with higher score
var hertz; //milliseconds between game step
var activeround // high=paused low=active
var snakemovement //1=up 2=down 3=left 4=right


var positionmiddlevalueswapper //position middle value swapper for moving the snake bit by bit

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  //fill(200, 30, 150);



}

//  The draw function is called @ 30 fps
function draw() {
	keyPressed();
	movementintegerclock();
	movesnake();

}

function movementintegerclock(){
	var hertz = 500
	setInterval(movesnake, hertz)
	
	
	
	
}





//position incremented one position in position array for every hertz tick
function movesnake(){
	//squares to be moved on 80x80 grid of possible locations based on upper left corner location, 10x10 pixel food and snake elements.
	
	
	
	
	//loop to increment location of snake
	for (var i = 0; i < position.length; i ++){
		position[i] = position[i+1]
		
		
		
		
		
	
		
	}
	
}

function keyPressed(){
	if(keyCode == 32){
		//32 value is space
		//pause game
		var activeround = 1
	}
	if(keyCode === 40){
		//arrow down
		var snakemovement = 2
	}
	if(keyCode === 38){
		//arrow up
		var snakemovement = 1
	}
	if(keyCode === 39){
		//arrow right
		var snakemovement = 4
	}
	if(keyCode === 37){
		//arrow left
		var snakemovement = 3
	}
	

}