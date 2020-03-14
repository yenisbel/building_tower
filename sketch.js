
const { Events, Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let ground;
let blockes = [];
let block;
let world, engine;
let mConstraint;
let slingshot;
let pendule;

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
  // Creating 3 bodies that later I will add into the world before
  ground = new Ground(width / 2, height - 10, width, 20);
  box = new Box(450, 300, 84, 100);
  block = new Block(150, 200, 85, 85);
  
  slingshot = new SlingShot(300, 30, block.body);
  // pendule = new Pendule();

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
    for (const bl of blockes) {
      World.remove(world, bl.body);
    };
    blockes = [];
    World.remove(world, block.body);
    World.remove(world, box.body);
    block = new Block(150, 300, 85, 85);
    slingshot.attach(block.body);
    box = new Box(150, 300, 85, 85);
  }

}

function mouseReleased() {
  setTimeout(() => {
    slingshot.fly();
  }, 100);
   
  setTimeout(() => {
    new_block = new Block(140, 200, 85, 85);
    slingshot.attach(new_block.body);
    blockes.push(new_block)
  }, 1500);
}

function draw() {
  background(bkgImg);
  Matter.Engine.update(engine);
  ground.show();
  box.show();
  // pendule.show();
  slingshot.show();
  block.show()
  for (const b of blockes) {
    b.show();
  };
}
