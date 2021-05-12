class Ball{
    constructor(x,y,w,h,a){
        var options={
            density:1,
            frictionAir:0.05

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
        fill("Grey")
        ellipse(0,0,this.width,this.height)
        pop();
    }
}