
let computerChoice = "Unknown";
const compChoice = ["Rock", "Paper", "Scissors"];
function getComputerChoice () {
    const randomChoiceGenerator = Math.floor(Math.random() * compChoice.length);
    computerChoice = randomChoiceGenerator, compChoice[randomChoiceGenerator];
    
    if (computerChoice === 0) {
        computerChoice = "rock";
        console.log("Computer picked Rock");
        return "rock";
    } else if (computerChoice === 1) {
        computerChoice = "paper";
        console.log("Computer picked Paper");
        return "paper";
    } else if (computerChoice === 2) {
        computerChoice = "scissors";
        console.log("Computer picked Scissors");
        return "scissors";
    }

}

function getHumanChoice() {
    
    const sign = prompt("Ready to start the game?\nPick between: Rock, Paper or Scissors. ")
    if (sign.toLowerCase() === "rock") {
        console.log("You picked Rock");
        humanChoice = "rock";
    } else if (sign.toLowerCase() === "paper") {
        humanChoice = "paper";
        console.log("You picked Paper");
        return "paper";
    } else if (sign.toLowerCase() === "scissors") {
        humanChoice = "scissors";
        console.log("You picked Scissors");
        return "scissors";
    } else {
        alert("Invalid!");
        getHumanChoice();
    }
}
/* Rounds start here */



function playGame() {
    humanScore = 0;
    computerScore = 0;
    console.log("****************************");
    function playRound() {
        humanScore;
        computerScore;
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("Next round...");
            return computerScore++;

        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("Next round...!");
            return humanScore++;

        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("Next round...");
            return computerScore++;
    
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! this round!");
            return humanScore++;
    
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("Next round...!");
            return humanScore++;
    
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("Next round...");
            return computerScore++;
    
        } else {
            console.log("Next round...");
        }
    }

    for (let roundNumber = 1; roundNumber <= 5; roundNumber++) {
        console.log("Round " + roundNumber);
        playRound();
        console.log("Your score: " + humanScore + "\nComputer's score: " + computerScore);
        console.log("****************************");
    } if (computerScore > humanScore) {
        console.log("You lost!");

    } else if (computerScore < humanScore) {
        console.log("You won!");
    } else {
        console.log("Draw!");
    }
}

playGame();
