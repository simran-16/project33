var backgroundImg, snowmanImg;
var snow1,snow2,snow3,snow4,snow5,snow6,snow7,snow8;
var snowman;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World= Matter.World;
function preload (){
  backgroundImg = loadImage("snow1.jpg");
  snowmanImg = loadImage("olaf.jpg");
}



function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;
  snowman= createSprite(700, 300, 50, 50);
  snowman.addImage(snowmanImg);
  snowman.scale= 0.3;


snow1= new Snow(250,300,50);
snow2= new Snow(120,400,50);
snow3= new Snow(300,200,50);
snow4= new Snow(400,100,50);
snow5= new Snow(500,250,50);
snow6= new Snow(600,350,50);
snow7= new Snow(700,450,50);
snow8= new Snow(800,150,50);
}

function draw() {
  background(backgroundImg);  
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  drawSprites();

  keyPressed();
}

function keyPressed() {
	
	if(keyCode === LEFT_ARROW){
		snowman.x= snowman.x-5;
	  }
	
	  else if(keyCode === RIGHT_ARROW){
		snowman.x= snowman.x+5;
	  }
	 
		}



   
