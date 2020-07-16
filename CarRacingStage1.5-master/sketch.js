var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var c1,c2,c3,c4
var track
var trackAnim
var raceS
var go,goImg
var eS
var BG
function preload(){
  trackAnim=loadImage("images/track.jpg")
c1=loadImage("images/car1.png")
c2=loadImage("images/car2.png")
c3=loadImage("images/car3.png")
c4=loadImage("images/car4.png")
raceS=loadSound("sounds/car.mp3")
goImg=loadImage("images/gameOver.png")
eS=loadSound("sounds/Out.mp3")
BG=loadImage("images/final.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();

  }
  if(gameState===2){
    game.end();
  }
  if(player.rank===1){
    go=createSprite(displayWidth/2,player.distance+20)
    go.addImage("goImg",goImg)
  }
}
