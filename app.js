let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

//conver to full word
function convertWord(letter){
    if(letter === 'r') return 'Rock';
    if(letter === 'p') return 'Paper';
    return 'Scissors';

}

//generate random choice for computer
function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice){
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertWord(userChoice)}${smallUser} beats ${convertWord(computerChoice)}${smallComp} You win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(()=>{ document.getElementById(userChoice).classList.remove('green-glow')}, 300);
}

function lose(userChoice, computerChoice){
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    computerScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertWord(userChoice)}${smallUser} loses to ${convertWord(computerChoice)}${smallComp} You lose!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(()=>{ document.getElementById(userChoice).classList.remove('red-glow')}, 300);
}

function draw(userChoice, computerChoice){
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertWord(userChoice)}${smallUser} equals to ${convertWord(computerChoice)}${smallComp} Its a draw!`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(()=>{ document.getElementById(userChoice).classList.remove('gray-glow')}, 300);
}

//take in user choice
function game(userChoice){
    const computerChoice = getComputerChoice();

    //calculate wins and losses
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
        break;
    }
}


//provide user choice
function main(){
    rock_div.addEventListener('click', () => {
        game('r');
    })

    paper_div.addEventListener('click', () => {
        game('p');
    })

    scissors_div.addEventListener('click', () => {
        game('s');
    })
}

main();