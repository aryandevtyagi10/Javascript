const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const paddleWidth = 10, paddleHeight = 100;
let playerY = canvas.height / 2 - paddleHeight / 2;
let aiY = playerY;
const ballSize = 10;
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 6, ballSpeedY = 4;

let playerScore = 0;
let aiScore = 0;
let isGameOver = false;

function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.shadowColor = color;
  ctx.shadowBlur = 20;
  ctx.fillRect(x, y, w, h);
  ctx.shadowBlur = 0;
}

function drawText(text, x, y, color, size = "30px") {
  ctx.fillStyle = color;
  ctx.font = `${size} Orbitron, monospace`;
  ctx.shadowColor = color;
  ctx.shadowBlur = 10;
  ctx.fillText(text, x, y);
  ctx.shadowBlur = 0;
}

function drawCircle(x, y, r, color) {
  ctx.fillStyle = color;
  ctx.shadowColor = color;
  ctx.shadowBlur = 15;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;
}

function resetBall() {
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
  ballSpeedX = -ballSpeedX;
  ballSpeedY = 4 * (Math.random() > 0.5 ? 1 : -1);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRect(0, 0, canvas.width, canvas.height, "#111"); // background

  drawText(playerScore, canvas.width / 4, 50, "#0ff");
  drawText(aiScore, (canvas.width * 3) / 4, 50, "#f0f");

  drawRect(0, playerY, paddleWidth, paddleHeight, "#0ff"); // player
  drawRect(canvas.width - paddleWidth, aiY, paddleWidth, paddleHeight, "#f0f"); // AI
  drawCircle(ballX, ballY, ballSize, "#fff"); // ball

  if (isGameOver) {
    drawText("GAME OVER", canvas.width / 2 - 120, canvas.height / 2, "#ff0066", "40px");
    drawText("Click to Restart", canvas.width / 2 - 140, canvas.height / 2 + 50, "#ccc", "20px");
  }
}

function move() {
  if (isGameOver) return;

  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // bounce off top and bottom
  if (ballY <= 0 || ballY >= canvas.height) ballSpeedY *= -1;

  // player paddle
  if (
    ballX <= paddleWidth &&
    ballY > playerY &&
    ballY < playerY + paddleHeight
  ) {
    ballSpeedX *= -1;
  }

  // AI paddle
  if (
    ballX >= canvas.width - paddleWidth &&
    ballY > aiY &&
    ballY < aiY + paddleHeight
  ) {
    ballSpeedX *= -1;
  }

  // score
  if (ballX < 0) {
    aiScore++;
    resetBall();
  } else if (ballX > canvas.width) {
    playerScore++;
    resetBall();
  }

  // AI movement
  aiY += ((ballY - (aiY + paddleHeight / 2)) * 0.1);

  if (playerScore >= 5 || aiScore >= 5) {
    isGameOver = true;
  }
}

function update() {
  move();
  draw();
}

document.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  playerY = e.clientY - rect.top - paddleHeight / 2;
});

canvas.addEventListener("click", () => {
  if (isGameOver) {
    playerScore = 0;
    aiScore = 0;
    isGameOver = false;
    resetBall();
  }
});

setInterval(update, 1000 / 60);