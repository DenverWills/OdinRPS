let humanScore = 0;
let computerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
function getComputerChoice(){
    const randoNumber = Math.floor(Math.random() * 3);
    let computerChoice;

    if(randoNumber === 0){
        computerChoice = "Rock";
    }
    else if(randoNumber === 1){
        computerChoice = "Paper";
    }
    else{
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice;
    let choice = prompt('Rock, paper or scissors?');
    if (choice.toLowerCase() === "rock"){
        humanChoice = "Rock";
    }else if(choice.toLowerCase() === "paper"){
        humanChoice = "Paper";
    }else{
        humanChoice = "Scissors";
    }
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It's a tie! Both chose " + humanChoice);
    } else if (
      (humanChoice === "Rock" && computerChoice === "Scissors") ||
      (humanChoice === "Paper" && computerChoice === "Rock") ||
      (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
      humanScore++;
      console.log("You win! " + humanChoice + " beats " + computerChoice);
    } else {
      computerScore++;
      console.log("You lose! " + computerChoice + " beats " + humanChoice);
    }
  }

  // Function to log the score after each round
  function displayScore() {
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
  }

  // Function to determine the winner of the game
  function displayFinalWinner() {
    if (humanScore > computerScore) {
      console.log("You win the game!");
    } else if (humanScore < computerScore) {
      console.log("You lose the game!");
    } else {
      console.log("It's a tie game!");
    }
  }
  function playGame() {
    // Play 5 rounds
    for (let i = 1; i <= 5; i++) {
      // Log the current round number
      console.log("Round " + i + ":");

      // Get new choices every round
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();

      // Log computer's choice for debugging
      console.log("Computer chooses: " + computerSelection);

      // Play the round with new choices
      playRound(humanSelection, computerSelection);

      // Display score after each round
      displayScore();
      console.log("--------------------------------------------------")
    }

    // After all rounds are played, display the final winner by calling the displayFinalWinner function
    displayFinalWinner();
  }

  // Call the playGame function to start the game
  playGame();

