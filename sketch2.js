function setup() {
    createCanvas(640, 480);

    for (let i = 0; i < 100 ; i++) {

        let x = random(-width / 2, width / 2);
        let y = random(-height / 2, height / 2);

        stars.push(createVector(x, y));
    }
}

function draw() {
    background(0);
    translate(width / 2, height / 2);

    for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        fill(255);
        ellipse(star.x, star.y, 5, 5);
        star.mult(1.05);

        if (Math.abs(star.x) > width / 2 ||
            Math.abs(star.y) > height / 2) {

            let x = random(-width / 2, width / 2);
            let y = random(-height / 2, height / 2);

            stars[i] = createVector(x, y);
        }
    }
}

const stars = [];

function star() {

}