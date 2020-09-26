class Tree{
constructor(x,y){
 var options={
isStatic:true
 }
 this.treeWidth=450;
 this.treeHeight=500;
 this.treeThickness=10;
 
 //this.height=height;
 //is.width=width;
 this.image = loadImage("tree.png");
 this.body = Bodies.rectangle(x,y,this.treeWidth,this.treeHeight,options);
 World.add(world,this.body);
}
display(){
 push();
 translate(this.body.position.x,this.body.position.y)
 imageMode(CENTER);
 image(this.image,0,-300,this.treeWidth,this.treeHeight);
 pop();   
}
}