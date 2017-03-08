function setup() {
    createCanvas(1000, 480);

    frameRate(30);

    for (let i = 0; i < 100; i++) {
        const star = createStar();
        stars.push(star);
    }
}

function draw() {
    background(0);
    translate(width / 2, height / 2);

    for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        fill(255);
        noSmooth();
        const vec = star.vec;
        let size = (vec.mag() * 1);
        size = map(size, 0, width / 2, .5, 5);
        const pos = p5.Vector.add(star.offset, vec);

        noStroke();
        const color = star.color;
        fill(color );
        ellipse(pos.x, pos.y, size);
        
        // fill(255, 50);        
        // ellipse(pos.x, pos.y, size * 4);

        const frameFactor = frameRate() / 15;
        
        // console.log(frameFactor);
        vec.setMag(vec.mag() + 0.2 * frameFactor);
        vec.mult(1 + 0.02 * frameFactor);

        if (Math.abs(pos.x) > width / 2 ||
            Math.abs(pos.y) > height / 2) {
            stars[i] = createStar();
        }
    }
}

const stars = [];
function createStar() {
    let vec = undefined;
    do {
        let x = random(-width / 2, width / 2);
        let y = random(-height / 2, height / 2);

        vec = createVector(x, y);
        // console.log(vec);
    } while (!vec || (vec.x == 0 && vec.y == 0));
    return new Star(vec);
}

function Star(offset) {

    this.vec = offset.copy();
    this.vec.normalize();
    // console.log("this.vec");
    // console.log(this.vec);
    this.offset = offset;
    this.color = color(255); //color(floor(random(0,256)),floor(random(0,256)),floor(random(0,256)));
}
