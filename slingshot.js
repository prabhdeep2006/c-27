class Slingshot  {
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.4,
            length:10
        }
        this.sling=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.sling);
    
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
        var a= this.sling.bodyA.position;
        var p=this.pointB;
        push();
        strokeWeight(4);
        stroke("brown");
        line(a.x,a.y,p.x,p.y);
        pop();
        }
    }
}