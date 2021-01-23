class Umbrella{
    constructor(x,y){
        var option = {
            isStatic : true
        }
        this.body = Bodies.circle(x, y, 40, option);
        World.add(world, this.body);
        this.image = loadImage("walking_1.png");
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y+100, 300, 300);
    }
}