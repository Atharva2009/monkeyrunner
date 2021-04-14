
var monkey, monkey_running;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);

  monkey = createSprite(200,200,20,20);
  monkey.addAnimation("running",monkey_running);
  
  banana = createSprite(250,300,10,10);
  banana.addImage(bananaImage);
  
  obstacle = createSprite(190,190,20,20);
  obstacle.addImage(obstacleImage);
  
}


function draw() {

  
}






