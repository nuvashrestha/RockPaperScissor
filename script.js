// rock, paper, scissors game

// score variables (step 4)
let humanScore = 0;
let computerScore = 0;

// function to get the computer choice by random (step 2)
function getComputerChoice() {
    let array = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * (array.length));
    
    console.log(randomNum);
    
    return array[randomNum];
}

// function to get the human choice (step 3)
function getHumanChoice(){
    let userInput = prompt("What will it be? Rock, Paper, or Scissors?");

    console.log(userInput);
    return userInput;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock" && computerChoice == "scissors")
    {
        console.log("You win! Rock beats scissors");
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);