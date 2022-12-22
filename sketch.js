let theTree;
let theOrnaments = [];

function setup() {
  createCanvas(1280, 900);
  theTree = new Tree(width/2, 50, width/2, height-200);

  //schellenberg's ornament
  let schellenbergOrnament = new danOrnament(width/2, height/2);
  theOrnaments.push(schellenbergOrnament);

  //add yours here!  should something like:
  // let hladyOrnament = new willOrnament(width/2, height/2);
  // theOrnaments.push(hladyOrnament);
}

function draw() {
  background(220);
  theTree.display();
  for (let myOrnament of theOrnaments) {
    myOrnament.update();
    myOrnament.display();
  }
}

class Tree {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  display() {
    noStroke();
    
    //branches
    fill("green");
    triangle(this.x, this.y, this.x-this.width/3, this.y+this.height, this.x+this.width/3, this.y+this.height);

    //trunk
    fill("brown");
    rectMode(CORNER);
    rect(this.x-this.width/10, this.y+this.height, this.width/5, this.height);

    stroke("black");
  }
}

class Ornament {
  constructor(x, y, someColor, width, height) {
    this.x = x;
    this.y = y;
    this.someColor = someColor;
    this.width = width;
    this.height = height;
  }
  
  update() {
  }
  
  display() {
    fill(this.someColor);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.width, this.height);
  }
}

class danOrnament extends Ornament {
  constructor(x, y) {
    super(x, y, "blue", 30, 30);
  }
  
  update() {
    if (random(100) < 50) {
      this.width++;
      this.height++;
    }
    else {
      this.width--;
      this.height--;
    }
  }
}

//add your class here... should look something like:
//class willOrnament extends Ornament {
