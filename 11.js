// 11. Modify your rock paper scissors function to keep track of the score, and log it out after every round. 
// So more than 1 round can be played at a time, in a loop. 
// AFter every round it should say "Your Score: {yourScore}, ComputerScore: {computerScore}.

const prompt = require("prompt-promise");

var game = 1;
async function rockPaperScissors() {
    var yourScore = 0;
    var computerScore = 0;
    while (game === 1) {
        const randNumb = Math.floor(Math.random() * 3) + 1

        const userChoice = await prompt("Please select a move: \n[1]Rock \n[2]Paper \n[3]Scissors \n");
        if (userChoice === '1') {
            if (randNumb === 1) {
                console.log("Your opponent picked Draw1. Draw.")
            } else if (randNumb === 2) {
                console.log("Your opponent picked Paper. You lose!");
                computerScore += 1;
            } else {
                console.log("You're opponent picked Scissors. You win!");
                yourScore += 1;
            }
        }
        if (userChoice === '2') {
            if (randNumb === 1) {
                console.log("Your opponent picked Rock. You Win!");
                yourScore += 1;
            } else if (randNumb === 2) {
                console.log("Your opponent picked Paper. Draw.");
            } else {
                console.log("You're opponent picked Scissors. You lose!!");
                computerScore += 1;
            }
        }
        if (userChoice === '3') {
            if (randNumb === 1) {
                console.log("Your opponent picked Rock. You lose!");
                computerScore += 1;
            } else if (randNumb === 2) {
                console.log("Your opponent picked Paper. You win!.");
                yourScore += 1;
            } else {
                console.log("You're opponent picked Scissors. Draw.");
            }
        }
        console.log("ComputerScore is:", computerScore);
        console.log("Your Score is:", yourScore);
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