let currentAnswer = 0;

function generatePuzzle() {
  const num1 = Math.floor(Math.random() * 50);
  const num2 = Math.floor(Math.random() * 50);
  const operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];

  let questionText = `${num1} ${operator} ${num2}`;
  currentAnswer = eval(questionText);
  document.getElementById("question").textContent = `What is ${questionText} ?`;
  document.getElementById("answer").value = "";
  document.getElementById("result").textContent = "";
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  if (userAnswer === currentAnswer) {
    document.getElementById("result").textContent = "✅ Correct!";
  } else {
    document.getElementById("result").textContent = `❌ Wrong! Correct answer: ${currentAnswer}`;
  }
}

window.onload = generatePuzzle;
