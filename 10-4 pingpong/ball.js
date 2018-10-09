var x = 0;
var y = 500


//needs normal ball func and parts
function Ball(location, velocity, radius, col){
	this.loc = location;
	this.vel = velocity;
	this.rad = radius;
	this.col = col;
	this.acc = createVector(0,.1);
}

this.run = function(){
	this.checkEdges();
	this.update();
	this.render();
}
	
	
this.vel.limit(3)
	this.loc.add(this.vel);

}
this.checkEdges = function(){
	if(this.loc.x < 0) this.vel.x = -this.vel.x;
	if(this.loc.x > width) this.vel.x = -this.vel.x;
	if(this.loc.y < 0) this.vel.y = -this.vel.y;
	if(this.loc.y > height) this.vel.y = -this.vel.y;
}
	