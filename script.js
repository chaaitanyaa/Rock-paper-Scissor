let humanScore = 0
let computerSCore = 0

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {
        return 'rock'
    } else if (randomNumber === 2) {
        return 'paper'
    } else {
        return 'scissor'
    }
}

function getHumanChoice() {
    const humanChoice = prompt('Choose between Rock, Paper,Scissor')
    return humanChoice
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scissor') {
        console.log('You win!')
        humanScore += 1
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('You loose')
        computerSCore += 1
    } else if (humanChoice === 'rock' && computerChoice === 'rock') {
        console.log('again')
    } if (humanChoice === 'paper' && computerChoice === 'scissor') {
        console.log('You Loose!')
        computerSCore += 1
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You win')
        humanScore += 1
    } else if (humanChoice === 'paper' && computerChoice === 'paper') {
        console.log('again')
    } if (humanChoice === 'scissor' && computerChoice === 'rock') {
        console.log('You Loose!')
        computerSCore += 1
    } else if (humanChoice === 'scissor' && computerChoice === 'paper') {
        console.log('You win')
        humanScore += 1
    } else if (humanChoice === 'scissor' && computerChoice === 'scissor') {
        console.log('again')
    }



}


const humanChoice = getHumanChoice().toLowerCase()
const computerChoice = getComputerChoice()

console.log(humanChoice, computerChoice)
playRound(humanChoice, computerChoice)
console.log(humanScore, computerSCore)