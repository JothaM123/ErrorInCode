const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var  ground, block1, block2, bridge, bridgeCon;


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  ground = new Base(width/2, height-50, width, 50);
  block1 = new Base(width/20, height-150, 200, 150);
  block2 = new Base(width-110, height-150, 200, 150);
  bridge= new Bridge(6, {x:width/20, y:height-150});
  Matter.Composite.add(block1.body, bridge);
  bridgeCon = new Link(block1, block2);

}

function draw() {
  background(51);
  Engine.update(engine);
  noFill();
  ground.show();
  fill(105, 70, 49);
  block1.show();
  block2.show();

}
