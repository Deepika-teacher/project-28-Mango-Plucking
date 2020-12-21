class Launcher{
    constructor(body1,body2){
        var options={
            bodyA : body1,
            pointB : body2,
            stiffness :0.004,
            length : 1
        }
        this.body=Constraint.create(options);
        World.add(world,this.body);
    }

    fly(){
        this.body.bodyA=null;
    }

    attach(body){
        this.body.bodyA=body;
    }

    display(){
        if(this.body.bodyA){
            var pointA=this.body.bodyA.position;
            var pointB=this.body.pointB;

            strokeWeight(2);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
    }
}