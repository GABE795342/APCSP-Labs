
//  This is a comment
//  The setup function function is called once when your program begins
var snake;

//position array for nonlinear movement (blocky), certain number of times a second moved, determined by score
var position = []; //position of every block of snake
var score; //score, snake speed increases with higher score
var hertz; //block movements per second
var activeround // high=paused low=active


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {

}


//position incremented one position in position array for every hertz tick
function movesnake(){
	
	
}

function keyPressed(){
	if(keyCode == 32){
		//32 value is space
		//pause game
		
		
	}
	if(keyCode === 40){
		//arrow down
		
		
	}
	if(keyCode === 38){
		//arrow up
		
		
	}
	if(keyCode === 39){
		//arrow right
		
		
	}
	if(keyCode === 37){
		//arrow left
		
		
	}
	
	
	
	
	
	
	
}