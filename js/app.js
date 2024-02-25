'use strict';

// Welcome message
const userName = prompt("What's your name?");
alert(`Welcome, ${userName}, to my site! Let's play a game to get to know me better.`);

// Questions
const questions = [
  "Do I have any pets?",
  "Have I ever traveled outside my country?",
  "Do I speak more than one language?",
  "Have I ever climbed a mountain?",
  "Do I enjoy cooking?"
];

const answers = ["n", "y", "y", "n", "y"];

for (let i = 0; i < questions.length; i++) {
  let response = prompt(questions[i]);
  response = response.toLowerCase();
  if (response === answers[i] || response === answers[i][0]) {
    // console.log("Correct!");
    alert("Correct!");
  } else {
    // console.log("Incorrect!");
    alert("Incorrect!");
  }
}

// Final message
alert(`Thanks for playing, ${userName}!`);
