let userScore = 0;
let computerScore = 0;


function playRound(playerSelection){
     let computerSelection = randomComputer(); 
     if (computerSelection === "rock" && playerSelection === "scissors") {
          document.querySelector('.result').innerText = "You lose! Rock beats scissors";
          computerScore++;
    }else if (computerSelection === "paper" && playerSelection === "rock"){
          document.querySelector('.result').innerText = "You lose! Paper beats rock";
          computerScore++;
    }else if (computerSelection === "scissors" && playerSelection ==="paper"){
          document.querySelector('.result').innerText =  "You lose! scissors beats paper";
          computerScore++;
    }else if (computerSelection === "scissors" && playerSelection === "rock"){
          document.querySelector('.result').innerText = "You win! rock beats scissors";
          userScore++;
    }else if (computerSelection === "rock" && playerSelection === "paper"){
          document.querySelector('.result').innerText ="You win! paper beats rock";
          userScore++;
    }else if(computerSelection === "paper" && playerSelection === "scissors") {
          document.querySelector('.result').innerText = "You win! scissors beats paper"
          userScore++;
    }else {
          document.querySelector('.result').innerText  = "it's a tie";
          userScore + 0;
          computerScore + 0;
    } 
    updateScore(userScore, computerScore);
 }


 function updateScore(userScore, computerScore){
       const $result = document.querySelector(".score p");
       $result.innerText = `You: ${userScore} -  Computer: ${computerScore}`
       if( userScore === 5 || computerScore === 5){
            setTimeout(() => endGame(userScore, computerScore), 300);
       }
 }

 function endGame(userScore, computerScore){
       const $resetButton = document.querySelector('.btn');
       const $gameImages = document.querySelector('.main-game');
       $gameImages.classList.add('hidden');
       const $outcome = document.querySelector('.result');
       $outcome.classList.add('margin');
       const $score = document.querySelector(".score p");
       $score.style.fontSize = "xx-large";
       const $header = document.querySelector('.header'); 
       $header.classList.add('hidden');

       if(userScore > computerScore){
             $outcome.innerText = " 🏆 👏 You win! you defeated the computer! 👏 🏆"; 
       } else {
             $outcome.innerText = "🖥️You Lost! The Computer takes this round! 🖥️";
       }
      
      $resetButton.classList.remove('hidden');

      $resetButton.addEventListener('click', () => restartGame());

 };


 function restartGame(){
      location.reload();
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



