class Mango{
   constructor(x, y, diameter) {
       var options={
           isStatic:true,
           'restitution':0.5,
           'friction':1.0,
       }
       this.body = Bodies.circle(x, y, diameter, options);
       this.diameter=diameter;
       this.image = loadImage("mango.png");
       World.add(wold, this.body);
   }
   display(){
       push();
       translate(this.body.position.x, this.body.position.y);
       ImageMode(CENTRE);
       image(this.image, 0, 0, this.diameter);
       pop();
   }
}