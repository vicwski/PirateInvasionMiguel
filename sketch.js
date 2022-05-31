const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world
var ground, tower
var backgroundImg, towerImg

function preload() {
  backgroundImg = loadImage('assets/background.gif')
  towerImg = loadImage('assets/tower.png')
}

function setup() {
  canvas = createCanvas(1200, 600)
  engine = Engine.create()
  world = engine.world

  options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options)
  World.add(world, ground)

  tower = Bodies.rectangle(80, height - 450, 100, 250, options)
  World.add(world, tower)
}

function draw() {
  background(189)
  Engine.update(engine)

  //Background
  image(backgroundImg, 0, 0, 1200, 600)

  //Solo
  rect(ground.position.x, ground.position.y, width * 2, 1)

  //Torre
  image(towerImg, tower.position.x, tower.position.y, 200, 350)
}
