var block1, block2, block3, block4;
var ball;
var music;
// var of edges!
var edges;



function preload(){
 
  musicSound = loadSound("music.mp3");

}

function setup() {
  createCanvas(800, 600);
  

  


  block1 = createSprite(100, 550, 192, 20);
  block1.shapeColor = "blue";
  block2 = createSprite(300, 550, 192, 20);
  block2.shapeColor = "orange";
  block3 = createSprite(500, 550, 192, 20);
  block3.shapeColor = "red";
  block4 = createSprite(700, 550, 192, 20);
  block4.shapeColor = "green";
  ball = createSprite  (500,300,40,40);
  ball.shapeColor ="white";
  ball.velocityX = 5;
  ball.velocityY = 9;

}


function draw(){
  background (0);
  // edges creates!
  edges=createEdgeSprites();
  // bounceOff edges!
  ball.bounceOff(edges);
// statements added +!
  if(block1.isTouching(ball)&& ball.bounceOff(block1)){
    ball.shapeColor = "blue";
    ball.velocityX = 0;
    ball.velocityY = 0;
    musicSound.stop();
  }

if(block2.isTouching(ball)&& ball.bounceOff(block2)){
  ball.shapeColor = "orange";
  musicSound.play();
}

if(block3.isTouching(ball)&& ball.bounceOff(block3)){
  ball.shapeColor = "red"
  musicSound.play();
}

if(block4.isTouching(ball)&& ball.bounceOff(block4)){
  ball.shapeColor = "green";
  musicSound.play();


}



  drawSprites();
}

