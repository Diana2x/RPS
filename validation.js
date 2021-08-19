const prompt = require("prompt-sync")();

// Computer choice function

function computerPlay() {
   let computerSelection =  Math.floor(Math.random(1,3)*10);
   if (computerSelection <= 1) { 
        return "rock";
   } else if(computerSelection <= 2) {
        return "paper";
   } else
        return "scissors";
   }

// Single round function 

 function playRound(){
     let result = " ";
     let playerSelection = prompt(" | Make your move: Rock ☄️ | Paper 📄 | Scissors ✂️ | :  ").toLowerCase();
     let computerSelection = computerPlay();

      if (computerSelection === "rock" && playerSelection === "scissors") {
               result =  "You lose! Rock beats scissors";
          }else if (computerSelection === "paper" && playerSelection === "rock"){
               result =  "You lose! Paper beats rock";
          }else if (computerSelection === "scissors" && playerSelection ==="paper"){
               result =  "You lose! scissors beats paper";
          }else if (computerSelection === "scissors" && playerSelection === "rock"){
               result = "You win! rock beats scissors";
          }else if (computerSelection === "rock" && playerSelection === "paper"){
               result = "You win! paper beats rock";
          }else if(computerSelection === "paper" && playerSelection === "scissors") {
               result = "You win! scissors beats paper"
          }else {
               result = "it's a tie";
          }
          console.log(result);
}

//Play 5 round function
function game() {
     for (i= 0; i < 5; i++){
          playRound();
     }
}
game();


