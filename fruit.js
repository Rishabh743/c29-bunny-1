class Fruit{
constructor(x,y,radius){
    this.body=Bodies.circle(x,y,radius)
    Matter.Composite.add(rope.body,this.body)
this.r=radius
}
show(){
    fill("red")
ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
}
}

