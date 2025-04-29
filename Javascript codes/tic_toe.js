// script.js
document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");
  const status = document.getElementById("status");
  const restartBtn = document.getElementById("restartBtn");

  let currentPlayer = "X";
  let cells = Array(9).fill(null);
  let gameActive = true;

  function renderBoard() {
    board.innerHTML = "";
    cells.forEach((cell, index) => {
      const cellDiv = document.createElement("div");
      cellDiv.classList.add("cell");
      cellDiv.dataset.index = index;
      cellDiv.textContent = cell;
      board.appendChild(cellDiv);
    });
  }

  function checkWinner() {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let condition of winConditions) {
      const [a, b, c] = condition;
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        gameActive = false;
        return cells[a];
      }
    }

    if (!cells.includes(null)) {
      gameActive = false;
      return "Draw";
    }

    return null;
  }

  function handleClick(e) {
    const index = e.target.dataset.index;
    if (!gameActive || cells[index]) return;

    cells[index] = currentPlayer;
    renderBoard();

    const winner = checkWinner();
    if (winner) {
      status.textContent = winner === "Draw" ? "It's a Draw!" : `${winner} wins!`;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      status.textContent = `${currentPlayer}'s Turn`;
    }
  }

  function restartGame() {
    cells = Array(9).fill(null);
    currentPlayer = "X";
    gameActive = true;
    status.textContent = "X's Turn";
    renderBoard();
  }

  board.addEventListener("click", handleClick);
  restartBtn.addEventListener("click", restartGame);

  restartGame();
});