var angle = 0;
var sponge = [];
var mousePresses = 0;
var selfBox;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  normalMaterial();

  selfBox = new Box(0, 0, 0, 400);
  sponge.push(selfBox);

  background(0);
}

function mousePressed() {
  if(mousePresses < 2){
    var next = [];
    for (var i = 0; i < sponge.length; i++) {
      var selfBox = sponge[i];
      var newBoxes = selfBox.generate();
      next = next.concat(newBoxes);
    }
    sponge = next;
    mousePresses++;
  }
}

function draw() {
  background(0);

  stroke(255);
  rotateY(angle);

  for (var i = 0; i < sponge.length; i++) {
    sponge[i].show();
  }

  angle += 0.01;
}