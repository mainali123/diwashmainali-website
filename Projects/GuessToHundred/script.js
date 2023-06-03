/* 
Code Summary:
This code creates a simple dice game for two players. The game starts with both players' scores set to 0. 
Players take turns rolling a dice and adding the result to their current score. If a player rolls a 1, 
their current score is reset to 0. If a player's current score reaches 100, they win the game.

The code uses the following functions:

    randomDiceNumber(): This function generates a random number between 1 and 6.
    rollDice(): This function calls randomDiceNumber() and updates the dice image to show the rolled 
                number.
    switchPlayer(): This function switches the current player.
    rollHandler(): This function is called when the "Roll" button is clicked. It calls rollDice() and 
                    updates the current player's score.
    holdHandler(): This function is called when the "Hold" button is clicked. It adds the current 
                    player's score to their final score and resets their current score to 0.
    newGame(): This function is called when the "New Game" button is clicked. It resets the game to its 
                    initial state.

*/

"use strict";
// console.log(document.getElementById("current--0").textContent = 23);

const image_array = [
  "dice-1.png",
  "dice-2.png",
  "dice-3.png",
  "dice-4.png",
  "dice-5.png",
  "dice-6.png",
];
// const buttons = document.querySelectorAll(".btn");
// console.log(buttons);

function randomDiceNumber() {
  let diceNumber = Math.floor(Math.random() * 6) + 1;
  return diceNumber;
}

// When player wants to roll the dice
function rollDice() {
  let rand_num = 0;
  rand_num = randomDiceNumber();
  // console.log(rand_num);
  let img_name = image_array[rand_num - 1];
  document.querySelector(".dice").src = img_name;
  return rand_num;
}

// Keeping tracks of scores
let finalScoreOfPlayerOne = 0;
let currentScoreOfPlayerOne = 0;
let finalScoreOfPlayerTwo = 0;
let currentScoreOfPlayerTwo = 0;
let playerSwitch = 0;
let continueToPlay = true;

function switchPlayer() {
  // switching between two players i.e. 1 for player 2 and 0 for player 1
  playerSwitch = playerSwitch === 0 ? 1 : 0;
  document.querySelector(".player--0").classList.toggle("player--active"); // If it is present it will delete else add the name in the class
  document.querySelector(".player--1").classList.toggle("player--active");
}

function rollHandler() {
  if (!continueToPlay) return; // if game ends

  let score = rollDice();
  if (score === 1) {
    if (playerSwitch === 0) {
      currentScoreOfPlayerOne = 0;
      document.getElementById("current--0").textContent = currentScoreOfPlayerOne;
      switchPlayer();
    } else {
      currentScoreOfPlayerTwo = 0;
      document.getElementById("current--1").textContent = currentScoreOfPlayerTwo;
      switchPlayer();
    }
  } else {
    if (playerSwitch === 0) {
      currentScoreOfPlayerOne += score;
      document.getElementById("current--0").textContent = currentScoreOfPlayerOne;
    } else {
      currentScoreOfPlayerTwo += score;
      document.getElementById("current--1").textContent = currentScoreOfPlayerTwo;
    }
  }
}

function holdHandler() {
  if (!continueToPlay) return;
  if (playerSwitch === 0) {
    finalScoreOfPlayerOne += currentScoreOfPlayerOne;
    currentScoreOfPlayerOne = 0;
    document.getElementById("score--0").textContent = finalScoreOfPlayerOne;
    document.getElementById("current--0").textContent = currentScoreOfPlayerOne;
    if (finalScoreOfPlayerOne >= 100) {
      document.querySelector(".player--0").classList.add("player--winner");
      continueToPlay = false;
    }
    switchPlayer();
  } else {
    finalScoreOfPlayerTwo += currentScoreOfPlayerTwo;
    currentScoreOfPlayerTwo = 0;
    document.getElementById("score--1").textContent = finalScoreOfPlayerTwo;
    document.getElementById("current--1").textContent = currentScoreOfPlayerTwo;
    if (finalScoreOfPlayerTwo >= 100) {
      document.querySelector(".player--1").classList.add("player--winner");
      continueToPlay = false;
    }
    switchPlayer();
  }
}

if (continueToPlay) {
  document.querySelector(".btn--roll").addEventListener("click", rollHandler);
  document.querySelector(".btn--hold").addEventListener("click", holdHandler);
}

document.querySelector(".btn--new").addEventListener("click", function () {
  location.reload();
});
