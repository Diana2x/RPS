function playRound(playerSelection){
     let computerSelection = randomComputer(); 
     if (computerSelection === "rock" && playerSelection === "scissors") {
          document.querySelector('.result').innerText = "You lose! Rock beats scissors";
    }else if (computerSelection === "paper" && playerSelection === "rock"){
          document.querySelector('.result').innerText = "You lose! Paper beats rock";
    }else if (computerSelection === "scissors" && playerSelection ==="paper"){
          document.querySelector('.result').innerText =  "You lose! scissors beats paper";
    }else if (computerSelection === "scissors" && playerSelection === "rock"){
          document.querySelector('.result').innerText = "You win! rock beats scissors";
    }else if (computerSelection === "rock" && playerSelection === "paper"){
          document.querySelector('.result').innerText ="You win! paper beats rock";
    }else if(computerSelection === "paper" && playerSelection === "scissors") {
          document.querySelector('.result').innerText = "You win! scissors beats paper"
    }else {
          document.querySelector('.result').innerText  = "it's a tie";
    } 
    return result;
 }


//Computer Choice 
function randomComputer(){
     let options = ['rock', 'paper', 'scissors']
     return (options[Math.floor(Math.random() *options.length)])
 }

// User Choice by Image click input 

function initialize(){
     const $options = document.querySelectorAll('.gameImg');
     $options.forEach(option => option.addEventListener('click', (e) => 
     playRound(e.target.id)));
}

initialize();





