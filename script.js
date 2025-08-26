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
    const buttons = document.querySelectorAll(".humanChoiceButtons button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let humanSelection = button.textContent.toLowerCase();
            let computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);

            /* since humanScore and computerScore are global variables i do not need to assign them like this:
            humanScore, computerScore = playRound(...);
            */
            let score = document.querySelector("#score");
            score.textContent = `Your score: ${humanScore} \n Computer's score: ${computerScore}`;

            if (humanScore == 5 || computerScore == 5) {
                let resultDiv = document.querySelector("#results");
                let endResult = document.createElement("p");
                if (humanScore > computerScore) {
                    endResult.textContent = "You won the game! Congrats, you were first to score 5 points!";
                    resultDiv.appendChild(endResult);

                }
                else if (humanScore < computerScore) {
                    endResult.textContent = "You lost the game! The computer was first to score 5 points";
                    resultDiv.appendChild(endResult);

                }
                else if (humanScore == computerScore) {
                    endResult.textContent = "It's a tie game!";
                    resultDiv.appendChild(endResult);
                }
                else {
                    endResult.textContent = "Error getting the scores.";
                    resultDiv.appendChild(endResult);
                }
            }
        });
    });

}

// if (humanScore == 5|| computerScore == 5)

playGame();