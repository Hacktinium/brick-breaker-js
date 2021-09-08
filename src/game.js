// Initial constants
const WIDTH = 800;
const HEIGHT = 400;
const RADIUS = 100;

// Setup <canvas/> element
const content = document.getElementById("content");
const canvas = document.createElement('canvas');
canvas.width = WIDTH;
canvas.height = HEIGHT;
content.appendChild(canvas);
const ctx = canvas.getContext('2d');

// Helper functions for drawing
function drawBackground() {
    ctx.fillStyle = 'indianred';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
}
function drawCircle(x, y, r) {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    ctx.fill();
}
function drawRect(x, y, w, h) {
    ctx.fillStyle = 'white';
    ctx.fillRect(x, y, w, h);
}

// Main animation loop
function drawLoop(time) {
    draw(time);
    requestAnimationFrame(drawLoop);
}

// Drawing function called every frame
function draw(t) {
    // This is where we can put game logic
    drawBackground();
    drawCircle(
        WIDTH / 2 + RADIUS * Math.cos(t / 100),
        HEIGHT / 2 + RADIUS * Math.sin(t / 100),
        10
    );
}

drawLoop();