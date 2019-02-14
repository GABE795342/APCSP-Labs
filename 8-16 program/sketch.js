
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {

fill(255,5,81);
rect(600,300, 100,100)
triangle(660,50, 100, 100, 200, 300);
fill(0,0,255);
triangle(700,300, 100, 100, 90, 56);
}
