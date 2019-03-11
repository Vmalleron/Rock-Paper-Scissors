const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score"); // le score user || les '_span' ou '_div' sont une bonne pratique pour discerner les variables 'classiques' des variables 'DOM' c-a-d les variable qu'on affiche à l'user via le template.
const computerScore_span = document.getElementById("computer-score"); // le score du computer.
const scoreBoard_div = document.querySelector(".score-board"); // le tableau des scores ( user & computer).
const result_div = document.querySelector(".result"); // la phrase qui explique le résultat.
const rock_div = document.getElementById("r"); // la div contenant l'image "rock"
const paper_div = document.getElementById("p");  // la div contenant l'image "paper"
const scissors_div = document.getElementById("s");  // la div contenant l'image "scissors"


function getComputerChoice() {
    const choices = ['r', 'p', 's']; // le tableau des choix possibles .
    const randomNumber = Math.floor(Math.random() * 3); // le nombre aléatoire qui servira de choix de l'ordinateur : 0 = rock, 1 = paper, 2 = scissors.
    return choices [randomNumber]; // return 'r', 'p', ou 's' au hasard selon le random number issue de 'randomNumber'
}
console.log(getComputerChoice());


function game(userChoice) {
    const computerChoice = getComputerChoice();

};

function main() {

    rock_div.addEventListener('click', function()  {
        game("r");
    });

    paper_div .addEventListener('click', function()  {
        game("p");
    });

    scissors_div.addEventListener('click', function()  {
        game("s");
    });
}

main();