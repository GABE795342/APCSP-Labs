/*
**  Ball Constructor Function
**  Gabriel Wilde
**  Sept 19, 2018
**  vector Attraction revision
**  ball collision revision
**  boid attraction revision 9-24
*/
function Ball(location, velocity, radius, col){
	this.loc = location;
	this.vel = velocity;
	this.col = col;
	this.acc = createVector(0,.1);

	//  Methods  ++++++++++++++++++++++++++++++++++++++++++
	this.run = function(){
		this.checkEdges();
		this.update();
		this.render();
	}

	this.update = function(){
		if(this !== boid){
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
				var steeringForce = p5.Vector.sub(this.loc, boid.loc );
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
	push() // push or save the current coord system into the stack
		translate(this.loc.x, this.loc.y);
		rotate(0);
		triangle(-5, 0, 5, 0, 0, -15);
	pop()  //  pop or restore the coordianate system from the stack;
	}
}//  end of constructor
