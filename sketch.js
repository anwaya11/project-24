
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(500,300);

    rubber1 = new RUBBER(600,300,40);
    rubber2 = new RUBBER(600,300,40)
    rubber3 = new RUBBER(600,300,40)
    rubber4 = new RUBBER(600,300,40)
    rubber5 = new RUBBER(600,300,40)
    rubber6 = new RUBBER(600,300,40)
    rubber7 = new RUBBER(600,300,100)


    iron1 = new Iron(400,200,60,60);

  box1 = new Box(700,100,100,70);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

console.log(rubber1.x);

    plane.display();
    hammer.display();

    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
      
    iron1.display();

    box1.display();
    
 
}