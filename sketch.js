function setup(){
    createCanvas(640,480);
    angleMode(DEGREES);
}

function draw(){

fill(255);
    background(0);
    // text(`mouse: ${mouseX}`, 100, 100);

    var angle = mouseX % 360;
    push();
    translate(50,50);
    rotate(angle);
rectMode(CENTER);
rect(0,0,30,30);
    pop();

    push();
    translate(90,50);
    rotate((angle + 45) * -1);
rectMode(CENTER);
rect(0,0,30,30);
    pop();

}