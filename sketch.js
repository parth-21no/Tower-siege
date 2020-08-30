const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var engine,world;
var ground1,ball,slingshot;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(300,200,180,20);
  
  line1 = new Ground(540,300,180,20);
  line2 = new Ground(450,270,20,90);
  line3 = new Ground(630,270,20,90);

  

  box1 = new Box(340,150,20,30);
  box2 = new Box(240,150,20,30);
  box3 = new Box(260,150,20,30);
  box4 = new Box(280,150,20,30);
  box5 = new Box(300,150,20,30);
  box6 = new Box(320,150,20,30);

  box7 = new Box(260,180,20,30);
  box8 = new Box(280,180,20,30);
  box9 = new Box(300,180,20,30);
  box10 = new Box(320,180,20,30);

  box11 = new Box(280,140,20,30);
  box12 = new Box(300,140,20,30);

  box13 = new Box(290,110,20,30);
  
  ball = new Ball(100,150,30);
 
  slingshot = new SlingShot(ball.body,{x:100,y:150});
}

function draw() {
  background(0);  
  Engine.update(engine);
  text("HIT THE CANS IN THE BUCKET",300,50);
  ground1.display();
  
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 box13.display();
 line1.display();
 line2.display();
 line3.display();
 ball.display();
 slingshot.display();

 
  
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
 
 }
 function mouseReleased(){
     slingshot.fly();
 
 }