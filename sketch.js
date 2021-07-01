var red;
var yelow
var blue
var green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
  red = createButton("Red")
  red.position(80, 200)
  red.mousePressed(red_bg)
  yellow = createButton("Yellow")
  yellow.position(140, 200)
  yellow.mousePressed(yellow_bg)
  blue = createButton("Blue")
  blue.position(220, 200)
  blue.mousePressed(blue_bg)
  green = createButton("Green")
  green.position(280, 200)
  green.mousePressed(green_bg)
}

function red_bg() {
  r = 255
  g = 0
  b = 0
}
function yellow_bg() {
  r = 255
  g = 255
  b = 0
}
function blue_bg() {
  r = 0
  g = 0
  b = 255
}
function green_bg() {
  r = 0
  g = 255
  b = 0
}

function draw() {
  background(r,g,b);
}

