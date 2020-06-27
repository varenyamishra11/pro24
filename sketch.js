var paper1, ground1,
dustbin1; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

function preload(){
  
}

function setup() {
  createCanvas(1300, 700);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(650, 690, width, 30);
  paper1 = new paper(80, 300, 40);
  dustbin1 = new dustbins(1100, 680, 150, 20);
  
  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();
  ground1.display();
  dustbin1.display();
   
  drawSprites();

}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 120,y: -120});
  }

}