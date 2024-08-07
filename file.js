console.log("Hello World!");
// Function to get a computer choice by generating a ramdom number between 1 and 3
function getComputerChoice() {
    // Generate a random number between 1 and 3
    let ranNum = Math.floor(Math.random() * 3) + 1;
    // Determine computer choice based on the random number
    switch (ranNum) {
        case 1:
            return "Rock"; // Return "Rock" if random number is 1
            break;
        case 2:
            return "Paper"; // Return "Paper" if random number is 2
            break;
        case 3:
            return "Scissors"; // Return "Scissors" if random number is 3
            break;
    }
}

// Function to get the human choice by prompting the user
function getHumanChoice() {
    // Prompt the user to enter their move and store it in userType
    let userType = prompt("What's your move?", "");
    // convert the user input to lower-case for case-insensitive comparision
    userType = userType.toLocaleLowerCase();
    switch(userType) {
        case "rock":
            console.log("You: Rock"); // log user's choice to console
            return "Rock"; // return "Rock" if user input is "rock"
            break;
        case "paper":
            console.log("You: Paper"); // log user's choice to console
            return "Paper"; // return "Paper" if user input is "paper"
            break;
        case "scissors":
            console.log("You: Scissors"); // log user's choice to console
            return "Scissors"; // return "Scissors" if user input is "scissors"
            break;
        default:
            alert("Please enter it right!!!"); // alert user for incorrect input
            console.log("You entered an undefined value."); // log to console
            break;
    };
}
// Initial scores for human and computer 
let humanScore = 0;
let computerScore = 0;

// Determine who will win/lose and scores for each round
function playRound(humanChoice, computerChoice) {
    // compare human choice and computer choice to determine the winner
    if (humanChoice === "Rock"  && computerChoice === "Paper") {
        console.log("You lose! Paper beats Rock.") // log results to console
        computerScore++; // increment computer's choice

    } else if (humanChoice == "Scissors" && computerChoice === "Rock") {
        console.log("You lose! Rock beats Scissors.")  // log results to console
        computerScore++; // increment computer's choice

    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("You lose! Scissors beats Paper.") // log results to console
        computerScore++; // increment computer's choice

    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You win! Rock beats Scissors.") // log results to console
        humanScore++;// increment human's choice

    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You win! Paper beats Rock.") // log results to console
        humanScore++;// increment human's choice

    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You win! Scissors beats Paper.") // log results to console
        humanScore++;// increment human's choice

    } else {
        console.log("Nobody wins.") // log results to console if it's a tie
    };
}
// Function to play a game of 5 rounds
function playGame() {
// Play 5 rounds of the game
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice(); // get human's choice
        const computerSelection = getComputerChoice(); // get computer's choice
        console.log(`Computer: ` + computerSelection); // log computer's choice to console
        playRound(humanSelection, computerSelection); // play a round based on choices
    }
    // Display final scores after 5 rounds
    console.log(`Your score: ${humanScore}`); // log human's final score to console
    console.log(`Computer score: ${computerScore}`); // log computer's final score to console
    //Determine the winner for the entire game 
    if (humanScore > computerScore) {
        console.log("You won the game!") // log if human wins
    } else {
        console.log('Computer won the game! Better luck next time.'); // log if computer wins
    }
}
// Start the game by calling the play
playGame();
