class Police{
    constructor (x,y){
this.x = x;
this.y =y;
this.width = 50;
this.height = 50;

}
display(){
    
    
    imageMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill("red");
    image(polimg,this.x, this.y, this.width, this.height);
 
}
//police = createSprite()
}

