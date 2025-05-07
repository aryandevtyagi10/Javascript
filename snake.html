<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Snake Game - Upgraded</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

    html, body {
      height: 100%;
      margin: 0;
      background: black;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: 'Press Start 2P', cursive;
      color: white;
    }

    canvas {
      border: 2px solid white;
      margin-top: 20px;
    }

    #scoreboard {
      margin-top: 10px;
      font-size: 16px;
      text-align: center;
    }

    #gameOver, #paused {
      display: none;
      margin-top: 10px;
      font-size: 14px;
    }

    #gameOver { color: red; }
    #paused { color: yellow; }

    button {
      margin-top: 10px;
      font-family: 'Press Start 2P', cursive;
      background: white;
      color: black;
      border: none;
      padding: 10px 20px;
      font-size: 14px;
      cursor: pointer;
    }
    button:hover {
      background: lightgray;
    }
  </style>
</head>
<body>

<div id="scoreboard">
  <div>Score: <span id="score">0</span></div>
  <div>High Score: <span id="highScore">0</span></div>
</div>

<canvas id="game" width="400" height="400"></canvas>

<div id="gameOver">GAME OVER</div>
<div id="paused">PAUSED</div>
<button id="restartBtn" style="display:none;">Restart Game</button>

<script>
// Setup canvas and context
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score');
const highScoreDisplay = document.getElementById('highScore');
const gameOverDisplay = document.getElementById('gameOver');
const pausedDisplay = document.getElementById('paused');
const restartBtn = document.getElementById('restartBtn');

// Game variables
const gridSize = 16;
let frameCount = 0;
let snakeSpeed = 4;
let score = 0;
let highScore = localStorage.getItem('snakeHighScore') || 0;
let isGameOver = false;
let isPaused = false;
let powerUpActive = false;
let applesEaten = 0;

// Sound Effects
const eatSound = new Audio('https://www.soundjay.com/button/beep-07.wav');
const crashSound = new Audio('https://www.soundjay.com/button/beep-10.wav');

// Snake setup
const snake = {
  x: 160,
  y: 160,
  dx: gridSize,
  dy: 0,
  cells: [],
  maxCells: 4
};

// Apple setup
const apple = {
  x: 320,
  y: 320,
  color: 'red',
  isPowerUp: false
};

// Utility functions
function getRandomGridPosition() {
  return Math.floor(Math.random() * 25) * gridSize;
}

function getRandomAppleColor() {
  const normalColors = ['red', 'yellow', 'orange', 'pink'];
  return normalColors[Math.floor(Math.random() * normalColors.length)];
}

function spawnApple() {
  apple.x = getRandomGridPosition();
  apple.y = getRandomGridPosition();
  
  // 20% chance to spawn a Power-up Apple
  if (Math.random() < 0.2) {
    apple.color = 'cyan'; // Power-Up color
    apple.isPowerUp = true;
  } else {
    apple.color = getRandomAppleColor();
    apple.isPowerUp = false;
  }
}

function resetGame() {
  snake.x = 160;
  snake.y = 160;
  snake.cells = [];
  snake.maxCells = 4;
  snake.dx = gridSize;
  snake.dy = 0;
  score = 0;
  applesEaten = 0;
  snakeSpeed = 4;
  spawnApple();
  isGameOver = false;
  isPaused = false;
  gameOverDisplay.style.display = "none";
  pausedDisplay.style.display = "none";
  restartBtn.style.display = "none";
  updateScores();
}

function updateScores() {
  scoreDisplay.textContent = score;
  highScoreDisplay.textContent = highScore;
}

function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  snake.x += snake.dx;
  snake.y += snake.dy;

  if (snake.x < 0) snake.x = canvas.width - gridSize;
  else if (snake.x >= canvas.width) snake.x = 0;

  if (snake.y < 0) snake.y = canvas.height - gridSize;
  else if (snake.y >= canvas.height) snake.y = 0;

  snake.cells.unshift({ x: snake.x, y: snake.y });

  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }

  ctx.fillStyle = apple.color;
  ctx.fillRect(apple.x, apple.y, gridSize-1, gridSize-1);

  ctx.fillStyle = 'lime';
  snake.cells.forEach((cell, index) => {
    ctx.fillRect(cell.x, cell.y, gridSize-1, gridSize-1);

    // Snake eats apple
    if (cell.x === apple.x && cell.y === apple.y) {
      eatSound.play();
      if (apple.isPowerUp) {
        snake.maxCells += 2;
        score += 2;
      } else {
        snake.maxCells++;
        score++;
      }
      applesEaten++;
      spawnApple();
      updateScores();

      // Speed up every 5 apples
      if (applesEaten % 5 === 0 && snakeSpeed > 1) {
        snakeSpeed--;
      }
    }

    // Collision with self
    for (let i = index + 1; i < snake.cells.length; i++) {
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        isGameOver = true;
        crashSound.play();
        gameOverDisplay.style.display = "block";
        restartBtn.style.display = "block";
        if (score > highScore) {
          highScore = score;
          localStorage.setItem('snakeHighScore', highScore);
        }
      }
    }
  });
}

function gameLoop() {
  if (isGameOver || isPaused) return;

  requestAnimationFrame(gameLoop);

  if (++frameCount < snakeSpeed) return;
  frameCount = 0;

  drawGame();
}

// Event Listeners
document.addEventListener('keydown', (e) => {
  const { key } = e;

  if ((key === 'ArrowLeft' || key === 'a') && snake.dx === 0) {
    snake.dx = -gridSize;
    snake.dy = 0;
  } else if ((key === 'ArrowUp' || key === 'w') && snake.dy === 0) {
    snake.dy = -gridSize;
    snake.dx = 0;
  } else if ((key === 'ArrowRight' || key === 'd') && snake.dx === 0) {
    snake.dx = gridSize;
    snake.dy = 0;
  } else if ((key === 'ArrowDown' || key === 's') && snake.dy === 0) {
    snake.dy = gridSize;
    snake.dx = 0;
  } else if (key === ' ' || key === 'Spacebar') {
    isPaused = !isPaused;
    pausedDisplay.style.display = isPaused ? "block" : "none";
    if (!isPaused) {
      requestAnimationFrame(gameLoop);
    }
  }
});

restartBtn.addEventListener('click', () => {
  resetGame();
  requestAnimationFrame(gameLoop);
});

// Initialize Game
updateScores();
spawnApple();
requestAnimationFrame(gameLoop);
</script>

</body>
</html>