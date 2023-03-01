
var path,boy,book
var backroundimg,bookimg,enemyimg
var bookCollection = 0;

//Game States
var PLAY=1
var END=0;
var gameState=1;



function preload(){
 pathImg = loadImage("backround.webp");
 boyImg = loadAnimation("Runner-1.png","Runner-2.png");
 bookImg = loadImage("book.webp");
 enemyImg = loadImage("enemy.jpg");


}

function setup() {

 createCanvas(400,600);  
 //backgroung
 path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;

//boy
boy = createSprite(70,580,20,20);
boy.addAnimation("AkashRunning",boyImg);
boy.scale=0.08;

bookGroup=new Group();
enemyGroup=new Group();

}

function draw() {
 
if(gameState===PLAY){
backround(0);
boy.x = World.mouseX;

edges= createEdgeSprite();
boy.collide(edges);

//backround reset
if(path.y > 400){
path.y = height/2;
}

createbook();
createenemy();

if (bookGroup.isTouching(boy)){
 bookGroup.destroyEach();
    bookCollection=bookCollection+10;}
   
   else if(enemyGroup.isTouching(boy))
   gameState = END;
   
   
    }
   
   
 }

 drawSprites();
textSize(20);
fill(255);
text("book:" + bookCollection,10,30);

function createbook() {
   if (World.frameCount % 200 == 0) {
   var book = createSprite(Math.round(random(50, 350),40, 10, 10));
   book.addImage(cashImg);
   book.scale=0.12;
   book.velocityY = 3;
   book.lifetime = 150;
   bookGroup.add(book);
   }
 }

 function createenemy() {
   if (World.frameCount % 200 == 0) {
   var enemy = createSprite(Math.round(random(50, 350),40, 10, 10));
   enemy.addImage(cashImg);
   enemy.scale=0.12;
   enemy.velocityY = 3;
   enemy.lifetime = 150;
   enemyGroup.add(enemy);
   }
 }









   
