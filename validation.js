const prompt = require("prompt-sync")();
let computerSelection = computerPlay();
let playerSelection = prompt("Make your move: Rock ☄️ | Paper 📄 | Scissors ✂️ ").toLowerCase();

function computerPlay() {
   let computerSelection =  Math.floor(Math.random(1)*10);
   if (computerSelection <= 1) { 
        computerSelection = "rock";
   } else if(computerSelection <= 2) {
        computerSelection = "paper";
   } else (computerSelection <= 3) 
       computerSelection = "scissors";
   }



