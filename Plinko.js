class Plinko{
    constructor(x,y,r){
        var options={
            isStatic:true

        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body);
    }
    Display(){
        var pos = this.body.position;
        
        fill("brown");
        circle(pos.x,pos.y,this.r);
            
            
            


    }
}

