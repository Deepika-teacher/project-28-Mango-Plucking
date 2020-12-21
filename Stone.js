class Stone{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution : 0,
            density : 1.2,
            friction : 1
        }
        this.body=Bodies.circle(x,y,radius/2,options);
        World.add(world,this.body);
        this.image=loadImage("images/plucking mangoes/stone.png");
        this.radius=radius;
    }

    display(){
        var pos=this.body.position;
// pos.x=mouseX;
 //pos.y=mouseY;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop();
    }
}