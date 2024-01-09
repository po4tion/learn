const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, "").toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  }

  if (randomValue < 0.67) {
    return PAPER;
  }

  return SCISSORS;
};

const getWinner = (computerChoice, playerChoice = DEFAULT_USER_CHOICE) => {
  if (computerChoice === playerChoice) {
    return RESULT_DRAW;
  }

  if (
    (computerChoice === ROCK && playerChoice === PAPER) ||
    (computerChoice === PAPER && playerChoice === SCISSORS) ||
    (computerChoice === SCISSORS && playerChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  }

  return RESULT_COMPUTER_WINS;
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;
  console.log("Game is starting...");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();

  let winner;

  if (playerSelection) {
    winner = getWinner(computerSelection, playerSelection);
  } else {
    winner = getWinner(computerSelection);
  }

  let message = `You picked ${playerSelection}, computer picked ${computerSelection} `;

  if (winner === RESULT_DRAW) {
    message += "had a draw.";
  } else if (winner === RESULT_PLAYER_WINS) {
    message += "won.";
  } else {
    message += "lost.";
  }

  alert(message);
});

// rest parameters
// rest 연산은 항상 리스트의 마지막에 위치해야 한다. 뒤의 매개변수는 절대로 전달되지 않기 때문이다.
// (X) const sumUp = (...numbers, another) => {}
const sumUp = (...numbers) => {
  let sum = 0;

  for (const num of numbers) {
    sum += num;
  }

  return sum;
};

console.log(sumUp(1, 2, 3, 4, 5));

const subtractUp = function () {
  let sum = 0;

  for (const num of arguments) {
    sum -= num;
  }

  return sum;
};

console.log(subtractUp(1, 2, 3, 4, 5));
