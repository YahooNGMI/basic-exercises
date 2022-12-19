// 9. ROCK PAPER SCISSORS! Declare a function that plays rock paper scissors with you via the `prompt-promise` npm package. 
// The funcion should prompt you for your decision, then cheat, and always pick the winning move, so you can never win.

const prompt = require("prompt-promise");
var game = 1;
async function rockPaperScissors() {
    while (game === 1) {
        const userChoice = await prompt("Please select a move: \n[1]Rock \n[2]Paper \n[3]Scissors \n");
        if (userChoice === '1') {
            console.log("Your opponent picked Paper. You lose!");
        } else if (userChoice === '2') {
            console.log("Your opponent picked Scissors. You lose!");
        }
        else if (userChoice === '3') {
            console.log("Your opponent picked Rock. You lose!");
        } else {
            throw Error("You selected an option that is not 1,2,or 3");
        }
        const gameStatus = await prompt("Another round? \n[1]Yes \n[2]No \n");
        if (gameStatus === '1') {
            game = 1
        }
        else {
            game = 2;
        }
    }

}
rockPaperScissors();