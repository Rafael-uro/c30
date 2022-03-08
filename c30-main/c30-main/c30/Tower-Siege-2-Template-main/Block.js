class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.image = loadImage("block.png")
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visible = 255

    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      //rect(pos.x,pos.y,this.width, this.height);
      if (this.body.speed < 4.5) {
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height )
        Block.destroy


      }
        else {
        World.remove(world, this.body)
        this.visible -= 5
        push()
        imageMode(CENTER)
        tint(255, this.visible)
       // image(this.image, this.body.position.x, this.body.position.y, 70, 70)
        pop()
  
  
      }
    }
    
}
