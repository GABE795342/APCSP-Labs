

/*
**  Square Constructor Function::
**  eettlin
**  Sept. 11, 2018
*/

//  Add parameters to your constructor function
function Sqr(location, col, width){
	this.loc = location;
	this.col = col;
	this.width = width;
//  Add instance variables to your constructor Function
//What does a square need to know about itself??

  this.render = function(){
	  fill(255);
	  rect(this.loc.x, this.loc.y, this.width, this,width)

  }

}//;  End of Square constructor function
