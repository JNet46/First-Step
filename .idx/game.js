const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const playerSize = 30;
let playerX = 100, playerY = 100;

canvas.width = 1000;
canvas.height = 720;
canvas.style.position = 'absolute';
canvas.style.left = '25%';
canvas.style.top = '25%';


function drawPlayer() {
    ctx.fillStyle = 'red';
    ctx.fillRect(playerX, playerY, playerSize, playerSize);
}

function updateGameArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
}

function movePlayer(event) {
    if (event.key === 'ArrowUp') playerY -= 5;
    if (event.key === 'ArrowDown') playerY += 5;
    if (event.key === 'ArrowLeft') playerX -= 5;
    if (event.key === 'ArrowRight') playerX += 5;
}

document.addEventListener('keydown', movePlayer);

function gameLoop() {
    updateGameArea();
    requestAnimationFrame(gameLoop);
}

gameLoop();