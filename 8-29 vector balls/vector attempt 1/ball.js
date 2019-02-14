/*
**  Ball Constructor Function
**  Gabriel Wilde
**  Aug 20, 2018
**  vector revision
*/
function Ball(location, velocity, radius, col){
	this.loc = location;
	this.vel = velocity;
	this.rad = radius;
	this.col = col;

	//  Methods  ++++++++++++++++++++++++++++++++++++++++++
	this.run = function(){
    this.checkEdges();
		this.update();
		this.render();
}
this.update = function(){
	this.vel.X = this.vel.X + this.vel.X;
	this.vel.Y = this.vel.Y + this.vel.Y;
}
this.checkEdges = function(){
	if(this.locX < 0) this.vel.X = -this.vel.X;
	if(this.locX > width) this.vel.X = -this.vel.X;
	if(this.locY < 0) this.vel.Y = -this.vel.Y;
	if(this.locY > height) this.vel.Y = -this.vel.Y;
}
this.render = function(){
	fill(this.col);
	ellipse(this.vel.X, this.vel.Y, 10, 10);
	}
}
