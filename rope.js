class rope
{
	constructor(body1,body2,offsetX,offsetY){
  this.offsetX = offsetX 
  this.offsetY = offsetY
  var op = {
bodyA : body1,
bodyB :body2,
pointB:{x:this.offsetX,y: this.offsetY}
  }
  this.rope = Matter.constaraint.create(op)
  World.add(world,rope)
}
display(){
var pointA = this.rope.bodyA.position;
var pointB = this.rope.bodyB.position;
strokeweight(2)
var Anchor1X=point1.x;
var Anchor1Y= point1.y;
var Anchor2x = point2.x+this.offsetX;
var Anchor2Y = point2.y+ this.offsetY;
line (Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)
}

}
