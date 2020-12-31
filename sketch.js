const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;



function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(300,50,600,20);
    bird = new Bird(200,50);
    bird1 = new Bird(250,50);
    bird2 = new Bird(300,50);
    bird3 = new Bird(350,50);
    // bird4 = new Bird(400,50);
    // bird5 = new Bird(450,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
    slingshot1 = new SlingShot(bird1.body,{x:250, y:50});
    slingshot2 = new SlingShot(bird2.body,{x:300, y:50});
    slingshot3 = new SlingShot(bird3.body,{x:350, y:50});
    // slingshot4 = new SlingShot(bird4.body,{x:400, y:50});
    // slingshot5 = new SlingShot(bird5.body,{x:450, y:50});
}

function draw(){
    background("blue");
    Engine.update(engine);
    strokeWeight(4);
   
    ground.display();
   
    bird.display();
    bird1.display();
    bird2.display();
    bird3.display();
    // bird4.display();
    // bird5.display();
    //log6.display();
    slingshot.display();
    slingshot1.display();
    slingshot2.display();
    slingshot3.display();
    // slingshot4.display();
    // slingshot5.display(); 
    fill("yellow");
    textSize(30)
    text("Press 'Left Key' to start",150,300)
}
function keyPressed(){
    if(keyCode === LEFT_ARROW){
        Matter.Body.applyForce(bird.body, bird.body.position,{x:-200,y:20})
    }
}

