
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup,obstacleGroup
var score
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage= loadImage("obstacle.png");
 
}



function setup() {

 monkey = createSprite(80,315,20,20);
 monkey.addAnimation("moving",monkey_running);
 monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  banana = createSprite(600,165,10,40);
  
  obstacleGroup = new Group();
  bananaGroup = new Group();
  
}


function draw() {
 background(255);
  
 if(ground.x<0) {
   ground.x = ground.width/2
 }
  
 if(keyDown("space")) {
  monkey.velocityY = -12;
 }
  
 monkey.velocityY = monkey.velocityY + 0.8; 
  
 monkey.collide(ground);
  
 bananas();
 obstacles();
  
  
 stroke("black");
 textSize(20); 
 fill("black"); 
 survivalTime = Math.ceil(frameCount/frameRate());
 text("Survival Time: " + survivalTime, 100,50);
  
 drawSprites(); 
}

function bananas() {
 if(frameCount % 80== 0) {
    var banana = createSprite(600,165,10,40)
    banana.addImage(bananaImage);
    banana.velocityX = -6
    bananaGroup.add(banana);
    banana.scale = 0.1;
    banana.lifetime = 200;
    banana.y = Math.round(random(120,200));
    
}
}

function obstacles() {
 if(frameCount % 300 === 0) {
    var obstacle = createSprite(600,330,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -6;
    obstacleGroup.add(obstacle);
    obstacle.scale = 0.1;
    obstacle.lifetime = 200;
    
    
}
}




