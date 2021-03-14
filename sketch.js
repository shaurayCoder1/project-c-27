const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine,World
function setup (){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

roof =new roof(350,100.300,20);

    bob1 = new bob (250,300);
    bob2 = new bob (300,300,);
    bob3 = new bob(350, 300);

    bob4 = new bob(400,300);
    bob5 = new bob(450,300);

    Rope1  = new rope(bob1, roof.body,-100,0);
    World.add(world,Rope1);
    Rope2  = new rope(bob2, roof.body,-50,0);
    World.add(world,Rope2);
    Rope3  = new rope(bob3, roof.body,0,100);
    World.add(world,Rope3);
    Rope4  = new rope(bob4, roof.body,-50,0);
    World.add(world,Rope4);
    Rop5  = new rope(bob5, roof.body,-100,0);
    World.add(world,Rope5);

    Engine.run(engine);
}

function Draw (){

background ("white");
Engine.update (engine);

bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

Rope1.display();
Rope2.display();
Rope3.display();
Rope4.display();
Rope5.display();



}
function keyPressed() {
    if (keyCode === UP_ARROW) {

      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-730,y:-0});

  
    }
}


