class Box{
  constructor(x,y,w,h){
      var options={
          density:0.04,
          friction:1,
          restitution:0.6

      }
      this.body=Bodies.rectangle(x,y,w,h,options)
      this.width=w
      this.height=h
      World.add(world,this.body)
  }
  display(){
      var angle = this.body.angle
      var pos = this.body.position
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER)
      fill("Black")
      rect(0,0,this.width,this.height)
      pop();
  }
}