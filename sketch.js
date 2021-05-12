const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var bgImg

function setup(){
    var canvas = createCanvas(1400,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,780,1400,20)
    b1 = new Box(1000,760,100,100)
    b2 = new Box(1000,660,100,100)
    b3 = new Box(1000,560,100,100)
    b4 = new Box(1000,460,100,100)
    b5 = new Box(1000,360,100,100)
    ball = new Ball(700,200,80,80)
    rope = new Chain(ball.body,{x:700,y:50})

}

function draw(){
background("Skyblue")
Engine.update(engine)
ground.display()
b1.display()
b2.display()
b3.display()
b4.display()
b5.display()

ball.display()
rope.display()
}

function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}