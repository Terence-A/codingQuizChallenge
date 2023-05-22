// bring over elements
const startBtn = document.querySelector("#start-btn");

// set variables
let timer = 76;
let gamesRemaining = 6;
let questionNum = 0;

const questions = [
  {
    question: 'How do you write "hello world" to the console?',
    answers: [
      { a0: '1. console("hello world")', correct: false },
      { a1: '2. print("hello world")', correct: false },
      { a2: '3. console.log("hello world")', correct: true },
      { a3: '4. p:("hello world")', correct: false },
    ],
  },
  {
    question: "Which element do you put Javascript in ?",
    answers: [
      { a0: "1. <script>", correct: true },
      { a1: "2. <var>", correct: false },
      { a2: "3. <link>", correct: false },
      { a3: "4. <section>", correct: false },
    ],
  },
  {
    question: "Which expression adds 1 to variable x = 1; ?",
    answers: [
      { a0: "1. x + 1;", correct: false },
      { a1: "2. x++; ", correct: false },
      { a2: "3. x += 1 ", correct: false },
      { a3: "4. all the above", correct: true },
    ],
  },
  {
    question: "What is a correct way to declare a variable ?",
    answers: [
      { a0: "1. var = 6;", correct: false },
      { a1: '2. let == "John"; ', correct: false },
      { a2: "3. let x = 10; ", correct: true },
      { a3: "4. all the above", correct: false },
    ],
  },
  {
    question: "How many else statements can you have in an if statement ? ",
    answers: [
      { a0: "1. As many as you like", correct: false },
      { a1: "2. None; ", correct: false },
      { a2: "3. Only one", correct: true },
      { a3: "4. Only two", correct: false },
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
    if (timer === 70 || gamesRemaining === 0) {
      clearInterval(countdownInterval);
    }
    console.log(timer);
  }, 1000);
}
startBtn.addEventListener("click", function () {
  setTimer();
});

// select answer and populate another question
// ---  if incorrect 10 seconds minus on clock
function selectAnswer() {}

// game over screen
// able to save initials and score
