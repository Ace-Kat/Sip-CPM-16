let circle;
let secondSketchContent = null;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  circle = new InteractObject(500, 500);
  circle.writeText("Material Exploitation");
}

function draw() {
  // Add any additional drawing or animations here if needed
}

async function loadSecondSketchContent() {
  if (secondSketchContent === null) {
    // Load the content of "second_sketch.html" using Fetch API
    let response = await fetch('second_sketch.html');
    secondSketchContent = await response.text();
  }
  
  // Display the content in a separate container or element
  let container = createDiv();
  container.html(secondSketchContent);
}

function mousePressed() {
  // Check if the mouse is inside the circle's bounding box
  if (circle.contains(mouseX, mouseY)) {
    // Load and display the content of "second_sketch.html"
    loadSecondSketchContent();
  }
}

class InteractObject {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 200; // Adjust the size of the circle
    fill(255, 0, 0);
    ellipse(x, y, this.diameter, this.diameter);
  }
  
  writeText(texts) {
    textSize(24); // Increased text size for better visibility
    fill(0, 255, 0);
    textAlign(CENTER, CENTER); // Align text to the center of the ellipse
    text(texts, this.x, this.y);
  }
  
  contains(x, y) {
    // Check if the given (x, y) coordinates are inside the circle
    let d = dist(x, y, this.x, this.y);
    return d < this.diameter / 2;
  }
}