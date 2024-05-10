'use strict';

// Personalized welcome message
let userName = prompt("What's your name?");
alert(`Welcome, ${userName}! Please take a moment to read about me, and when you're ready, press the button to start the test.`);
let welcomeHeader = document.getElementById("welcomeHeader");
welcomeHeader.textContent = `Welcome ${userName}!`;

// Add an event listener to the button for the 'click' event
document.addEventListener("DOMContentLoaded", function() {
    let startButton = document.getElementById("startButton");
    startButton.addEventListener("click", function () {
        alert("Quiz started!");

        let correctAnswersCount = 0; // Initialize counter for correct answers

        // Guessing game questions

        console.log("Question 1: Did I study Graphic Design in college?");
        let answer1 = prompt("Did I study Graphic Design in college? (yes/no)").toLowerCase();
        console.log("User's answer to question 1:", answer1);
        if (answer1 === "no") {
            correctAnswersCount++;
            alert("Correct!");
        } else {
            alert("Incorrect!");
        }

        console.log("Question 2: Have I worked as a Printer Technician?");
        let answer2 = prompt("Have I worked as a Printer Technician? (yes/no)").toLowerCase();
        console.log("User's answer to question 2:", answer2);
        if (answer2 === "yes") {
            correctAnswersCount++;
            alert("Correct!");
        } else {
            alert("Incorrect!");
        }

        console.log("Question 3: Was I born in Oklahoma?");
        let answer3 = prompt("Was I born in Oklahoma? (yes/no)").toLowerCase();
        console.log("User's answer to question 3:", answer3);
        if (answer3 === "yes") {
            correctAnswersCount++;
            alert("Correct!");
        } else {
            alert("Incorrect!");
        }

        console.log("Question 4: Do I want to travel?");
        let answer4 = prompt("Do I want to travel? (yes/no)").toLowerCase();
        console.log("User's answer to question 4:", answer4);
        if (answer4 === "yes") {
            correctAnswersCount++;
            alert("Correct!");
        } else {
            alert("Incorrect!");
        }

        console.log("Question 5: I don't want to complete Code 201?");
        let answer5 = prompt("I don't want to complete Code 201? (yes/no)").toLowerCase();
        console.log("User's answer to question 5:", answer5);
        if (answer5 === "no") {
            correctAnswersCount++;
            alert("Correct!");
        } else {
            alert("Incorrect!");
        }

        // 6th question: Guessing a number
        console.log("Question 6: Guess a number between 1 and 10");
        let correctNumber = 7;
        let attempts6; // Rename attempts to attempts6
        for (attempts6 = 1; attempts6 <= 4; attempts6++) {
            let guess = parseInt(prompt("Guess a number between 1 and 10:"));
            console.log("User's guess for question 6:", guess);
            if (guess === correctNumber) {
                correctAnswersCount++;
                alert("Congratulations! You guessed the correct number.");
                break;
            } else if (guess < correctNumber) {
                alert("Too low. Try again.");
            } else {
                alert("Too high. Try again.");
            }
        }

        if (attempts6 > 4) {
            alert("Sorry, you've used all your attempts. The correct number was " + correctNumber + ".");
        
        }

        // 7th question: Guessing from multiple correct answers
        console.log("Question 7: Guess a country I want to visit");
        let correctAnswers = ["Japan", "Mexico", "Australia", "Spain", "Netherlands", "China"];
        let guessAttempts7 = 6; // Rename guessAttempts to guessAttempts7
        let attempts7 = 1; // Rename attempts to attempts7
        while (attempts7 <= guessAttempts7) {
            let correctGuess = false; // Reset correctGuess for each attempt
            let guessCountry = prompt("Guess a country I want to visit:");
            console.log("User's guess for question 7:", guessCountry);
            for (let i = 0; i < correctAnswers.length; i++) {
                if (guessCountry.toLowerCase() === correctAnswers[i].toLowerCase()) {
                    correctGuess = true;
                    break;
                }
            }
            if (correctGuess) {
                correctAnswersCount++;
                alert("Congratulations! That's one of the correct answers.");
                break;
            } else {
                alert("Incorrect. Try again.");
                attempts7++; // Update the attempts7 variable
            }
        }

        // Display possible correct answers
        alert("Possible correct answers: Japan, Mexico, Australia, Spain, Netherlands, China");
        // Display total number of correct answers
        alert(`You got ${correctAnswersCount} out of 7 questions correct.`);
    });
});
