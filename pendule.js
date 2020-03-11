class Pendule {
  constructor(x, y, length, width) {
    const options = {
      restitution: 0.5
    };

    this.body = Matter.Bodies.rectangle(x, y, length, width, { 
      // collisionFilter: { group: group },
      frictionAir: 0,
      chamfer: 5,
      render: {
          fillStyle: 'transparent',
          lineWidth: 1
      }
    });

    Matter.World.add(world, this.body);
    this.length = length;
    this.width = width;
  }

  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    // rectMode(CENTER);
    // pendulum.bodies[0].render.strokeStyle = '#4a485b';
    imageMode(CENTER);
    image(boxImg, 0, 0, this.w, this.h);
    pop();
  }
}
