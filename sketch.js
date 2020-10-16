var movingrect,fixedrect;
var gameo1,gameobject2,gameo3,gameo4;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 100, 50, 50);
  movingrect = createSprite(400 , 300 ,50 ,50);
  gameo1 = createSprite(100, 200,50 ,50);
  gameobject2 = createSprite(200,200,50,50);
  gameo3 = createSprite(300,200,50,50);
  gameo4 = createSprite(400,200,50,50);
  gameo1.shapeColor = "red";
  gameobject2.shapeColor = "red";
  gameo3.shapeColor = "red";
  gameo4.shapeColor = "red";
  movingrect.shapeColor = "red";
  fixedrect.shapeColor = "red";
  //fixedrect.velocityX = -2;
  //movingrect.velocityX = 2;
  //movingrect.velocityY = -2;
  //gameo4.velocityY = 2;

}

function draw() {
  background("black");  
  drawSprites();
 movingrect.x = mouseX;
 movingrect.y = mouseY;
 isTouching(gameo4 , movingrect);
//bounceOff(gameo4 , movingrect);
 
}

