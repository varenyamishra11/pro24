class paper {
  constructor(x, y, radius) {
    var options = {
      isStatic: false,
      restitution: 0.3,
      friction: 0.5,
      density: 1.6
    }

    this.body = Bodies.circle(x, y, radius / 2, options)
    this.image = loadImage("paper.png")
    World.add(world, this.body);

  }



  display() {

    var pos = this.body.position;
    push()
    translate(pos.x, pos.y);
    fill("pink")
     image(this.image, 0,0,this.radius, this.radiuss)
    pop()

  }

};