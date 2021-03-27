var mili;
var mili1,mili2,mili3;
var maze1,maze2,maze3,maze4,maze5,maze6,maze7,
maze8,maze9,maze10,maze11,maze12,maze13,maze14,
maze15,maze16,maze17,maze18,maze19,maze20,maze21,maze22;
var gameState = "start";

function preload (){
 
mili1 = loadAnimation("mili1.png", "mili2.png", "mili3.png");
mili2 = loadImage("mili1.png");


}

function setup() {
  createCanvas(1520,700);
  //line
  maze1 = new Maze(30 ,350, 10, 630);
  maze2 = new Maze(760, 670, 1470, 10);
  maze3 = new Maze(1490, 350, 10, 630);
  maze4 = new Maze(760, 30, 1470, 10);

  //box
  maze5 = new Maze(140, 140, 50, 50);
  maze6 = new Maze(140, 550, 50, 50);
  maze7 = new Maze(1380, 140, 50, 50);
  maze8 = new Maze(1380, 550, 50, 50);

  //letter 'S'
  maze9 = new Maze(250, 250, 100, 20);
  maze10 = new Maze(200, 290, 20, 100);
  maze11 = new Maze(240, 350, 100, 20);
  maze12 = new Maze(300, 390, 20, 100);
  maze13 = new Maze(250, 450, 120, 20);

  //letter 'O'
  maze14 = new Maze(400, 350, 20, 200);
  maze15 = new Maze(440, 250, 100, 20);
  maze16 = new Maze(440, 450, 100, 20);
  maze17 = new Maze(500, 350, 20, 220);

  //letter 'U'
  maze18 = new Maze(600, 340, 20, 210);
  maze19 = new Maze(650, 450, 120, 20);
  maze20 = new Maze(700, 340, 20, 210);

  //letter 'M'
  maze21 = new Maze(790, 350, 20, 220);
  maze22 = new Maze(950, 350, 20, 220);
  maze23 = new Maze(810, 255, 30, 30);
  maze24 = new Maze(840, 285, 30, 30);
  maze25 = new Maze(870, 315, 30, 30);
  maze26 = new Maze(900, 285, 30, 30);
  maze27 = new Maze(930, 255, 30, 30);

  //letter 'Y'
  maze28 = new Maze(1050, 280, 20, 70);
  maze29 = new Maze(1160, 280, 20, 70);
  maze30 = new Maze(1105, 320, 130, 20);
  maze31 = new Maze(1105, 390, 20, 130);

  //letter 'A'
  maze32 = new Maze(1230, 350, 20, 220);
  maze33 = new Maze(1340, 350, 20, 220);
  maze34 = new Maze(1290, 250, 100, 20);
  maze35 = new Maze(1290, 350, 100, 20);

  //mili
  mili = createSprite( 130, 630, 20 ,20 )
  mili.addAnimation("miliwalk",mili1)
  mili.addImage("milistanding",mili2);
  mili.scale = 0.3;

}


function draw() {
  background(0,0,0);  
 
  if(gameState === "start"){
    textSize (23);
    text( "TO START THE GAME PRESS SPACE BAR" , 120 ,70)
  }

 

 if(keyIsDown (UP_ARROW) && gameState === "play"){
 mili.y = mili.y - 2;
 mili.changeAnimation("miliwalk",mili1)
 }

 if(keyDown (32)&& gameState==="start"){
  gameState = "play";
 

 }

 /*if(mili.isTouching(maze9)){
   gameState = "End";
 }*/

 if(gameState === "End" ){
   text("YOU LOST", 500,150)
 }
  drawSprites();
}