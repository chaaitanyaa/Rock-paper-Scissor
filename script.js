function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {
        return 'Rock'
    } else if (randomNumber === 2) {
        return 'Paper'
    } else {
        return 'Scissor'
    }
}

function getHumanChoice() {
    const humanChoice = prompt('Choose between Rock, Paper,Scissor')
    return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
}


