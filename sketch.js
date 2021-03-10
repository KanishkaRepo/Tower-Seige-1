const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3, box4,box5,box6,box7,box8,box9,box10;
var world,engine;
var ground;
var pentagon, slingShot;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(120, 675, 30, 35);
    box2 = new Box(155, 675, 30, 35);
    box3 = new Box(195, 675, 30, 35);
    box4 = new Box(230, 675, 30, 35);
    box5 = new Box(265, 675, 30, 35);
    box6 = new Box(300, 675, 30, 35);
    box7 = new Box(335, 675, 30, 35);
    box8 = new Box(370, 675, 30, 35);
    box9 = new Box(405, 675, 30, 35);
    box10 = new Box(440, 675, 30, 35);
    box11 = new Box(335, 635, 30, 35);
    box12 = new Box(155, 635, 30, 35);
    box13 = new Box(195, 635, 30, 35);
    box14 = new Box(230, 635, 30, 35);
    box15 = new Box(265, 635, 30, 35);
    box16 = new Box(300, 635, 30, 35);
    box17 = new Box(370, 635, 30, 35);
    box18 = new Box(335, 592, 30, 35);
    box19 = new Box(195, 592, 30, 35);
    box20 = new Box(230, 592, 30, 35);
    box21 = new Box(265, 592, 30, 35);
    box22 = new Box(300, 592, 30, 35);
    box23 = new Box(265, 550, 30, 35);
    box24 = new Box(230, 550, 30, 35);
    box25 = new Box(300, 550, 30, 35);
    box26 = new Box(265, 510, 30, 35);

    ground = new Ground(300, 700, 400, 10);
    pentagon = new Pentagon(100, 700);
    slingShot = new SlingShot(pentagon.body,{x:100, y:700});
}

function draw(){
    background("white")

    Engine.update(engine);
    box1.display();
    ground.display();
    pentagon.display();
    slingShot.display();
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
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
}