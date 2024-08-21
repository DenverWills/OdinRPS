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
    let userRez;
    let userChoice = prompt('Rock, paper or scissors?');
    if (userChoice.toLowerCase() === "rock"){
        userRez = "Rock";
    }else if(userChoice.toLowerCase() === "paper"){
        userRez = "Paper";
    }else{
        userRez = "Scissors";
    }
    return userRez;
}
    

console.log(getComputerChoice());
console.log(getHumanChoice());
