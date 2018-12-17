//snake snake constructor
//var xvalueacceleration;
//var yvalueacceleration;
//var xvalloc;
//var yvalloc;
function Snake(loc, vel){
	//snake.loc = 0;
	//snake.vel = 0;
	//snake.vel = snakemovement;
	//var xvalloc = snake.loc.x
	//var yvalloc = snake.loc.y
//	this.xvalloc = locxval;
//	this.yvalloc = locyval;
	//xvalloc = 0;
	//yvalloc = 0;
//	if(snakemovement = 1){
//	snake.vel = snake.vel + 10
//	}
  this.loc = loc;
  this.vel = vel;
  this.segments = [];
  this.status = "false";
  this.run = function(){
    this.update();
    this.render();
    this.dead();
  }
//update function
  this.update = function(){
    for(var i = this.segments.length - 1; i >= 0; i--){
      if(i > 0){
        this.segments[i].x = this.segments[i-1].x;
        this.segments[i].y = this.segments[i-1].y;
      }else{
        this.segments[0].x = this.loc.x;
        this.segments[0].y = this.loc.y;
      }
    }
	
	
	
    this.loc.add(this.vel);
    this.loc.x = constrain(this.loc.x, 0, 800-20)
    this.loc.y = constrain(this.loc.y, 0, 800-20)
  }
  
  //	fill(0);
	//rect(xvalloc, yvalloc, 10, 10);
//	if(snakemovement = 1){
//		xvalueacceleration = 0;
//		yvalueacceleration = -10;
//	}
//	if(snakemovement = 2){
//		xvalueacceleration = 0;
//		yvalueacceleration = 10;
//	}
//	if(snakemovement = 3){
//		xvalueacceleration = -10;
//		yvalueacceleration = 0;
//	}
//	if(snakemovement = 4){
//		xvalueacceleration = 10;
//		yvalueacceleration = 0;
//	}
  
  this.render = function(){
    for(var i = 0; i < this.segments.length; i++){
      //snake color
      fill(255, 255, 255);
      stroke(255, 255, 255);
      rect(this.segments[i].x, this.segments[i].y, 20, 20)
    }
    fill(255);
    rect(this.loc.x, this.loc.y, 20, 20);
  }

  
  
  this.dead = function(){
    for(var i = 0; i < this.segments.length; i++){
      var distX = this.loc.x - this.segments[i].x;
      var distY = this.loc.y - this.segments[i].y;
      if((distX == 0) && (distY == 0)){
        this.status = "gameover";
        console.log(this.status);
      }
    }
  }
}