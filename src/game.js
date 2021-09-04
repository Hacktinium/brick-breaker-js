const WIDTH = 800;
const HEIGHT = 400;
const RADIUS = 100;

const content = document.getElementById("content");

const canvas = document.createElement('canvas');
canvas.width = WIDTH;
canvas.height = HEIGHT;
content.appendChild(canvas);

const context = canvas.getContext('2d');

function bg(ctx) {
    ctx.fillStyle = 'indianred';
    ctx.fillRect(0,0, WIDTH, HEIGHT);
}

function drawCircle(ctx, t) { 
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(
        WIDTH / 2 + RADIUS * Math.cos(t/ 50), 
        HEIGHT / 2 +  RADIUS * Math.sin(t/ 50), 
        10, 0, 2 * Math.PI)
    ctx.fill();
}

function draw(time){
    bg(context);
    drawCircle(context, time);
    requestAnimationFrame(draw);
}

draw();