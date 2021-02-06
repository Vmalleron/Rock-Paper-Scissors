let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score"); // le score user || les '_span' ou '_div' sont une bonne pratique pour discerner les variables 'classiques' des variables 'DOM' c-a-d les variable qu'on affiche à l'user via le template.
const computerScore_span = document.getElementById("computer-score"); // le score du computer.
const scoreBoard_div = document.querySelector(".score-board"); // le tableau des scores ( user & computer).
const result_div = document.querySelector(".result > p"); // la phrase qui explique le résultat.
const rock_div = document.getElementById("r"); // la div contenant l'image "rock"
const paper_div = document.getElementById("p");  // la div contenant l'image "paper"
const scissors_div = document.getElementById("s");  // la div contenant l'image "scissors"


// reset scores to play new game;
function StartNewGame() {
    userScore_span.innerHTML = userScore = 0;
    computerScore_span.innerHTML = computerScore = 0;
}


function getComputerChoice() {
    const choices = ['r', 'p', 's']; // le tableau des choix possibles .
    const randomNumber = Math.floor(Math.random() * 3); // le nombre aléatoire qui servira de choix de l'ordinateur : 0 = rock, 1 = paper, 2 = scissors.
    return choices [randomNumber]; // return 'r', 'p', ou 's' au hasard selon le random number issue de 'randomNumber'
}


function convertToWord(letter) {

    if ( letter === "r" ) return "Rock";
    if ( letter === "p" ) return "Paper";
    return "Scissors";

}

function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallComputerWord} you Win ! `
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallComputerWord} you Lost... `
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals to ${convertToWord(computerChoice)}${smallComputerWord} it's a Draw. `
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
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

};

function main() {

    rock_div.addEventListener('click', () => game("r"));

    paper_div .addEventListener('click', () => game("p"));

    scissors_div.addEventListener('click', () => game("s"));
}

main();

