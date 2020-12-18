const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygon,polygonIMG;
var slingShot;
var standObject,standObject2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var block10,block11,block12,block13,block14,block15,block16,block17,block18;
var score=0;
var backgroundIMG;

function setup(){
    createCanvas(900, 700);

    engine = Engine.create();
    world = engine.world;

    getBgImg();

    polygon=new Polygon(50,200,20);
    slingShot=new Slingshot(polygon.body,{x:100,y:400});

    standObject=new Ground(400,600,150,20);
    standObject2=new Ground(600,265,150,20);

    block1=new Block(340,570,30,40);
    block2=new Block(370,570,30,40);
    block3=new Block(400,570,30,40);
    block4=new Block(430,570,30,40);
    block5=new Block(460,570,30,40);

    block6=new Block(370,530,30,40);
    block7=new Block(400,530,30,40);
    block8=new Block(430,530,30,40);

    block9=new Block(400,490,30,40);

    block10=new Block(540,235,30,40);
    block11=new Block(570,235,30,40);
    block12=new Block(600,235,30,40);
    block13=new Block(630,235,30,40);
    block14=new Block(660,235,30,40);

    block15=new Block(570,195,30,40);
    block16=new Block(600,195,30,40);
    block17=new Block(630,195,30,40);

    block18=new Block(600,155,30,40);

    Engine.run(engine);

}

function draw(){
    if(backgroundIMG){
        background(backgroundIMG);
    }

    textSize(20);
    noStroke();
    fill("white");
    text("SCORE : "+score,750,40);

    Engine.update(engine);

    standObject.display();
    standObject2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    polygon.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();

    slingShot.display();

    drawSprites();
}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY});
}

function mouseReleased() {
    slingShot.fly();
}

function keyPressed() {
    if(keyCode===32){
        slingShot.attach(polygon.body);
    }
}

async function getBgImg() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);
    var datetime1 = responseJSON.datetime;
    var hour = datetime1.slice(11,13);
    console.log(hour);
    if(hour>06 && hour<18){
        backgroundIMG = loadImage("bg.png");
    } else {
        backgroundIMG = loadImage("bg2.jpg");
    }
}