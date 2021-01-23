class Drops{
    constructor(x,y){
        var option = {
            friction : 0.1,
        }
        this.body = Bodies.circle(x, y, 10, option);
        World.add(world, this.body);
    }

    display(){
        push();
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(this.body.position.x, this.body.position.y, 5, 5);
        pop();
    }

    update(){
        if (this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)});
        }
    }
}