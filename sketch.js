function setup() {
    createCanvas(640, 480);
    angleMode(DEGREES);
}

function draw() {

    fill(255);
    background(0);
    // text(`mouse: ${mouseX}`, 100, 100);

    var angle = (mouseX / 2) % (2 * PI);

    var cogs = 15;
    const additionalAngle = PI / cogs;
    drawGear(200, 200, 40, cogs, angle + additionalAngle);
    drawGear(246, 200, 40, cogs, -1 * angle);

    push();

    translate (100,100);
    rotate((second()/60) * (2*PI));
    textAlign(CENTER, CENTER);
    text(second(),0,0);
    pop();
}

function drawGear(x, y, radius, cogs, initialAngle) {

    push();
    translate(x, y);
        rectMode(CORNER);

    angleMode(RADIANS);
    rotate(initialAngle);
    fill(255);
    ellipse(0, 0, radius, radius);
    
    stroke(0, 0, 255);
    fill(0, 0, 255);
    textSize(radius);
    textAlign(CENTER, CENTER);
    text("G", 0,0);

    const angle = (PI * 2) / cogs;
    const cogSize = radius / cogs;

    for (let i = 0; i < cogs; i++) {
        push();
        rotate(i * angle);
        translate(0, (radius / 2) - 1);
        noStroke();

        rect(-1 * (cogSize / 2), 0, cogSize, cogSize * 2);
        pop();
    }

    pop();
}