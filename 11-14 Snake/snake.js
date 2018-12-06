//snake snake constructor
var xvalueacceleration;
var yvalueacceleration;
var xvalloc;
var yvalloc;
function snake(locxval, locyval, dir){ //location, velocity, and unused direction
	//snake.loc = 0;
	//snake.vel = 0;
	//snake.vel = snakemovement;
	//var xvalloc = snake.loc.x
	//var yvalloc = snake.loc.y
	this.xvalloc = locxval;
	this.yvalloc = locyval;
	xvalloc = 0;
	yvalloc = 0;
//	if(snakemovement = 1){
//	snake.vel = snake.vel + 10
//	}
	fill(0);
	rect(xvalloc, yvalloc, 10, 10);
	if(snakemovement = 1){
		xvalueacceleration = 0;
		yvalueacceleration = -10;
	}
	if(snakemovement = 2){
		xvalueacceleration = 0;
		yvalueacceleration = 10;
	}
	if(snakemovement = 3){
		xvalueacceleration = -10;
		yvalueacceleration = 0;
	}
	if(snakemovement = 4){
		xvalueacceleration = 10;
		yvalueacceleration = 0;
	}
	this.update = function(){
		xvalloc = xvalloc + xvalueacceleration;
		yvalloc = yvalloc + yvalueacceleration;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}