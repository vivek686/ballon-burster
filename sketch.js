var bow ;
var arrow;
  var redB, pinkB, greenB ,blueB ,arrowGroup;
    var green_balloon;
  var red_balloon ;
  var pink_balloon ;
  var blue_balloon;
  var bowImage ;
  var arrowImage ;
  var green_balloonImage ;
  var red_balloonImage ;
  var pink_balloonImage ;
  var blue_balloonImage ;
  var backgroundImage;
  var arrow  ;
  var ArrowImage;
var temp_arrow;
var score=0;
 


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  red_balloonImage = loadImage("red_balloon0.png");
   ArrowImage = loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);
  
    background = createSprite(0,0,600,600);
    background.addImage(backgroundImage);
    background.scale = 3;
   background.x = background.width /2;
  background.velocityX = -2;
  
  

  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1; 
  

  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();
   
}

function draw() {
  
  
  
  bow.y = World.mouseY
   if (background.x < 0) {
    background.x = background.width / 2;
   }
     
     
    if(keyDown("space")){
    
  var arrow =  createArrow();
    
  }
  var select_ballon = Math.round(random(1,6))
   console.log(frameCount)
  
  if(World.frameCount%80 === 0){
    if (select_ballon ===1)  {
      redBalloon();
    }
      else if(select_ballon === 2){
        greenBalloon();
    }
    else if(select_ballon === 3){
      blueBalloon();
    }
    else if (select_ballon === 4 ){
      pinkBalloon();
    }
  }

  
  
  if (arrowGroup.isTouching(redB)) {
  redB.destroyEach();
  arrowGroup.destroyEach();
    score=score+1;
}




 if (arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}



 if (arrowGroup.isTouching(blueB)) {
  blueB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}



if (arrowGroup.isTouching(pinkB)) {
  pinkB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}

 
  drawSprites();
  
   text("Score :"+ score,450,30);
  
}
                                       
  function createArrow(){

   arrow = createSprite(460,200,20,20);
  arrow.addImage(ArrowImage);
  arrow.scale = 0.4; 
  arrow.y = bow.y;
    arrow.x = bow.x - 60 
  arrow.velocityX = -6;
    arrow.lifetime = 100;
    arrowGroup.add(arrow);
                             
                   
  } 
function redBalloon(){
  var red = createSprite(0,Math.round(random(20,370)),10,10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}
function greenBalloon(){
  var green = createSprite(0,Math.round(random(20,370)),10,10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
}
function blueBalloon(){
   var blue = createSprite(0,Math.round(random(20,370)),10,10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
    blue.scale = 0.1;
  blue.lifetime = 150;
   blueB.add(blue);
}
function pinkBalloon(){
   var pink = createSprite(0,Math.round(random(20,370)),10,10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale =1.1;
   pinkB.add(pink);
}

