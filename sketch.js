
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, ground, dustbinObject;

function setup() {
	createCanvas(1400, 600);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new Paper(200,200,20);
	ground=new Ground(400, 580, 3000, 20);
	dustbinObject=new Dustbin(1200,560);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  
 paper1.display();
 ground.display();
 dustbinObject.display();
}

function keyPressed(){
if (keyCode===UP_ARROW){
	Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 90, y: -90});
}
}

