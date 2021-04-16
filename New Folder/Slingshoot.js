class Slingshoot{
      constructor(bodyA,pointB){
          var options = {bodyA:bodyA,pointB:pointB,length:30,stiffness:0.05}
          this.pointB = pointB 
          this.sling = Matter.Constraint.create(options)
          World.add(world,this.body)          
      }
      display(){
        var pointA = this.sling.bodyA.position
        var pointB = this.pointB
        if(this.sling.bodyA){
          push()
          strokeWeight(6)
          line(pointA.x,pointA.y,pointB.x,pointB.y)   
          pop() 
        }
       
      }
      fly(){
        this.sling.bodyA = null 
      }
}