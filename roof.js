class roof {
    constructor(x, y, width, height) {
      
this.body= Bodies.rectangle(x,y,width,height,{isStaic:true})
this.width = width
this.height= height
      }
 display()  {
push();
rectMode(CENTER);
fill(120,120,120)
rect(this.body.position.x,this.body.position.y,this.width,this.height)
pop();
}   
    }
    