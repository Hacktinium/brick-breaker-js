const WIDTH = 800;
const HEIGHT = 400;
const RADIUS = 100;

const content = document.getElementById("content");

const canvas = document.createElement('canvas');
canvas.width = WIDTH;
canvas.height = HEIGHT;
content.appendChild(canvas);

const context = canvas.getContext('2d');

function drawBackground(ctx) {
    ctx.fillStyle = 'indianred';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

function drawCircle(ctx, x, y, r) {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    ctx.fill();
}

function drawLoop(time) {
    draw(context, time);
    requestAnimationFrame(drawLoop);
}

function draw(ctx, t) {
    drawBackground(ctx);
    drawCircle(
        ctx,
        WIDTH / 2 + RADIUS * Math.cos(t / 100),
        HEIGHT / 2 + RADIUS * Math.sin(t / 100),
        10
    );
}

drawLoop();