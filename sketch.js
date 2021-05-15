
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint 
var bob1
var bob2
var bob3
var bob4
var bob5
var ground
var chain1
var chain2
var chain3
var chain4
var chain5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1 = new Bob(300,500,70);
    bob2 = new Bob(340,500,70);
    bob3 = new Bob(380,500,70);
    bob4 = new Bob(420,500,70);
    bob5 = new Bob(460,500,70);
    ground = new Ground(375,250,400,100);
    chain1 = new Chain(bob1.body, ground.body, -80, 0);
    chain2 = new Chain(bob2.body, ground.body, -40, 0);
    chain3 = new Chain(bob3.body, ground.body, 0, 0);
    chain4 = new Chain(bob4.body, ground.body, 40, 0);
    chain5 = new Chain(bob5.body, ground.body, 80, 0);
    
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  drawSprites();
 
}



