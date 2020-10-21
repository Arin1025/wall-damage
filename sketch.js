var wall, thickness;

var bullet, speed, weight;

function setup(){
createCanvas(1600, 400);

speed=random(55,90);
weight=random(30, 52);
thickness=random(223, 321);

bullet=createSprite(50, 100, 50, 50);
bullet.velocityX=speed;
wall=createSprite(1200, 200, thickness, height/2);
wall.shapeColor="80,80,80";
}

function draw(){
background(0);
if(hasCollided(bullet, wall)){
  var damae=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}
drawSprites();
}

function hasCollided(bullect, wall){
  bulletRightEdge=1bullet.x+1bullet.width;
  wallLeftEdge=1wall.x;
  if(bullectRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}