alert("Hello World!");

let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
let tx = window.innerWidth;
let ty = window.innerHeight;
canvas.width = tx;
canvas.height = ty;
//c.lineWidth= 5;
//c.globalAlpha = 0.5;

let mousex = 0;
let mousey = 0;

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
// var grd = ctx.createLinearGradient(0, 0, 200, 0);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "white");

// Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10, 10, 150, 80);

// Draw Circular GRADIENT
// Create gradient
// var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "white");

// Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10, 10, 150, 80);

addEventListener("mousemove", function () {
  mousex = event.clientX;
  mousey = event.clientY;
});

var grav = 0.99;
c.strokeWidth = 5;
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
