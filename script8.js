let userScore = 0;
let computerScore = 0;
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector(".msg")
let userBoard = document.querySelector(".you")
let computerBoard = document.querySelector(".computer")
let newBtn = document.querySelector(".new-btn")

let choices = document.querySelectorAll(".choice")
let userWin = false;
let computerWin = false;

function gencomputerChoice(){
    let options = ["rock","paper","scissors"]
    let randomIdx = Math.floor(Math.random() * choices.length)
    return options[randomIdx]
}

function updateScore(){
    if(userWin){
        userScore++;
        userBoard.innerText = userScore;
    }
    else if(!userWin && !computerWin){
        return
    }else{
        computerScore++;
        computerBoard.innerText = computerScore
    }
}

function playGame(userChoice){
    let computerChoice = gencomputerChoice()

    if(userChoice === computerChoice){
        msg.textContent = "It's a Draw"
        msg.style.backgroundColor = "black"
        userWin = false;
        computerWin = false;
        msgContainer.classList.remove("hide")
    }

    else if(userChoice === "rock" && computerChoice === "scissors" || 
            userChoice === "paper" && computerChoice === "rock"    ||
            userChoice === "scissors" && computerChoice === "paper")
           {
            userWin = true;
            computerWin = false;
            msg.textContent = `Congrats,You Won the Game! Your ${userChoice} beats ${computerChoice}`
            msg.style.backgroundColor = "green"
            msgContainer.classList.remove("hide")
           }
    else{
        userWin = false;
        computerWin = true;
        msg.textContent = `You lose! ${computerChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
        msgContainer.classList.remove("hide")
    }   
    updateScore()
}


choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        let userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})

newBtn.addEventListener(("click"), () => {
    userScore = 0;
    computerScore = 0;
    userBoard.innerText = userScore;
    computerBoard.innerText = computerScore;
    msgContainer.classList.add("hide")
    msg.textContent = ""

})