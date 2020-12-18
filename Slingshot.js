class Slingshot{
constructor(A,B){
 var option = {
   bodyA:A,bodyB:B,length:10,stiffness:1
 }   
this.chain = Constraint.create(option) 
World.add(world,this.chain)
}

Display(){
    push();
    strokeWeight(5)
    //line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
    pop();
};
}