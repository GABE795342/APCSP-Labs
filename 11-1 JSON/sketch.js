
// // https://docs.google.com/presentation/d/1UnMJ2NWzQ4_Qo7lftdEj7KPZgQaapINQcbj1Z3Vjps0/edit?usp=sharing
// http://api.open-notify.org/astros.json
var spacemen;
var txt;
function preload(){
	spacemen = loadJSON('cosmonauts.json');
}
function setup() {
	//example code from slides
	//data.countrydata[3].males
	spacemen.people[1].name //?
	console.log(spacemen)
	myBubblesort(spacemen.people);
	console.log(spacemen)
}
//  The draw function is called @ 30 fps
function draw() {
}
function myBubblesort(txt){
	var wordlength = txt.length;
	for (var a = 0; a < length; a++){
		for (var b = 0; b<(length - a - 1); b++){
			if(txt[b].name > txt[b+1].name){ //  ".name" added only in comparison
				var medium = txt[b];
				txt[b] = txt[b+1];
				txt[b+1] = medium;
			}
		}
	}
}















