let score = 0;

const fallingText = document.getElementById('falling-text');
const gameOver = document.getElementById('game-over');
const scoreValue = document.getElementById('score-value');

fallingText.addEventListener('animationend', function() {
    gameOver.classList.remove('hidden');
});

function checkAnswer(answer) {
      const correctAnswer = questions[currentIndex].answers[0];
      if (answer === correctAnswer) {
          alert('Correct! ' + correctAnswer + ' is the right answer.');
          score++;
      } else {
          alert('Incorrect! The correct answer is ' + correctAnswer + '.');
      }
      nextQuestion();
  }

function nextQuestion() {
      currentIndex = Math.floor(Math.random() * questions.length); // เลือกคำถามที่สุ่มมาใหม่
      displayQuestion();
  }

function resetGame() {
    score = 0;
    scoreValue.textContent = score;
    nextQuestion();
}
function startGame() {
      document.getElementById('start-btn').classList.add('hidden'); // ซ่อนปุ่ม Start
      document.getElementById('falling-text').classList.remove('hidden'); // แสดงคำถาม
      document.getElementById('options').classList.remove('hidden'); // แสดงตัวเลือก
      document.getElementById('score').classList.remove('hidden'); // แสดงคะแนน
      nextQuestion(); // เริ่มเกมด้วยการแสดงคำถามใหม่
  }