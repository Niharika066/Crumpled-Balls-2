
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Render=Matter.Render;

var engine,world;
var Paper, ground, Dustbin,paperImg,CPaper;
var binPart1,binPart2,binPart3,binImg,bin;

function preload()
{
	binImg=loadImage("dustbin.png");
 
}

function setup() {
  createCanvas(1300, 600);
  engine = Engine.create();
	world = engine.world;

  ground= new Ground();
  Paper= new paper(150,585,40,40);

  bin=createSprite(964,470,20,20);
  bin.addImage(binImg);
  bin.scale=0.68;

  binPart1=new dustbin(902,505,12,120);
  binPart2=new dustbin(962,565,130,15);;
  binPart3=new dustbin(1024,505,15,120);

var render= Render.create({
  element:document.body,
  engine:engine,
  options:{
  width: 1200,
  height: 700,
  wireframes: false
}
});
  Engine.run(engine);
}

function draw(){
  background(230,230,230);
  Engine.update(engine);

  ground.display();
  Paper.display();
  binPart1.display();
  binPart2.display();
  binPart3.display();

  drawSprites();
}

function keyPressed(){
  if(keyCode===UP_ARROW){
  Matter.Body.applyForce(Paper.body, Paper.body.position,{x:400, y:920});
}
}




