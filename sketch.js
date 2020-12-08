const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;

var G,P1,P2;

var l1block1,l1block2,l1block3,l1block4,l1block5;
var l2block1,l2block2,l2block3,l2block4;
var l3block1,l3block2,l3block3;
var l4block1,l4block2;
var l5block;

var Nl1block1,Nl1block2,Nl1block3;
var Nl2block1,Nl2block2;
var Nl3block;

var polygon;

var RE;

function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;

  G = new Ground(500,500,1000,50);
  P1 = new Ground(500,375,235,10);
  P2 = new Ground(800,200,150,10);

  l1block1 = new Box1(419,350,40,50);
  l1block2 = new Box1(459,350,40,50);
  l1block3 = new Box1(499,350,40,50);
  l1block4 = new Box1(539,350,40,50);
  l1block5 = new Box1(579,350,40,50);

  l2block1 = new Box2(439,300,40,50);
  l2block2 = new Box2(479,300,40,50);
  l2block3 = new Box2(519,300,40,50);
  l2block4 = new Box2(559,300,40,50);

  l3block1 = new Box3(459,250,40,50);
  l3block2 = new Box3(499,250,40,50);
  l3block3 = new Box3(539,250,40,50);

  l4block1 = new Box4(479,200,40,50);
  l4block2 = new Box4(519,200,40,50);

  l5block = new Box5(499,150,40,50);

  Nl1block1 = new Box5(760,170,40,50);
  Nl1block2 = new Box5(800,170,40,50);
  Nl1block3 = new Box5(840,170,40,50);

  Nl2block1 = new Box4(780,120,40,50);
  Nl2block2 = new Box4(820,120,40,50);

  Nl3block = new Box3(800,70,40,50);

  polygon = new Poly(150,100,30,30);
  polygon.scale = 0.4;

  RE = new ROPE(polygon.body,{x:150,y:100});

}

function draw() {
  background("darkblue");  
  Engine.update(engine);

  G.display();
  P1.display();
  P2.display();

  l1block1.display();
  l1block2.display();
  l1block3.display();
  l1block4.display();
  l1block5.display();

  l2block1.display();
  l2block2.display();
  l2block3.display();
  l2block4.display();

  l3block1.display();
  l3block2.display();
  l3block3.display();

  l4block1.display();
  l4block2.display();

  l5block.display();

  Nl1block1.display();
  Nl1block2.display();
  Nl1block3.display();

  Nl2block1.display();
  Nl2block2.display();

  Nl3block.display();

  polygon.display();

  RE.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  RE.fly();
}

function keyPressed(){
  if(keyCode === 32){
    RE.attach(polygon.body);
  }
}