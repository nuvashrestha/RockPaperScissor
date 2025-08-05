// rock, paper, scissors game

// score variables (step 4) 

let humanScore = 0;
let computerScore = 0;

// function to get the computer choice by random (step 2)
function getComputerChoice() {
    let array = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * (array.length));

    return array[randomNum];
}

// function to get the human choice (step 3)
function getHumanChoice() {
    let userInput = prompt("What will it be? Rock, Paper, or Scissors?");

    return userInput.toLowerCase();
}

// step 5
function playRound(humanChoice, computerChoice) {
    console.log(`Your choice: ${humanChoice}`);
    console.log(`Computer's choice: ${computerChoice}`);

    if (humanChoice == computerChoice) {
        console.log("Its a tie!");
    }

    else if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            console.log("You win! Rock beats scissors");
            humanScore++;
        }
        else if (computerChoice == "paper") {
            console.log("You lose! Paper beats rock");
            computerScore++;
        }
    }

    else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            console.log("You lose! Paper beats scissors");
            computerScore++;
        }
        else if (computerChoice == "rock") {
            console.log("You win! Paper beats rock");
            humanScore++;
        }
    }

    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("You lose! Rock beats scissors");
            computerScore++;
        }
        else if (computerChoice == "paper") {
            console.log("You win! Scissors beats paper");
            humanScore++;
        }
    }

    else {
        console.log("Invalid choice. Please choose rock, paper, or scissors.");
    }
    // this only returns the last value in JS: return humanScore, computerScore;
}
function playGame() {
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        /* since humanScore and computerScore are global variables i do not need to assign them like this:
        humanScore, computerScore = playRound(...);
        */

        playRound(humanSelection, computerSelection);

        console.log(`Your score: ${humanScore}`);
        console.log(`Computer's score: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("You won the game! Congrats!");
    }
    else if (humanScore < computerScore) {
        console.log("You lost the game!");
    }
    else if (humanScore == computerScore) {
        console.log("It's a tie game!");
    }
    else {
        console.log("Error getting the scores.");
    }

}

playGame();