const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');


c.fillStyle = 'rgba(255, 255, 0, 0.5)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(222, 222, 100, 100);
c.fillStyle = 'rgba(0, 0, 255, 0.5)';
c.fillRect(455, 55, 100, 100);

c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.strokeStyle = '#f7d83d';
c.stroke();


// c.beginPath();
// c.arc(500, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'pink';
// c.stroke();

// making copies of circles

for (let index = 0; index < 20; index++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  const randomColor = () => Math.random() * 255;

  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 1)`;
  c.stroke();
}


// console.log(Math.floor(Math.random()*10) + 1);

// console.log(Math.random() * 255);