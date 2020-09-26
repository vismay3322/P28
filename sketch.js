

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var TREE;
var GROUND;
var MANGO1,MANGO2,MANGO3,MANGO4,MANGO5,MANGO6,MANGO7;
var BOY;
var STONE,Slingshot;

function preload()
{
	
}

function setup() {
	createCanvas(1300,800);


	engine = Engine.create();
	world = engine.world;

	TREE = new Tree(1050,800);
	MANGO1 = new Mango(950,750);
	MANGO2 = new Mango(1050,700);
	MANGO3 = new Mango(1000,630);
	MANGO4 = new Mango(1100,600);
	MANGO5 = new Mango(1130,750);
	MANGO6 = new Mango(1200,700);
	MANGO7 = new Mango(1130,680);
	BOY = new Boy(300,980);
	STONE = new Stone(200,324,40);
	GROUND = new Ground(650,750,2000,20);

  Slingshot = new slingshot(STONE.body,{x:300,y:980});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  TREE.display();
  GROUND.display();
  MANGO1.display();
  MANGO2.display();
  MANGO3.display();
  MANGO4.display();
  MANGO5.display();
  MANGO6.display();
  MANGO7.display();
  BOY.display();
  STONE.display();
  Slingshot.display();
  
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(STONE.body,{x:mouseX,y:mouseY})  
  }
  
  function mouseReleased(){
	 Slingshot.fly(); 
  }


