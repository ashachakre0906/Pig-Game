"use strict";
//Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const buttonNew = document.querySelector(".btn--new");
const buttonRoll = document.querySelector(".btn--roll");
const buttonHold = document.querySelector(".btn--hold");
// Setting the text content of the score to 0;
score0El.textContent = 0;
score1El.textContent = 0;
let currentScore = 0;//this nees to be outside of the function because evertime the button is clicked we dont want our current score reset it to 0.

//Hiding the dice element
//grab the the dice element and Create the hide class
let diceEl = document.querySelector(".dice");
diceEl.classList.add("hide");
//Adding event listener to the button
//event name >>click
//click >>event handler function
buttonRoll.addEventListener("click", function () {
  console.log("button clicked");
  //we need to start by generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
  //Math.random which creates the number between 0 and 1
  //Multiply that by 6, we will get a number between 0 and 6 but not 6 so add 1 to it
  //truncate all of this by doing Math.trunc () so we removed the decimal part.
  //Basically we pass the result of `Math.random() * 6`into Math.trunc so this will then give us a number between 0 and 5 so we just add one to elevate that to one to six.
  //Remove the hidden class
  diceEl.classList.remove("hide");
  //Check if the rolled dice is 1 >>Switch to the next player
   //Dice will be number between 1 and 6
   //we have to display one of the images
   //we can manipulate this source(src) attribute from our JS 
    diceEl.src = `./assets/images/dice-${dice}.png`;
    if (dice !== 1) {
        //Add dice to the current score
        const currentScore = document.querySelector("current-score");
    } else {
        // Switch player

    }
});
