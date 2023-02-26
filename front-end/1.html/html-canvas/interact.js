const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

let mouse = {
  x: undefined,
  y: undefined
}

let maxRadius = 40;
// let minRadius = 4;

const colorArray = [
  '#ffaa33',
  '#ggff92',
  '#ddaaff',
  '#893884',
  '#288211'
];

window.addEventListener('mousemove', function(event) {
  // console.log(event);
  mouse.x = event.clientX;
  mouse.y = event.clientY;
  console.log(mouse);
})

window.addEventListener('mouseout', function() {
  mouse.x = undefined;
  mouse.y = undefined;
})

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
})

class Circle {
  constructor(x, y, dx, dy, radius, r, g, b, a) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a > 1 ? 1 : this.a})`;
    // c.fillStyle = colorArray[Math.floor(Math.random() * colorArray.length)];
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

    // interactivity

    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if(this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  }
}

const randomWidth = (radius) =>  {
  return Math.random() * (innerWidth - radius * 2) + radius;
};
const randomHeight = (radius) =>  {
  return Math.random() * (innerHeight - radius * 2) + radius;
};
const randomVelocity = () => (Math.random() - 0.5) * 2;
const randomColor = () => Math.random() * 255;
const randomOpacity = () => Math.random() + 0.2;
const randomRadius = () => Math.random() * 8 + 1;

let circleArray = [];

function init() {

  circleArray = [];

  for (let i = 0; i < 400; i++) {
    let radius = randomRadius();
    let x = randomWidth(radius);
    let y = randomHeight(radius);
    let dx = randomVelocity();
    let dy = randomVelocity();
    let r = randomColor();
    let g = randomColor();
    let b = randomColor();
    let a = randomOpacity();
    circleArray.push(new Circle(x, y, dx, dy, radius, r, g, b, a));
  }
}

init();

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();