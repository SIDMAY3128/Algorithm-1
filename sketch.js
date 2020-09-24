function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200, 200, 50, 50);
  movingRect.shapeColor = "blue"
  fixedRect = createSprite (300,300,60,10);
  fixedRect.shapeColor = "blue"
  rectangle1 = createSprite (200,200,10,10)
  rectangle1.shapeColor = "red"
  rectangle2 = createSprite (300,200,10,10)
  rectangle2.shapeColor = "yellow"

  rectangle1.velocityX = 3
  rectangle2.velocityX = -3
}

function draw() {
  background(0,0,0); 
  
  movingRect.x = mouseX
  movingRect.y = mouseY



  

  if(fixedRect.x - movingRect.x < fixedRect.width/2  + movingRect.width/2 && 
    movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "green"
  }else{
    movingRect.shapeColor = "pink"
    fixedRect.shapeColor = "pink"
  }

  if (rectangle1.x - rectangle2.x < rectangle1.width/2 + rectangle2.width/2 &&
    rectangle2.x - rectangle1.x < rectangle2.width/2 + rectangle1.width/2){
      rectangle1.velocityX = rectangle1.velocityX * -1
      rectangle2.velocityX = rectangle2.velocityX * -1
    }
  drawSprites();
}