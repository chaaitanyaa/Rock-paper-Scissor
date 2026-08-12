

function getcomputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 1) {
        return 'rock'
    } else if (randomNumber === 2) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function getHumanChoice() {
    const choice = prompt('Choose between Rock, Paper,Scissors')
    return choice.toLowerCase()
}






const hChoice = getHumanChoice
const cChoice = getcomputerChoice










function playGame() {

    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {



        if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            console.log("You won! Rock beats Scissors.");
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            console.log("You won! Paper beats Rock.");
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            console.log("You won! Scissors beats Paper.");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            console.log("You lose! Paper beats Rock.");
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            console.log("You lose! Scissors beats Paper.");
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            console.log("You lose! Rock beats Scissors.");
        } else if (humanChoice === "rock" && computerChoice === "rock") {
            console.log("Tie! Rock against Rock.");
        } else if (humanChoice === "paper" && computerChoice === "paper") {
            console.log("Tie! Paper against Paper.");
        } else if (humanChoice === "scissors" && computerChoice === "scissors") {
            console.log("Tie! Scissors against Scissors.");
        }



    }




    playRound(hChoice(), cChoice())
    playRound(hChoice(), cChoice())
    playRound(hChoice(), cChoice())
    playRound(hChoice(), cChoice())
    playRound(hChoice(), cChoice())


    if (humanScore > computerScore) {
        console.log('Damn you win! ')
        console.log('Human score:', humanScore, 'Computer score:', computerScore)
    } else if (humanScore < computerScore) {
        console.log('You lose! womp womp')
        console.log('Human score:', humanScore, 'Computer score:', computerScore)
    } else {
        console.log(`It's a tie`)
        console.log('Human score:', humanScore, 'Computer score:', computerScore)
    }

}


playGame()
