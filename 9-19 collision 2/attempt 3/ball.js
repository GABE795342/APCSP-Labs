/*
**  Ball Constructor Function
**  Gabriel Wilde
**  Sept 5, 2018
**  vector Attraction revision
*/
function Ball(location, velocity, radius, col){
	this.loc = location;
	this.vel = velocity;
	this.rad = radius;
	this.col = col;
	this.acc = createVector(0,.1);

	//  Methods  ++++++++++++++++++++++++++++++++++++++++++
	this.run = function(){
		this.checkEdges();
		this.update();
		this.render();
	}

	this.update = function(){
		if(this !== ball){
			//this.vel.x = this.vel.x + this.vel.x;
			//this.vel.y = this.vel.y + this.vel.y;
			var d = this.loc.dist(ball.loc);
			if(d<350){
				var steeringForce = p5.Vector.sub(ball.loc, this.loc);
				steeringForce.normalize();
				steeringForce.mult(.02);
				this.vel.add(steeringForce);
			}
			if(d<150){
				var steeringForce = p5.Vector.sub(this.loc, ball.loc );
				steeringForce.normalize();
				steeringForce.mult(.1);
        this.vel.add(steeringForce);
			}
			this.vel.add(steeringForce);
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

	this.render = function(){
		fill(this.col);
		push() // push or save the current coord system into the stack
		translate(this.loc.x, this.loc.y);
		rotate((this.vel.x)*(this.vel.y)-PI);
		triangle(-5, 0, 5, 0, 0, -15);
		pop()  //  pop or restore the coordianate system from the stack
	}
}//  end of constructor





/*
** chaser func in same ball file
*/
function Chaser(location, velocity, radius, col){
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
	//this.vel.x = this.vel.x + this.vel.x;
	//this.vel.y = this.vel.y + this.vel.y;
	this.loc.add(this.vel);
}
this.checkEdges = function(){
	if(this.loc.x < 0) this.vel.x = -this.vel.x;
	if(this.loc.x > width) this.vel.x = -this.vel.x;
	if(this.loc.y < 0) this.vel.y = -this.vel.y;
	if(this.loc.y > height) this.vel.y = -this.vel.y;
}
this.render = function(){
	fill(this.col);
	ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
	}
}

