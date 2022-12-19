// 12. Modify your rock paper scissors function so that after one player gets to 5 points, the game ends.

const prompt = require("prompt-promise");

var game = 1;
async function rockPaperScissors() {
    var yourScore = 0;
    var computerScore = 0;
    while (yourScore < 5 && computerScore < 5) {
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

    }
    if (yourScore > computerScore) {
        console.log("You won 5 rounds and won the Game!")
    } else {
        console.log("The Computer won 5 rounds and won the Game!")
    }


}
rockPaperScissors();