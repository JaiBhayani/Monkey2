
var monkey, monkey_running, monkey_collided;
var ground, invisibleGround, groundImage, background;

var rockImage, banImage;
var obstaclesGroup, banana, rock
var score;


function preload(){
  monkey_running = loadAnimation("Monkey_01.png","Monkey_2.png","Monkey_3.png","Monkey_4.png","Monkey_5.png","Monkey_6.png","Monkey_7.png","Monkey_8.png","Monkey_9.png","Monkey_10.png");
  monkey_collided = loadImage("Monkey_01.png");
  
  background = loadImage ("jungle.jpg");
  
  banImage = loadImage("cloud.png");
  
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  monkey = createSprite(50,180,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.addAnimation("collided", monkey_collided);
  monkey.scale = 0.5;
  
  bockground = createSprite(200,180,400,20);
 background.addImage("back",background);
  background.x = background.width /2;
  background.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
  banGroup = new Group();
 rockGroup = new Group();
}

function draw() {
  background(180);
 
if(keyDown("space")&&monkey.y>100) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  /*if (ground.x < 0){
    ground.x = ground.width/2;
  }*/
  
  monkey.collide(invisibleGround);
  spawnBananas();
  spawnRocks();
    if(monkey.isTouching(rockGroup)){
      gameState  = END;
    }
  
 if (gameState === END){
     background.velocityX = 0;
    monkey.velocityY = 0;
    banGroup.setVelocityXEach ( 0);
    rockGroup.setVelocityXEach  (0);
    monkey.changeAnimation("collided",monkey_collided);
    banGroup.setLifetimeEach(-1);
    rockcloudsGroup.setLifetimeEach(-1);
   }
     text("Score: "+ score, 500,50);
  drawSprites();
  
}

function spawnBananas() {
  if (frameCount % 100 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(cloudImage);
   banana.scale = 0.5;
    banana.velocityX = -3;
   banana.lifetime = 200;
    
    
    banana.depth = monkey.depth;
    banana.depth = monkey.depth + 1;
  }
  
}

function spawnRocks() {
  if(frameCount % 60 === 0) {
    var rock = createSprite(600,165,10,40);
    rock.velocityX = -4;           
    rock.scale = 0.5;
    rock.lifetime = 300;
  }
}
