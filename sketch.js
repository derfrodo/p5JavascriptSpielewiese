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
    translate(100, 100);
    rotate((second() / 60) * (2 * PI));
    textAlign(CENTER, CENTER);
    text(second(), 0, 0);
    pop();


    push();

    const c2 = 5;

    const tStamp = Date.now();
    const hmilli = tStamp % 2000;
    const milli = tStamp % 1000;
    let sec = floor(tStamp / 1000);
    sec = (sec % 60) + milli / 1000;

    let min = floor(tStamp / (60 * 1000));
    min = (min % 60) + sec / 60;

    text(sec, 200, 100);
    text(min, 200, 120);

    //    const mAngle = (min / 60) * (2 * PI);
    const msAngle = (milli / 1000) * (2 * PI);
    const hmsAngle = (hmilli / 2000) * (2 * PI);
    const sAngle = (sec / 60) * (2 * PI);
    const mAngle = (min / 60) * (2 * PI);

    drawGear(200, 300, 40, c2, mAngle);
    drawGear(330, 300, 80, c2 * 60, (-1) * sAngle);
    drawGear(426, 300, 16, c2 * 2, hmsAngle);
    drawGear(600, 300, 20, c2, (-1) * msAngle);

    pop();
}

function drawGear(x, y, radius, cogs, initialAngle) {

    push();
    translate(x, y);
    rectMode(CORNER);

    // https://de.wikipedia.org/wiki/Modul_(Zahnrad)
    let d = radius * 2;
    let m = d / cogs;
    let dk = d + (2 * m);
    let df = d - (2 * (1.25 * m));

    angleMode(RADIANS);
    rotate(initialAngle);
    fill(255);
    ellipse(0, 0, df, df);

    stroke(0, 0, 255);
    fill(0, 0, 255);
    textSize(radius);
    textAlign(CENTER, CENTER);
    text("G", 0, 0);

    const angle = (PI * 2) / cogs;
    const cogSize = 2.25 * m;

    for (let i = 0; i < cogs; i++) {
        push();
        rotate(i * angle);
        translate(0, (df / 2) - 1);
        noStroke();
        fill(255);

        rect(-1 * (cogSize / 4), 0, cogSize / 2, cogSize);
        pop();
    }
 
    pop();
}

function drawGear2(x, y){

}