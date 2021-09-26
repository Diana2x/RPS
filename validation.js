
// User Choice by Image click input 
document.querySelectorAll('img.gameImg').forEach((element) =>{
    element.addEventListener('click', event => {
        let userChoice = event.currentTarget.id;
        return userChoice; 
    })
})
console.log(userChoice);


//Computer Choice 

function computerPlay() {
    let computerChoice = "";
    let computerSelection = Math.floor(Math.random(1,3)*10);
        if (computerSelection <= 1) {
            computerChoice = "rock";
        } else if (computerSelection <= 2){
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
    return computerChoice;   
};


function playRound(){
    let result = "";
    let playerSelection = userChoice; 
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
   return result;
}
playRound();
console.log(playRound());






