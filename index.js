// Filled TEXT Writing
// ctx.font = "30px Arial";
// ctx.fillText("Hello World", 10, 40);

// Stroked TEXT
// ctx.font = "30px Arial";
// ctx.strokeText("Hello World", 10, 50);

// Circle Graphic
// ctx.beginPath();
// ctx.arc(95, 50, 40, 0, 2 * Math.PI);
// ctx.stroke();

// Draw Line
// ctx.moveTo(0, 0);
// ctx.lineTo(200, 100);
// ctx.stroke();

// Draw Linear GADIENT
// Create gradient
// let grd = ctx.createLinearGradient(0, 0, 200, 0);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "white");

// Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10, 10, 150, 80);

// Draw Circular GRADIENT
// Create gradient
// let grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "white");

// Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10, 10, 150, 80);

console.log("Hello World");

let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");
let tx = window.innerWidth;
let ty = window.innerHeight;
canvas.width = tx;
canvas.height = ty;
//c.lineWidth= 5;
//c.globalAlpha = 0.5;

// Mouse Tracking
let mousex = 0;
let mousey = 0;

addEventListener("mousemove", function () {
  mousex = event.clientX;
  mousey = event.clientY;
});

let grav = 0.99;
c.lineWidth = 5;

// Generates random RGB color
function randomColor() {
  return (
    "rgba(" +
    Math.round(Math.random() * 250) +
    "," +
    Math.round(Math.random() * 250) +
    "," +
    Math.round(Math.random() * 250) +
    "," +
    Math.ceil(Math.random() * 10) / 10 +
    ")"
  );
}
// Draws new ball with random color, size, and velocity
function Ball() {
  this.color = randomColor();
  this.radius = Math.random() * 20 + 14;
  this.startradius = this.radius;
  this.x = Math.random() * (tx - this.radius * 2) + this.radius;
  this.y = Math.random() * (ty - this.radius);
  this.dy = Math.random() * 2;
  this.dx = Math.round((Math.random() - 0.5) * 10);
  this.vel = Math.random() / 5;
  this.update = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    c.fillStyle = this.color;
    c.fill();
    //c.stroke();
  };
}

// Makes 50 new random balls using ball() and pushes to an array
let bal = [];
for (let i = 0; i < 50; i++) {
  bal.push(new Ball());
}

// updates and renders the animation continously
function animate() {
  if (tx != window.innerWidth || ty != window.innerHeight) {
    tx = window.innerWidth;
    ty = window.innerHeight;
    canvas.width = tx;
    canvas.height = ty;
  }
  requestAnimationFrame(animate);
  c.clearRect(0, 0, tx, ty);

  // i will increase and update each loop the loop is only as long as the bal array so it will cycle through each object in the array
  for (let i = 0; i < bal.length; i++) {
    bal[i].update();
    bal[i].y += bal[i].dy;
    bal[i].x += bal[i].dx;
    if (bal[i].y + bal[i].radius >= ty) {
      bal[i].dy = -bal[i].dy * grav;
    } else {
      bal[i].dy += bal[i].vel;
    }
    if (bal[i].x + bal[i].radius > tx || bal[i].x - bal[i].radius < 0) {
      bal[i].dx = -bal[i].dx;
    }
    if (
      mousex > bal[i].x - 20 &&
      mousex < bal[i].x + 20 &&
      mousey > bal[i].y - 50 &&
      mousey < bal[i].y + 50 &&
      bal[i].radius < 70
    ) {
      //bal[i].x += +1;
      bal[i].radius += 5;
    } else {
      if (bal[i].radius > bal[i].startradius) {
        bal[i].radius += -5;
      }
    }

    //forloop end
  }
  //animation end
}

animate();
