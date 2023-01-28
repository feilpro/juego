const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg
var piso
var jugador,jugadorMOV


function preload() {
 
}

function setup() {
  canvas = createCanvas(1200, 600);
  piso = createSprite(5,590,100,5)
  //creacion de sprite jugador
     jugador = createSprite(10,550,10,10)

 
}

function draw() {
  background(189);

   /*if(keyDown("space")){
    jugador.velocityX = 5;
    console.log("funciona :)")
  }*/

  if(keyDown("DOWN_ARROW")){
     jugador.y = jugador.y+30
  } 
drawSprites();
}

 /*function move() {
    if(keyDown("space")){
      jugador.velocityX =+ 50;
      console.log("funciona :)")
    }
 }*/