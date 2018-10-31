
var numBars;
var Bars = [];

var right; // right value for bubble comparitor
var left; //left value for bubble for comparitor
var medium; //medium for moving the two values
var sorted; //flag var indicating if numbers have been sorted, 1=true 0=false



//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  numBars = 100;
  
  loadBars(numBars);


}

//  The draw function is called @ 30 fps
function draw() {

}

function Bar(){
	
	
	
	
}



function loadBars(numBars){
  for(var i = 0; i < numBars; i++){
	var loc = numBars - i

  
  
  
    var col = color(random(0, 255), random(0, 255), random(0, 255));
    var b = new Bar(loc, col);
	Bars.push(b);

  
  
  
  
  }
}




function myBubbleSort(){
	var length = Bars.js
	
	
	
		if(left > right){ //if left greater than right
		medium = left;
		left = right;
		right = medium;
	}
	
	
	
	
	
}