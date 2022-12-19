
// 10. Do your rock paper scissors function again, but it selects randomly, not cheating.

const prompt = require("prompt-promise");

var game = 1;
async function rockPaperScissors() {
    while (game === 1) {
        const randNumb = Math.floor(Math.random() * 3) + 1

        const userChoice = await prompt("Please select a move: \n[1]Rock \n[2]Paper \n[3]Scissors \n");
        if (userChoice === '1') {
            if (randNumb === 1) {
                console.log("Your opponent picked Draw1. Draw.")
            } else if (randNumb === 2)
                console.log("Your opponent picked Paper. You lose!");
            else {
                console.log("You're opponent picked Scissors. You win!");
            }
        }
        if (userChoice === '2') {
            if (randNumb === 1) {
                console.log("Your opponent picked Rock. You Win!")
            } else if (randNumb === 2)
                console.log("Your opponent picked Paper. Draw.");
            else {
                console.log("You're opponent picked Scissors. You lose!!");
            }
        }
        if (userChoice === '3') {
            if (randNumb === 1) {
                console.log("Your opponent picked Rock. You lose!")
            } else if (randNumb === 2)
                console.log("Your opponent picked Paper. You win!.");
            else {
                console.log("You're opponent picked Scissors. Draw.");
            }
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