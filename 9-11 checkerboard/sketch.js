/*
**Lab 911:CheckerBoard
**
**9.14.18
*/
//  Global variables
// Declare squares[] as a global variable
var squares = [];
var square;
// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  // Create a function that loads the squares into an
  // array of square objects and call the function

  loadSquares();
  //  traverse array and run each square

}


//row=row count
//clm=column count
function loadSquares(){
	for(row=0;row<8;){
		for(clm=0;clm<8;){
			if(clm%2==0){
				var loc=createVector(row*100, clm*100);
				//var loc=createVector((row*100)(clm*100));
				//squares.push(new Sqr());
			}
			
			
			
		}
		
		
		
	}
	//var rowNum=0
	//for(var i=0; i<64; i++){
  //  create a square object and push it into the squares array
  //  create a loop that will push 64 squares into an array
  //  calculate the x and y position in terms of the loop control variable
}