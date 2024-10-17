let playerChoice;
let computer;
let result;
const score = JSON.parse(localStorage.getItem('score'));

document.getElementById("rock").addEventListener("click", function () {
  computer = getComputerChoice();
  detCom = `<img class = "detResult" src="./img/${computer}.png">`;
  playerChoice = this.value;
  result = determineWinner(playerChoice, computer);
  document.getElementById("Result").innerHTML = `You selected <img class = "detResult" src="./img/${playerChoice}.png"> , Computer selected ${detCom} , You ${result} !`;
  handleGameResult(result);
  updateResult();
});
document.getElementById("paper").addEventListener("click", function () {
  computer = getComputerChoice();
  detCom = `<img class = "detResult" src="./img/${computer}.png">`;
  playerChoice = this.value;
  result = determineWinner(playerChoice, computer);
  document.getElementById("Result").innerHTML = `You selected <img class = "detResult" src="./img/${playerChoice}.png"> , Computer selected ${detCom} , You ${result} !`;
  handleGameResult(result);
  updateResult();
});
document.getElementById("scissors").addEventListener("click", function () {
  computer = getComputerChoice();
  detCom = `<img class = "detResult" src="./img/${computer}.png">`;
  playerChoice = this.value;
  result = determineWinner(playerChoice, computer);
  document.getElementById("Result").innerHTML = `You selected <img class = "detResult" src="./img/${playerChoice}.png"> , Computer selected ${detCom} , You ${result} !`;
  handleGameResult(result);
  updateResult();
});
document.getElementById("reset").addEventListener("click",function (){
  score.draw = 0;
  score.win = 0;
  score.lose = 0;
  document.getElementById("Result").innerHTML = "";
  updateResult();
})

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(player, computer) {
  if (player === computer) {
    return "Draw";
  } else if (
    (player === "rock" && computer === "paper") || (player === "paper" && computer === "scissors")|| (player === "scissors" && computer === "rock")
  ) {
    return "Lose";
  } else {
    return "Win";
  }
}
function updateResult() {
  document.getElementById("draw").textContent = score.draw;
  document.getElementById("win").textContent = score.win;
  document.getElementById("lose").textContent = score.lose;
  localStorage.setItem('score',JSON.stringify(score));
}
function handleGameResult(result) {
  if (result === "Draw") {
    score.draw++;
  } else if (result === "Win") {
    score.win++;
  } else {
    score.lose++;
  }
  localStorage.setItem('score' , JSON.stringify(score));
}
updateResult();