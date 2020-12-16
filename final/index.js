 //video on hover below

 window.onload = function() { //executes code after DOM loads
 //--- select all <video> on the page
 const vids = document.getElementsByTagName("video")
 // Loop over the selected elements and add event listeners
 for (let i = 0; i < vids.length; i++) {
   vids[i].addEventListener( "mouseover", function(e) { 

     vids[i].play()
   })
   vids[i].addEventListener( "mouseout", function(e) {
     vids[i].pause()
   })
 }
}





//animation interaction on the home page

'use strict';

var tileCount = 8;
var actRandomSeed = 0;

var circleAlpha = 130;
var circleColor;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  noFill();

  canvas.position(0,0);
  canvas.style('z-index', '-4');

  circleColor = color(0, 255, 0, circleAlpha);

}

function draw() {
  translate(width / tileCount / 2, height / tileCount / 2);

  background (14, 11,3);

  randomSeed(actRandomSeed);

  stroke(circleColor);
  strokeWeight(mouseY / 60);

  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {

      var posX = width / tileCount * gridX +random(-20,20) ;
      var posY = height / tileCount * gridY +random(-20,20) ;



      var shiftX = random(-mouseX, mouseX) / 20;
      var shiftY = random(-mouseX, mouseX) / 20;

      ellipse(posX + shiftX, posY + shiftY, mouseY / random(5,15), mouseY / random(5,15));

    }
  }
}

function mousePressed() {
  actRandomSeed = random(100000);
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}


//collapsed sidebar


function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

 

 

 // horozontal scroll
let options = document.querySelectorAll('.option')
	post1 = document.querySelector('#post1')
	post2 = document.querySelector('#post2')
	post3 = document.querySelector('#post3')
	post4 = document.querySelector('#post4')
 






 