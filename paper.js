class paper {
    constructor(x,y,diameter) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.d=diameter;
      this.x=x;
      this.y=y;
      this.body = Bodies.circle(this.x,this.y,this.d,options);
      this.image=loadImage("paper.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, 50,50);
      
    }
  };
