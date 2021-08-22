var bg, bgImg
var earth, earthImg
var ufo, ufoImg1, ufoImg2, ufoImg3, ufoImg4
var earthShip, earthShipImg
var laser, laserImg
var gameOver, gameOverImg
var restart, restartImg
var life, lifeImg
var death, deathImg

function preload(){
  bgImg = loadImage("images/bg1.jpg");
  earthImg = loadImage("images/earth.png");
  ufoImg1 = loadImage("images/ss1.png");
  ufoImg2 = loadImage("images/ss2.png");
  ufoImg3 = loadImage("images/ss3.png");
  ufoImg4 = loadImage("images/ss4.png");
  earthShipImg = loadImage("images/earthufo.png");
  gameOverImg = loadImage("images/gameover.png");
  restartImg = loadImage("images/restart.png");
  lifeImg = loadImage("images/lives.png");
  deathImg = loadImage("images/deaths.png");
  laserImg = loadAnimation("images/l1.png","images/l2.png","images/l3.png","images/l4.png","images/l5.png","images/l6.png","images/l7.png","images/l8.png","images/l9.png");

}

function setup() {
  createCanvas(1700,1000);
  bg = createSprite(900,500,1700,1000);
  bg.addImage(bgImg);
  
  earth = createSprite(-400,500);
  earth.addImage(earthImg);
  earth.scale =5;

  earthufo = createSprite(150,500);
  earthufo.addImage(earthShipImg);
  earthufo.scale =-0.4;
}

function draw() {
  background(0); 
  drawSprites();
}