const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState = play;
var play, end;

var diamond, goldbar1,goldbar2;
var block1, block2, block3, block4;
var obstacle1, obstacle2, obstacle3;

var bg_image, player_img;
var block_img, obstacle1_img, obstacle2_img, diamond_img, goldbar_img;

var goldbarCount = 0;

function preload() {

  bg_image = loadImage("background.png");
  block_img = loadImage("block.png");
  player_img = loadImage("player.png");
  obstacle1_img = loadImage("obstacle1.png");
  obstacle2_img = loadImage("obstacle2.png");
  diamond_img = loadImage("diamond.png");
  goldbar_img = loadImage("goldbar.png");

}

function setup() {

  createCanvas(1000, 650);

  engine = Engine.create();
  world = engine.world;

  block1 = createSprite(100, 170, 170, 50);
  block1.addImage(block_img);
  block1.scale = 0.5;

  block2 = createSprite(280, 420, 170, 50);
  block2.addImage(block_img);
  block2.scale = 0.5;

  block3 = createSprite(750, 540, 170, 50);
  block3.addImage(block_img);
  block3.scale = 0.5;

  block4 = createSprite(850, 200, 170, 50);
  block4.addImage(block_img);
  block4.scale = 0.5;

  player = createSprite(80, 580);
  player.addImage("player", player_img);
  player.scale = 0.5;

  obstacle1 = createSprite(400, 540);
  obstacle1.addImage("obstacle1", obstacle1_img);
  obstacle1.scale = 1.5;

  obstacle2 = createSprite(900, 540);
  obstacle2.addImage("obstacle2", obstacle1_img);
  obstacle2.scale = 2;

  obstacle3 = createSprite(370, 70);
  obstacle3.addImage("obstacle3", obstacle2_img);
  obstacle3.scale = 0.6;

  diamond = createSprite(835, 150);
  diamond.addImage("diamond", diamond_img);
  diamond.scale = 0.2;

  goldbar1 = createSprite(100, 140);
  goldbar1.addImage("goldbar", goldbar_img);
  goldbar1.scale = 0.2;

  goldbar2 = createSprite(720, 510);
  goldbar2.addImage("goldbar", goldbar_img);
  goldbar2.scale = 0.2;

  ground = createSprite(500, 640, 1000, 20);
  ground.visible = false;

}

function draw() {

  background(51);
  image(bg_image, 0, 0, width, height);

  Engine.update(engine);

  if (gameState === play) {

    if (keyDown(RIGHT)) {

      player.x = player.x + 4;

    }

    if (keyDown(LEFT)) {

      player.x = player.x - 4;

    }

    if (keyDown(UP_ARROW) && player.y >= 20) {

      player.y = player.y - 4;

    }

    player.y = player.y + 0.8;

    if (keyDown(DOWN_ARROW) && player.y >= 20) {

      player.y = player.y + 4;

    }

    if(player.isTouching(goldbar1 || goldbar2)) {

      goldBarCount = goldbarCount + 1;
     

    }

    player.collide(ground);

    player.collide(block1);
    player.collide(block2);
    player.collide(block3);
    player.collide(block4);

    player.visible = true;

    block1.visible = true;
    block2.visible = true;
    block3.visible = true;
    block4.visible = true;

    obstacle1.visible = true;
    obstacle2.visible = true;
    obstacle3.visible = true;

    diamond.visible = true;
    goldbar1.visible = true;
    goldbar2.visible = true;

    fill(0);
    textSize(20);
    text("Goldbar: " + goldbarCount,20,40);

  }

  else {

    player.visible = false;

    block1.visible = false;
    block2.visible = false;
    block3.visible = false;
    block4.visible = false;

    obstacle1.visible = false;
    obstacle2.visible = false;
    obstacle3.visible = false;

    diamond.visible = false;
    goldbar1.visible = false;
    goldbar2.visible = false;

  }

  if(player.isTouching(diamond)) {

    gameState = end;

  }

  drawSprites();

}
