const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var background;
var bgImg,boyImg,boyImg2;
var snow=[];
var boy,engine,world;

function preload(){
  bg = loadImage("snow1.jpg");
  boyImg = loadImage("snow4.webp");
  boyImg2 = loadAnimation("snow4.webp","snow5.webp");
}

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  boy = createSprite(700, 450, 50, 50);
  boy.addImage(boyImg);
  boy.scale=0.6;
}

function draw() {
  background(bg); 
  Engine.update(engine);
 if(frameCount%60 === 0){
    snow.push(new Snow(random(width/2-10,width/2+10),10,10));
 }
  
  
  for(var i = 0; i< snow.length; i++){
    snow[i].display();
 }

  drawSprites();
}
function keyPressed(){
if(keyCode === 37){
  boy.addAnimation("boyImg2",boyImg2);
  boy.velocityX=-2;
}
}
