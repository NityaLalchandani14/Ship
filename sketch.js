var ship
var shipIMG
var sea
var seaIMG
function preload(){
shipIMG = loadAnimation ("ship-1.png", "ship-2.png" , "ship-3.png", "ship-4.png")
seaIMG = loadImage ("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite (400,200)
  ship = createSprite (130, 200, 30, 30)
  ship.addAnimation ("movingShip",shipIMG)
  ship.scale = 0.1
  sea.addImage (seaIMG)
  sea.scale = 0.2
  sea.velocityX = -5
}

function draw() {
  background("blue");
  sea.velocityX=-3
  if (sea.x < 0){
    sea.x= sea.width/12
  }
 drawSprites ()
}