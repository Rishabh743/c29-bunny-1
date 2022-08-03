class Link{
    constructor(bodyA,bodyB){
        var last_link=bodyA.body.bodies.length-2
        this.link=Constraint.create({
            bodyA:bodyA.body.bodies[last_link],
            bodyB:bodyB,
            length:-5,
            stiffness:0.01
        })
        World.add(engine.world,this.link)
    }
}