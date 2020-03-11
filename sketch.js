
const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let ground;
const boxes = [];
let block;
let world, engine;
let mConstraint;
let slingshot;

let dotImg;
let boxImg;
let bkgImg;

function preload() {
  dotImg = loadImage('images/block.png');
  boxImg = loadImage('images/base.png');
  bkgImg = loadImage('images/skyBackground.png');
}

function setup() {
  const canvas = createCanvas(1283, 795);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height - 10, width, 20);
  box = new Box(450, 300, 84, 100);
  block = new Block(150, 200, 85, 85);
  
  slingshot = new SlingShot(300, 30, block.body);

  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse
  };

  // A fix for HiDPI displays
  mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}

function keyPressed() {
  if (key == ' ') {
    World.remove(world, block.body);
    block = new Block(150, 300, 85, 85);
    slingshot.attach(block.body);
  }
}

function mouseReleased() {
  setTimeout(() => {
    slingshot.fly();
  }, 100);
}

function draw() {
  background(bkgImg);
  Matter.Engine.update(engine);
  ground.show();
  box.show();
  // pendule.show();
  slingshot.show();
  block.show();
}
