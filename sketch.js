const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var ground;
var ball;
function setup() {
  createCanvas(400,400);

  myengine = Engine.create();
  myworld = myengine.world;

  //Matter.Bodies.rectangle(x, y, width, height, [options]);

  var ground_options = {
    isStatic: true
  }

  ground= Bodies.rectangle(200, 380, 400, 25, ground_options);
  World.add(myworld, ground);

  var ball_options = {
    restitution: 0.4
  }

  ball= Bodies.circle(200, 100, 25, ball_options);
  World.add(myworld, ball);

}

function draw() {
  background("blue");  

  Engine.update(myengine);

  fill("purple");

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 25);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 25, 25);
}