const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, thunder;
var drops = [];
var maxDrops = 100;
var r;

function preload(){
    thunderImg = loadImage("images/1.png");
    thunderImg2 = loadImage("images/2.png");
    thunderImg3 = loadImage("images/3.png");
    thunderImg4 = loadImage("images/4.png");
}

function setup(){
    createCanvas(400, 600);

    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(200, 370);

    thunder = createSprite(200, 100, 10, 10);
    thunder.addImage(thunderImg);
    thunder.scale = 0.4;
}

function draw(){
    background("black");

    r = random(1, 4);
    switch(r){
        case 1 : thunder.addImage(thunderImg);
        break;

        case 2 : thunder.addImage(thunderImg2);
        break;

        case 3 : thunder.addImage(thunderImg3);
        break;

        case 4 : thunder.addImage(thunderImg4);
        break;

        default : break;
    }

    Engine.update(engine);

    for(var i=0;i<maxDrops;i++){
        drops.push(drops1 = new Drops(random(0,400), random(0,400)));
        drops1.display();
    }

    umbrella.display();

    if (frameCount % 10 === 0){
        thunder.visible = false;
    }else {
        thunder.visible = true;
    }

    drawSprites();
}   

