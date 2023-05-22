// bring over elements
const startBtn = document.querySelector("#start-btn");
const startSec = document.querySelector("#start-sec");
const questionSec = document.querySelector("#question-sec");
const questionHeader = document.querySelector("#question-header");
const timeCountdown = document.querySelector("#time-countdown");
const btnList = document.querySelector("#btn-list");

// set variables
let timer = 76;
let gamesRemaining = 6;
let questionNum = 0;

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

// function selectQuestion(numOfQestion, numOfAnswer) {
//   console.log(questions[numOfQestion].answers[numOfAnswer].correct);
// }

// selectQuestion(0, 2);
// console.log(questions[0].answers[2].correct);

// starts timer and sets first question
// --- ends when timer reaches 0 or all questions answered
function setTimer() {
  const countdownInterval = setInterval(function () {
    timer--;
    if (timer === 0 || gamesRemaining === 0) {
      clearInterval(countdownInterval);
    }
    timeCountdown.textContent = `Time: ${timer}`;
  }, 1000);
}

// get question
// ---  if incorrect 10 seconds minus on clock
function getQuestion() {
  // show question
  questionHeader.textContent = questions[questionNum].question;
  // get buttons
  for (let i = 0; i < questions[questionNum].answers.length; i++) {
    let quesBtn = document.createElement("li", "button");
    quesBtn.classList.add("btn", "startSec");
    quesBtn.textContent = questions[questionNum].answers[i].ans;
    console.log(quesBtn);
    console.log(questionNum);
    btnList.append(quesBtn);
  }
  questionNum++;
}

startBtn.addEventListener("click", function () {
  setTimer();
  startSec.classList.remove("start-sec");
  getQuestion();
});

// game over screen
// able to save initials and score
