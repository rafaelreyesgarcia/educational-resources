const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

class Circle {
  constructor(x, y, dx, dy, radius, r, g, b) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.r = r;
    this.g = g;
    this.b = b;
  }
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = `rgb(${this.r}, ${this.g}, ${this.b})`;
    c.fill();
  }
  update() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

const randomVelocity = () => (Math.random() - 0.5) * 5;
const randomWidth = (radius) =>  {
  return Math.random() * (innerWidth - radius * 2) + radius;
};
const randomHeight = (radius) =>  {
  return Math.random() * (innerHeight - radius * 2) + radius;
};
const randomColor = () => Math.random() * 255;

let circleArray = [];

for (let i = 0; i < 100; i++) {
  let radius = 30;
  let x = randomWidth(radius);
  let y = randomHeight(radius);
  let dx = randomVelocity();
  let dy = randomVelocity();
  let r = randomColor();
  let g = randomColor();
  let b = randomColor();
  circleArray.push(new Circle(x, y, dx, dy, radius, r, g, b));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();