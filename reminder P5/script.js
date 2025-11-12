// Your variables go here

let synth;

function preload() {
    // Load ressources before setup
}

 function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background(255);

  const s = 60;      // square size
  const t = 12;      // frame thickness
  const m = 24;      // margin from the canvas edge

  noFill();
  stroke(255, 0, 255);   // magenta like your example
  strokeWeight(t);
  rectMode(CORNER);      // x,y are the top-left of each square

  // top-left
  rect(m, m, s, s);
  // top-right
  rect(width - m - s, m, s, s);
  // bottom-right
  rect(width - m - s, height - m - s, s, s);
  // bottom-left
  rect(m, height - m - s, s, s);
}