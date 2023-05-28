// bring over elements
const startBtn = document.querySelector("#start-btn");
const startSec = document.querySelector(".start-sec");
const questionSec = document.querySelector(".question-sec");
const questionHeader = document.querySelector("#question-header");
const timeCountdown = document.querySelector("#time-countdown");
const btnList = document.querySelector("#btn-list");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const btn4 = document.querySelector("#btn-4");
const correct = document.querySelector("#correct");
const wrong = document.querySelector("#wrong");
const endGameScreen = document.querySelector(".end-game");
const submitBtn = document.querySelector("#submit-btn");
const inputBox = document.querySelector("#input-box");
const highScoresBtn = document.querySelector("#high-scores");
const highScoreSec = document.querySelector("#high-score-sec");
const highScoreContainer = document.querySelector(".high-score-container");
const showHighScores = document.querySelector("#show-high-scores");
const clearHighScores = document.querySelector("#clear-high-scores");
const finalScore = document.querySelector("#final-score");
const topNav = document.querySelector("#top-nav");
const endGameHeader = document.querySelector("#end-game-header");
const mainSec = document.querySelector("#main-sec");
const goBackBtn = document.querySelector("#go-back-btn");

// set variables

let timer = 75;
let questionsRemaining = 5;
let questionNum = 0;
let buttonsArr = [btn1, btn2, btn3, btn4];
let userInitials = "";
let userScore = "";
showHighScores.textContent = `1. ${localStorage.getItem(
  "userInitials"
)} - ${localStorage.getItem("userScore")}`;
questionSec.classList.remove("question-sec");
endGameScreen.classList.remove("end-game");

function resetVariables() {
  timer = 75;
  questionsRemaining = 5;
  questionNum = 0;
  buttonsArr = [btn1, btn2, btn3, btn4];
}

// quiz questions and possible answers
const questions = [
  {
    question: 'How do you write "hello world" to the console?',
    answers: [
      { ans: '1. console("hello world")', correct: false },
      { ans: '2. print("hello world")', correct: false },
      { ans: '3. console.log("hello world")', correct: true },
      { ans: '4. p:("hello world")', correct: false },
    ],
  },
  {
    question: "Which element do you put Javascript in ?",
    answers: [
      { ans: "1. <script>", correct: true },
      { ans: "2. <var>", correct: false },
      { ans: "3. <link>", correct: false },
      { ans: "4. <section>", correct: false },
    ],
  },
  {
    question: "Which expression adds 1 to variable x = 1; ?",
    answers: [
      { ans: "1. x + 1;", correct: false },
      { ans: "2. x++; ", correct: false },
      { ans: "3. x += 1 ", correct: false },
      { ans: "4. all the above", correct: true },
    ],
  },
  {
    question: "What is a correct way to declare a variable ?",
    answers: [
      { ans: "1. var = 6;", correct: false },
      { ans: '2. let == "John"; ', correct: false },
      { ans: "3. let x = 10; ", correct: true },
      { ans: "4. all the above", correct: false },
    ],
  },
  {
    question: "How many else statements can you have in an if statement ? ",
    answers: [
      { ans: "1. As many as you like", correct: false },
      { ans: "2. None; ", correct: false },
      { ans: "3. Only one", correct: true },
      { ans: "4. Only two", correct: false },
    ],
  },
];

// starts timer and sets first question
// --- ends when timer reaches 0 or all questions answered
function setTimer() {
  const countdownInterval = setInterval(function () {
    timer--;
    if (timer <= 0 || questionsRemaining === 0) {
      clearInterval(countdownInterval);
      endGameScreen.classList.add("end-game");
      endGame();
    }
    timeCountdown.textContent = `Time: ${timer}`;
  }, 1000);
}

// get question
// ---  if incorrect 10 seconds minus on clock
function getQuestion() {
  questionHeader.textContent = questions[questionNum].question; //show question
  for (let i = 0; i < questions[questionNum].answers.length; i++) {
    buttonsArr[i].textContent = questions[questionNum].answers[i].ans; //get buttons
  }
}
// choose answer an check quiz starts here
function chooseBtn() {
  for (let i = 0; i < buttonsArr.length; i++) {
    buttonsArr[i].addEventListener("click", function () {
      if (questions[questionNum].answers[i].correct) {
        questionNum++;
        wrong.classList.add("hide");
        correct.classList.remove("hide");
        questionsRemaining--;
      } else {
        timer -= 10;
        correct.classList.add("hide");
        wrong.classList.remove("hide");
      }
      // console.log(gamesRemaining);
      if (questionsRemaining === 0) {
        endGameScreen.classList.add("end-game");
        endGame();
      } else {
        getQuestion();
      }
    });
  }
}
chooseBtn();
// all done page (enter initials)
function endGame() {
  questionSec.classList.remove("question-sec");
  wrong.classList.remove("wrong");
  wrong.classList.add("hide");
  correct.classList.remove("correct");
  correct.classList.add("hide");
  finalScore.textContent = `Your final score is ${timer}`;

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    localStorage.setItem("userInitials", inputBox.value);
    localStorage.setItem("userScore", timer);
    showHighScores.textContent = "0";
    highScores();
  });
}

// high scores page
function highScores() {
  highScoreSec.classList.remove("hide");
  topNav.classList.add("hide");
  mainSec.classList.add("hide");
  if (
    showHighScores.textContent == "1. null - null" ||
    showHighScores.textContent === "No High Scores!" ||
    showHighScores.textContent === ""
  ) {
    console.log("true");
    showHighScores.textContent = "No High Scores!";
  } else {
    showHighScores.textContent = `1. ${localStorage.getItem(
      "userInitials"
    )} - ${localStorage.getItem("userScore")}`;
  }
}

// go back button
goBackBtn.addEventListener("click", function () {
  resetVariables();
  highScoreSec.classList.add("hide"); // hiding highscore
  topNav.classList.remove("hide"); //showing nav
  mainSec.classList.remove("hide");
  endGameScreen.classList.remove("end-game");
  startSec.classList.add("start-sec");
  timeCountdown.textContent = `Time: ${timer}`;
  // clearInterval(countdownInterval);
  // getQuestion();
});

// clear high scores button
clearHighScores.addEventListener("click", function (event) {
  event.stopPropagation();
  localStorage.removeItem("userInitials");
  localStorage.removeItem("userScore");
  showHighScores.textContent = "";
});

// view high scores button
highScoresBtn.addEventListener("click", function () {
  questionSec.classList.remove("question-sec");
  correct.classList.add("hide");
  wrong.classList.add("hide");
  highScores();
});

// start button at beginning
startBtn.addEventListener("click", function (event) {
  // event.stopPropagation();
  resetVariables();
  questionSec.classList.add("question-sec");
  startSec.classList.remove("start-sec");
  getQuestion();
  setTimer();
});
