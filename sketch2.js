function setup() {
    createCanvas(640, 480);

    for (let i = 0; i < 200; i++) {
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

        const vec = star.vec;
        let size = (vec.mag() * 0.5);
        size = map(size, 0, width / 2, 2, 8);
        const pos = p5.Vector.add(star.offset, vec);

        ellipse(pos.x, pos.y, size);

        vec.setMag(vec.mag() + 0.5);
        vec.mult(1.0125);

        if (Math.abs(vec.x) > width / 2 ||
            Math.abs(vec.y) > height / 2) {
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
}
