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
console.log(getComputerChoice());