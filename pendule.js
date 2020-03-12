// class Pendule {
//   constructor(r1, r2, m1, m2, a1, a2) {
    
//       // let r1 = r1;
//       // let r2 = r2;
//       // let m1 = m1;
//       // let m2 = m2;
//       // let a1 = a1;
//       // let a2 = a2;
    
//     // const options = {
//     //   restitution: 0.5
//     // };
//     // let r1;
//     // let r2;
//     // let m1;
//     // let m2;
//     // let a1 = 0;
//     // let a2 = 0;
//     this.body = Matter.Bodies.rectangle(r1, r2, m1, m2, a1, a2);
//     // this.pendule = Constraint.create(options);
//     World.add(world, this.body);
//   }

//   show() {
//     const pos = this.body.position;
//     const angle = this.body.angle;
//     let angle1 = PI/4;
//     let angle2 = PI/8;
//     stroke(0);
//     strokeWeight(2);
//     // put it in the middle
//     translate(500, 50);
//     // i need the angle for move the pendule
//     let x1 = pos.x * sin(angle1);
//     let y1 = pos.x * cos(angle1);
//     // const posA = this.sling.pointA;
//     // const posB = this.sling.bodyB.position;
//     let x2 = x1 + pos.x * sin(angle2);
//     let y2 = y1 + pos.x * cos(angle2);
    
//     line(0, 0, x1, y1);
//     fill(0);
//     ellipse(x1, y1, 10, 10);

//     line(x1, y1, x2, y2);
//     fill(0);
//     ellipse(x2, y2, 10, 10);
//     angle1 += 0.1;
//     angle2 -=0.1;
//   }
// }
 
