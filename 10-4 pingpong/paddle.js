//var x = 0;
//var y = 500
//var wid = 50;
//var ht = 20;


//(loc, vel, rad, col, sp)
//PADDLE FUNCTION
//function Paddle(loc, vel, width, length, col){
	//this.loc = location;
	//this.vel = velocity;
	// from ball func
	//this.rad = radius;
	//this.vel = vel;
	//this.wid = width;
	//this.len = length;
	//this.col = col;
	
  //calls other functions
	//this.run = function(){
   // this.checkEdges();
   // this.update();
  //  this.render();
 // }
  
  function Paddle(loc, vel, width, length, col){
  // Instance variables
  this.loc = loc;
  this.vel = vel;
  this.wdd = width;
  this.lnn = length;
  this.col = col;
  //this function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
  
  
//lerps paddle to mouse
  this.update = function(){
    paddleLength = width/2
    this.loc.x = lerp(this.loc.x, mouseX-paddleLength, .05)
  }
  //checkEdges() reverses speed when the rectangle touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  //render() draws the paddle at the new location
  this.render = function(){
    fill(255,0,0);
    rect(this.loc.x, this.loc.y, this.wdd, this.lnn);
  }
}
	//this.acc = createVector(0,.1);
	
	

	
	
	
//ARCHIVED CODE 
//++++++++++++++++++++++++++++++++++


//integrate rectangle later
//function draw() {
	//rect(
//
	//
	//}

//this.run = function(){
	//this.checkEdges();
	//this.update();
	//this.render();
//}
	
	
//this.vel.limit(3)
	//this.loc.add(this.vel);

//this.checkEdges = function(){
	//if(this.loc.x < 0) this.vel.x = -this.vel.x;
	//if(this.loc.x > width) this.vel.x = -this.vel.x;
	//if(this.loc.y < 0) this.vel.y = -this.vel.y;
//	if(this.loc.y > height) this.vel.y = -this.vel.y;
//}
	