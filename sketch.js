
var background
var blackCar, redCar, blueCar, yellowCar
var sign
var speed, weight
var gameover

function preload(){
  backgroundImage = loadImage("city-game-backgrounds-d-game-application-vector-illustration-your-project-day-night-town-80084031.jpg")
  blackCarImage = loadImage("6325311_preview.png")
  redCarImage = loadImage("car-icon-14-256.png")
  blueCarImage = loadImage("navy-blue-car-icon-free-navy-blue-car-icons-blue-car-icon-png-256_256.png")
  yellowCarImage = loadImage("car-icon-19-256.png")
  signImage = loadImage("1023318.png")
  gameoverImage = loadImage("6a00d8341bf7d953ef022ad398a4ea200d-800wi.png")
}

function setup() {
  createCanvas(1600,400);
  
  background = createSprite(500, -25, 50, 50);
  background.addImage("city background", backgroundImage)
  background.scale = 2

  blackCar = createSprite(50, 350, 50, 50);
  blackCar.addImage("black car", blackCarImage)
  blackCar.scale = 0.3

  redCar = createSprite(1040, 350, 50, 50);
  redCar.addImage("red car", redCarImage)
  redCar.scale = 0.3
  redCar.visible=false;

  blueCar = createSprite(1040, 350, 50, 50);
  blueCar.addImage("blue car", blueCarImage)
  blueCar.scale = 0.3
  blueCar.visible=false;

  yellowCar = createSprite(1040, 350, 50, 50);
  yellowCar.addImage("yellow car", yellowCarImage)
  yellowCar.scale = 0.3
  yellowCar.visible=false;

  sign = createSprite(1100, 300, 60, 200);
  sign.addImage("signal", signImage)
  sign.scale = 0.3

  speed = Math.round(random(55, 90))
  weight = Math.round(random(400, 1500))

  gameover = createSprite(600, 200, 50, 50);
  gameover.addImage("game over", gameoverImage);
  gameover.scale=0.5
  gameover.visible=false;

  blackCar.velocityX=speed
  
}

function draw() { 

  

  if(sign.x-blackCar.x < (blackCar.width+sign.width)/2 ){
     blackCar.velocityX=0;
     var deformation = 0.5*weight*speed*speed/22500
     gameover.visible=true;
     

      if(deformation<100){
        blackCar.visible=false;
        blueCar.visible=true;
      } 

      if(deformation>100 && deformation<180){
        blackCar.visible=false;
        yellowCar.visible=true;
      } 

      if(deformation>180){
        blackCar.visible=false;
        redCar.visible=true;
      } 
    }

 

  drawSprites();
}

