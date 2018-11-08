/* Bubble sorting scheme
**
** 10-23-18
**
*/

var randonumbs; //random number generator scheme
var numarray = []; //number array
var right; // right value for bubble comparitor
var left; //left value for bubble for comparitor
var medium; //medium for moving the two values
var sorted; //flag var indicating if numbers have been sorted, 1=true 0=false //unused
var txt;
function preload() {
  txt = loadStrings('txtstring.txt');

}

function setup(){
   	start=millis();
	txtstring(txt);
	sorted=millis();
    myBubblesort();
}

//old code for number comparison
 //for(var i = 0; i < 50; i++){ //for loop with 50 being the number of random numbers
	 //var randonumbs = int(random(0, 1000)); // generates random number between 0 and 1000
	// numarray.push(randonumbs);
 //}

 
 //sorting least to greatest
 
 
 
 
//if(sorted = 0){
function myBubblesort(txt){
	var wordlength = txt.length;
	for (var a = 0; a < length; a++){
		for (var b = 0; b<(length - a - 1); b++){
			if(txt[b] > txt[b+1]){
				var medium = txt[b];
				txt[b] = txt[b+1];
				txt[b+1] = medium;
				
			}
		}
	}
	
	
	
	
}
//	if(left > right){ //if left greater than right
	//	var medium = var left;
		//var left = var right;
		//var right = var medium;
	//}
 //}






/*

//code for a number sorting scheme


var randonumbs; //random number generator scheme
var numarray = []; //number array
var right; // right value for bubble comparitor
var left; //left value for bubble for comparitor
var medium; //medium for moving the two values
var sorted; //flag var indicating if numbers have been sorted, 1=true 0=false //unused
function setup(){
   
    bubbleSort();
}

//old code for number comparison
 //for(var i = 0; i < 50; i++){ //for loop with 50 being the number of random numbers
	 //var randonumbs = int(random(0, 1000)); // generates random number between 0 and 1000
	// numarray.push(randonumbs);
 //}

 
 //sorting least to greatest
 
 
 
 
//if(sorted = 0){
function mybubblesort(txt){
	var wordlength = txt.length;
	for (var a = 0; a < length; a++){
		for (var b = 0; b<(length - a - 1); b++){
			if(txt[b] > txt[b+1]){
				var medium = txt[b];
				txt[b] = txt[b+1];
				txt[b+1] = medium;
				
				
				
			}
			
			
			
		
		
		
		}
	}
	
	
	
	
}
//	if(left > right){ //if left greater than right
	//	var medium = var left;
		//var left = var right;
		//var right = var medium;
	//}
 //}

 }
 */

