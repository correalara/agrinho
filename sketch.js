function setup() {
  createCanvas(400, 400);
}
function setup() {
  createCanvas(400, 400);
}
 let bike;
let road;

function setup() {
  createCanvas(500, 400);
  bike = new Bike();
  road = new Road();
}

function draw() {
  background(220);

  // Atualiza e desenha a estrada
  road.show();

  // Atualiza e desenha a moto
  bike.update();
  bike.show();
}

class Bike {
  constructor() {
    this.x = width / 2;
    this.y = height - 60;
    this.width = 50;
    this.height = 30;
    this.speed = 5;
  }

  update() {
    // Movimenta a moto para a esquerda ou direita
    if (keyIsDown(LEFT_ARROW) && this.x > 0) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW) && this.x < width - this.width) {
      this.x += this.speed;
    }
  }

  show() {
    fill(0, 0, 255);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
  }
}

class Road {
  show() {
    fill(100, 100, 100);
    noStroke();
    rect(0, 0, width, height);
    
    // Marcas na estrada
    stroke(255);
    strokeWeight(3);
    for (let i = 0; i < height; i += 50) {
      line(width / 2, i, width / 2, i + 25);
    }
  }
}
