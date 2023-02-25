const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

class Circle {
  constructor(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
  }
  draw() {
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
  }
  update() {
    if (x + radius > innerWidth || x - radius < 0) {
      xVelocity = -xVelocity;
    }

    if (y + radius > innerHeight || y - radius < 0) {
      yVelocity = -yVelocity;
    }

    x += xVelocity;
    y += yVelocity;
  }
}

let circle = new Circle(200, 200);

let x = Math.random() * innerWidth; // 200
let y = Math.random() * innerHeight; // 200
let xVelocity = Math.random() - 0.5 * 5; // 1
let yVelocity = Math.random() - 0.5 * 5; // 1
let radius = 30; // 30

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  // circle.draw();

  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.strokeStyle = 'blue';
  c.stroke();

  if (x + radius > innerWidth || x - radius < 0) {
    xVelocity = -xVelocity;
  }

  if (y + radius > innerHeight || y - radius < 0) {
    yVelocity = -yVelocity;
  }

  x += xVelocity;
  y += yVelocity;
}

animate();