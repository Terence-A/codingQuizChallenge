// bring over elements
const startBtn = document.querySelector("#start-btn");
const startSec = document.querySelector("#start-sec");
const questionSec = document.querySelector("#question-sec");
const questionHeader = document.querySelector("#question-header");
const timeCountdown = document.querySelector("#time-countdown");
const btnList = document.querySelector("#btn-list");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const btn4 = document.querySelector("#btn-4");
const correct = document.querySelector("#correct");
const wrong = document.querySelector("#wrong");
const endGameScreen = document.querySelector("#end-game");
const submitBtn = document.querySelector("#submit-btn");
const inputBox = document.querySelector("#input-box");
const finalScore = document.querySelector("#final-score");

// set variables
let timer = 76;
let questionsRemaining = 5;
let questionNum = 0;
let buttonsArr = [btn1, btn2, btn3, btn4];
btn1.classList.remove("btn");
btn2.classList.remove("btn");
btn3.classList.remove("btn");
btn4.classList.remove("btn");
endGameScreen.classList.add("hide");
endGameScreen.classList.remove("end-game");

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
    if (timer === 0 || questionsRemaining === 0) {
      clearInterval(countdownInterval);
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

// choose answer an check
function chooseBtn() {
  for (let i = 0; i < buttonsArr.length; i++) {
    buttonsArr[i].addEventListener("click", function () {
      // console.log(i + "btn pressed");
      // console.log(questionNum + "quesnum");

      if (questions[questionNum].answers[i].correct) {
        console.log("true");
        questionNum++;
        wrong.classList.add("hide");
        correct.classList.remove("hide");
        questionsRemaining--;
        // console.log(gamesRemaining);
        if (questionsRemaining === 0) {
          endGameScreen.classList.add("end-game");
          endGame();
        } else {
          getQuestion();
        }
      } else {
        console.log("false");
        timer -= 10;
        correct.classList.add("hide");
        wrong.classList.remove("hide");
        console.log(timer);
      }
    });
  }
}

chooseBtn();

function endGame() {
  finalScore.textContent = `Your final score is ${timer - 1}`;
  questionHeader.classList.add("hide");
  btnList.classList.add("hide");
  btnList.classList.remove("btn-list");
  btn1.classList.add("hide");
  btn2.classList.add("hide");
  btn3.classList.add("hide");
  btn4.classList.add("hide");
  correct.classList.remove("correct");
  correct.classList.add("hide");
  wrong.classList.remove("wrong");
  wrong.classList.add("hide");
  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(inputBox.value);
  });
}
startBtn.addEventListener("click", function () {
  setTimer();
  startSec.classList.remove("start-sec");
  btn1.classList.add("btn");
  btn2.classList.add("btn");
  btn3.classList.add("btn");
  btn4.classList.add("btn");
  getQuestion();
});

// game over screen
// able to save initials and score
