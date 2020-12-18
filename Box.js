class Block {
    constructor(x, y,width,height) {
      var options = {
        'density':0.8,
        'friction': 1.0,
        'restitution':1
      };
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("orange.jpg");
      this.visibility = 255;
      World.add(world, this.body);
    };
    display(){
      if(this.body.speed<3){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("yellow");
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
      } else {
        World.remove(world,this.body);
        push();
        this.visibility=this.visibility-5;
        tint(255,this.visibility);
        image(this.image,this.body.position.x, this.body.position.y,this.width,this.height);
        pop();
      }
    };
    score(){
      if(this.visibility<0 && this.visibility > -1005){
        score++;
      }
    }
  };