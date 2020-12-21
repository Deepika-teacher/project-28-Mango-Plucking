
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,ground,boy,stone,launcherObj;
var mango1,mango2,mango3,mango4,mango5,mango6;

function preload()
{
	boyImage=loadImage("images/Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	tree= new Tree(1050,580);
	ground= new Ground(width/2,600,width,20);
	stone=new Stone(235,420,30);

	mango1=new Mango(1100,100,30);
	mango2=new Mango(1150,120,30);
	mango3=new Mango(1040,300,30);
	mango4=new Mango(950,330,30);
	mango5=new Mango(920,230,30);
	mango6=new Mango(1020,310,30);
	mango7=new Mango(1040,250,30);
	mango8=new Mango(920,170,30);

	launcherObj= new Launcher(stone.body,{x:235,y:420});
}


function draw() {
  background(255);
  
  image(boyImage,200,340,200,300);

  tree.display();
  ground.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  launcherObj.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x: 235,y:420})
		launcherObj.attach(stone.body);
	}
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX ,y:mouseY});
}
function mouseReleased(){
	launcherObj.fly();
}

function detectCollision(stone,mango){
 var stonePos=stone.body.position;
 var mangoPos=mango.body.position;
 var distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);

 if(distance<=mango.radius+stone.radius){
	console.log(distance);
	 Matter.Body.setStatic(mango.body,false);
 }
}