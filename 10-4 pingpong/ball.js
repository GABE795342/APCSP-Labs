var x = 0;
var y = 500


//needs normal ball func and parts
function Ball(loc, vel, rad, col, sp){
  this.loc = loc;
  this.vel = vel;
  this.rad = rad;
  this.col = col;
  this.sp = sp;

   //location updater happens 30 times/second by adding the velocity per second to location
  this.update = function(){
    this.loc.x = this.loc.x + this.vel.x;
    this.loc.y = this.loc.y + this.vel.y;
  }
  
  
//keeps it incheck nothing over the edge here
//makes ball go opposite direction when it intersects/hits walls of canvas
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }


  //call for other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
    this.checkPaddle();
  }



  this.render = function(){
    fill(this.col);
    ellipse(this.loc.x, this.loc.y, rad, rad);
  }

  this.checkPaddle = function(){

  
  
    var distY = abs(this.loc.y - 560)
	

	
	//for if ball hits top/bottom of paddle
    if((distY < 10) && (this.loc.x > mouseX - 100) && (this.loc.x < mouseX + 125) && (this.vel.y > 0)){
      this.sp = 1
    }
    if((distY < 10) && (this.loc.x > mouseX - 100 ) && (this.loc.x < mouseX + 100) && (this.vel.y < 0)){
      this.sp = 2
    }
  }
}










//OLD CODE UNUSED SECTION 
//UNUSED UNUSED UNUSED UNUSED

//this.run = function(){
//	this.checkEdges();
//	this.update();
//	this.render();
//}

	//un // text when loc and vel vector defined.
//this.vel.limit(3)
//this.loc.add(this.vel);

//this.checkEdges = function(){
	//if(this.loc.x < 0) this.vel.x = -this.vel.x;
	//if(this.loc.x > width) this.vel.x = -this.vel.x;
	//if(this.loc.y < 0) this.vel.y = -this.vel.y;
	//if(this.loc.y > height) this.vel.y = -this.vel.y;
//}
	