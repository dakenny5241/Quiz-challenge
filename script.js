// JavaScript code
let score = 0;
/let currentQuestion = 0;
let questions = [
  {
    question: 'What is the syntax for creating a function in JavaScript?',
    answers: [
      'function: myFunction()',
      'function = myFunction()',
      'function myFunction()',
      'myFunction() function'
    ],
    correctAnswer: 'function myFunction()'
  },
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    answers: [
      '<script>',
      '<javascript>',
      '<js>',
      '<scripting>'
    ],
    correctAnswer: '<script>'
  },
  {
    question: 'How do you create a variable in JavaScript?',
    answers: [
      'variable carName;',
      'v carName;',
      'var carName;',
      'let carName;'
    ],
    correctAnswer: 'var carName;'
  }
];

function startQuiz() {
  document.getElementById("start").style.display = "none";
  document.getElementById("question-container").style.display = "block";
  showQuestion();
  startTimer();
}

function showQuestion() {
  document.getElementById("question").innerHTML = questions[currentQuestion].question;
  let answers = document.getElementsByClassName("answer");
  for (let i = 0; i < answers.length; i++) {
    answers[i].innerHTML = questions[currentQuestion].answers[i];
  }
}

function startTimer() {
  let timeLeft = 10;
  let timer = setInterval(function() {
    document.getElementById("time").innerHTML = timeLeft;
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

function checkAnswer(answer) {
  if (answer == questions[currentQuestion].correctAnswer) {
    score++;
  } else {
    timeLeft -= 10;
  }
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    endQuiz();
  } else {
    showQuestion();
  }
}

function endQuiz() {
  document.getElementById("question-container").style.display = "none";
  document.getElementById("end-game").style.display = "block";
  document.getElementById("end-score-value").innerHTML = score;
}

document.getElementById("start").addEventListener("click", startQuiz);
let answers = document.getElementsByClassName("answer");
for (let i = 0; i < answers.length; i++) {
  answers[i].addEventListener("click", function() {
    checkAnswer(this.innerHTML);
  });
}

document.getElementById("submit-score").addEventListener("click", function() {
  let name = document.getElementById("name").value;
  let highScores = localStorage.getItem("highScores");
  if (highScores === null) {
    highScores = [];
  } else {
    highScores = JSON.parse(highScores);
  }
  let newScore = { name: name, score: score };
  highScores.push(newScore);
  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.href = "highscores.html";
});
``` 