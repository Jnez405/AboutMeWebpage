'use strict';

// Personalized welcome message
let userName = prompt("What's your name?");
alert(`Welcome, ${userName}! Please take a moment to read about me, and when you're ready, press the button to start the test.`);

// Function to start the test
function startTest() {
    // Guessing game questions
    let answer1 = prompt("Did I study Graphic Design in college? (yes/no)").toLowerCase();
    //console.log("User's answer to question 1:", answer1);
    if (answer1 === "no" || answer1 === "n") {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }

    let answer2 = prompt("Have I worked as a Printer Technician? (yes/no)").toLowerCase();
    //console.log("User's answer to question 2:", answer2);
    if (answer2 === "yes" || answer2 === "y") {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }

    let answer3 = prompt("Am I born in Oklahoma? (yes/no)").toLowerCase();
    //console.log("User's answer to question 3:", answer3);
    if (answer3 === "yes" || answer3 === "y") {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }

    let answer4 = prompt("Do I want to Travel? (yes/no)").toLowerCase();
    //console.log("User's answer to question 4:", answer4);
    if (answer4 === "yes" || answer4 === "y") {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }

    let answer5 = prompt("I do not want to complete Code 201? (yes/no)").toLowerCase();
    //console.log("User's answer to question 5:", answer5);
    if (answer5 === "no" || answer5 === "n") {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
}

// Event listener for the button click
document.querySelector('#startButton').addEventListener('click', startTest);
