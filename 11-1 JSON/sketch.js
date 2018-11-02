
// // https://docs.google.com/presentation/d/1UnMJ2NWzQ4_Qo7lftdEj7KPZgQaapINQcbj1Z3Vjps0/edit?usp=sharing
// http://api.open-notify.org/astros.json
var spacemen;



function preload(){
	spacemen = loadJSON("cosmonauts.json");
	
	
}

function setup() {
	//example code from slides
	//data.countrydata[3].males
	spacemen.people[3].name //?
	console.log(spacemen)
}

//  The draw function is called @ 30 fps
function draw() {

}
