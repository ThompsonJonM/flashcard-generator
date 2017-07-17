// require inquirer
var inquirer = require("inquirer");

//importat cards
var flashCards = require("./basicCard.js");

//import cloze
var clozeCards = require("./clozeCard.js");

//variable for the questions list
var clozeQuestions = [];

//RNG population
for (var i = 0; i < questions.length; i++) {
    var q = new flashCards.clozeCard(clozeCards[i].full, clozeCards[i].cloze);
    clozeQuestions.push[q];
}

//current answer counter
var currentQuestion = 0;

//correct answer counter
var correctAnswer = 0;

//wrong answer counter
var wrongAnswer = 0;

function askQuestion() {
    inquirer.prompt([
        {
            type: "input",
            message: clozeQuestions[currentQuestion].partial + "\nAnswer: ",
            name: "userGuess"
        }
    ]).then(function(answers) {
        console.log("\n");

        if (answers.userGuess.toLowerCase() === clozeQuestions[currentQuestion].cloze.toLowerCase()) {
            console.log("You are correct!");
            correctAnswer++;
        } else {
            console.log("You are incorrect.");
            wrongAnswer++;
        }

        console.log(clozeQuestions[currentQuestion].full);
        console.log("-------------------------------\n");

        if (currentQuestion < clozeQuestions.length - 1) {
            currentQuestion++;
            askQuestion();
        } else {
            console.log("Game over!");
            console.log("Number of correct answers: " + correctAnswer);
            console.log("Number of incorrect answers: " + wrongAnswer);

            console.log("-------------------------------\n");

            inquirer.prompt([
                {
                    type: "confirm",
                    message: "Play again?",
                    name: "playAgain"
                }
            ]).then(function(answers) {
                if(answers.playAgain) {
                    currentQuestion = 0;
                    correctAnswer = 0;
                    wrongAnswer = 0;

                    askQuestion();
                } else {
                    console.log("Alrighty then! Goodbye!");
                }
            })
        }
    })
}

askQuestion();