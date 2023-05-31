"use strict";

// Current values
const initialMessage = document.querySelector(".message").textContent;
const initialBackgroundColor = document.body.style.backgroundColor;
const initialBigNumberToGuess = document.querySelector(".number").textContent;

// Get random number between 0 to 20
function random_num(max_num) {
  let rand = Math.floor(Math.random() * max_num);
  return rand;
}

let score = 20; // score is initially 20

let numToGuess = random_num(20); // number to guessed by user

while (numToGuess <= 1) {
  // if the number is less than or equal to 1, then choosing another number randomly
  numToGuess = random_num(20);
}

console.log(numToGuess); // For test purpose

document
  .getElementById("button_clicked")
  .addEventListener("click", function () {
    let user_choice = parseInt(document.querySelector(".guess").value); // number guessed by user

    if (score > 0) {
      if (user_choice === numToGuess) {
        // if the number matches
        document.querySelector(".message").textContent =
          "Congratulations!! your answer is correct";
        document.querySelector(".highscore").textContent = score;
        document.querySelector(".number").textContent = numToGuess;
        document.body.style.backgroundColor = "green";
      } else if (
        numToGuess - user_choice <= 5 &&
        numToGuess - user_choice > 0
      ) {
        document.querySelector(".message").textContent = "Close";
        score--;
        document.querySelector(".score").textContent = score;
      } else if (numToGuess > user_choice) {
        // If user have guessd lower number
        if (numToGuess - user_choice <= 3) {
          // If the number have difference of 3
          document.querySelector(".message").textContent = "Close";
          score--;
          document.querySelector(".score").textContent = score;
        } else {
          document.querySelector(".message").textContent = "Too Low";
          score--;
          document.querySelector(".score").textContent = score;
        }
      } else if (numToGuess < user_choice) {
        // If user have guessd higher number
        if (user_choice - numToGuess <= 3) {
          // If the number have difference of 3
          document.querySelector(".message").textContent = "Close";
          score--;
          document.querySelector(".score").textContent = score;
        } else {
          document.querySelector(".message").textContent = "Too High";
          score--;
          document.querySelector(".score").textContent = score;
        }
      }
    } else {
      document.querySelector(".message").textContent = "Game Over";
      document.body.style.backgroundColor = "red";
      document.querySelector(".number").textContent = "Lo\nst";
    }
  });

document.getElementById("restartGame").addEventListener("click", function () {
  // reseting all the values to it's default value except for highscore
  document.querySelector(".message").textContent = initialMessage;
  document.body.style.backgroundColor = initialBackgroundColor;
  document.querySelector(".number").textContent = initialBigNumberToGuess;
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = 20;
  score = 20;
});
