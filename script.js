function computerPlay() {
    let play = ['rock', 'paper', 'scissors'];
    let choice = play[Math.floor(Math.random() * play.length)]
    return choice;
}

let playerScore = 0;
let computerScore = 0;

function game() {
   while (playerScore + computerScore < 5) {
       
function playRound(playerSelection, computerSelection) {
   if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
       return "You lose! Paper beats Rock!"
   } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
       return "You win! Rock beats Scissors!"
   } else if ((playerSelection === 'rock') && (computerSelection === 'rock')) {
       return "Tie! Pick again!"
   } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
       return "You lose! Paper beats Scissors!"
   } else if ((playerSelection === 'scissors') && (computerSelection === 'scissors')) {
       return "Tie! Pick again!"
   } else if ((playerSelection === 'scissors') && (computerSelection === 'rock')) {
       return "You lose! Rock beats Scissors!"
   } else if ((playerSelection === 'paper') && (computerSelection === 'paper')) {
       return "Tie! Pick again!"
   } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) {
       return "You win! Paper beats Scissors!"
   } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
       return "You win! Paper beats Rock!"
   }
}

let playerSelection = prompt('Choose: Rock. Paper. Scissors.').toLowerCase();
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))
}
}

game();