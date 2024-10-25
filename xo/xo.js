/*const choices = document.querySelectorAll(".choice");
const genCompChoice=()=>{
    const options=[b1,b2,b3,b4,b5,b6,b7,b8,b9];
    const i=Math.floor(Math.random()*9);
    console.log(options[i])
    return options[i];
}
const playgame=(userID)=>{
    console.log(userID)
        let compChoice=genCompChoice()
        if(compChoice===userID){
            options.remove(userID)
            console.log(options)
            playgame()
        }
    compChoice.innerText = "O";
    console.log(compChoice.length)
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userID = choice.getAttribute("id");
        choice.innerText = "X";
        playgame(userID)
    });   
});*/
// Get the game elements
const choices = document.querySelectorAll('.choice');
let currentPlayer = 'X';
let gameActive = true;

// Winning combinations
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player choice
function playerChoice(index) {
    if (choices[index].textContent === '_' && gameActive) {
        choices[index].textContent = currentPlayer;
        checkResult();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch player
    }
}

// Function to check for a win or draw
function checkResult() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (choices[a].textContent === choices[b].textContent &&
            choices[a].textContent === choices[c].textContent &&
            choices[a].textContent !== '_') {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        alert(`Player ${currentPlayer} wins!`);
        gameActive = false;
        return;
    }

    const draw = [...choices].every(choice => choice.textContent !== '_');
    if (draw) {
        alert("It's a draw!");
        gameActive = false;
    }
}

// Add event listeners to each choice
choices.forEach((choice, index) => {
    choice.addEventListener('click', () => playerChoice(index));
});

