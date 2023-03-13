"use strict";
//Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
// Setting the text content of the score to 0;
score0El.textContent = 0;
score1El.textContent = 0;

//Hiding the dice element
//grab the the dice element and Create the hide class

let diceEl = document.querySelector(".dice");
diceEl.classList.add("hide");
