var car,wall,speed,weight,deformation

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor="grey"
  speed=random(55,90)
  weight=random(400,1500)
  deformation=0.5*weight*speed*speed/22500
}

function draw() {
  background(0);  
  car.velocityX=speed;
  if (deformation>180){
    car.shapeColor="green";
    
  }
  if (deformation>100&&deformation<180){
    car.shapeColor="yellow";
     
  } 
  if (deformation<100){
    car.shapeColor="red";
      
  }

  drawSprites();
}