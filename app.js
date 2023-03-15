"use strict";
//Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const buttonNew = document.querySelector(".btn--new");
const buttonRoll = document.querySelector(".btn--roll");
const buttonHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const scoreEl = document.querySelector(".score");
let currentScore, activePlayer, playing, scores;
const init = function () {
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    scores = [0, 0];
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
};
// init();
// Setting the text content of the score to 0;
score0El.textContent = 0;
score1El.textContent = 0;
// const scores = [0, 0];
// let activePlayer = 0;
// let playing = true;
// let currentScore = 0;
//this needs to be outside of the function because everytime the button is clicked we dont want our current score reset it to 0.

//Hiding the dice element
//grab the the dice element and Create the hide class
let diceEl = document.querySelector(".dice");
diceEl.classList.add("hide");
//Adding event listener to the button
//event name >>click
//click >>event handler function
// const scores = [0, 0];
// let activePlayer = 0;
// let playing = true;
// let currentScore = 0;
buttonRoll.addEventListener("click", function () {
  console.log("button clicked");
  if (playing) {
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
      currentScore += dice; //this will only set the text content to player 0 which we dont want instead
      /* current0El.textContent = currentScore */ // We need to find out which one is actually the active player
      //Create a variable tracks who is playing
      //We need to keep track of which player is currently playing
      //if the player is 0 instead select the score element dynamically based on which is the active player right now
      //This is a very handy trick for building the id name dynamically
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
      /*     document.getElementById(`current--${activePlayer}`).textContent =
                    0;
            // Switch to the next player
            //When we switch the player change the value to 0 to 1 or 1 to 1 using ternary operator.
              activePlayer = activePlayer === 0 ? 1 : 0;//reassigning the value to active player switching value between 0 and 1.
              currentScore = 0;
              //Add toggle method it will check if the class if its exists if its not it will add the class
              player0El.classList.toggle("player--active");
              player1El.classList.toggle("player--active");
            
         */
    }
  }
});
//Add an event handler to the hold button
//Once user clicks on holds the score current score added to the active players score
//Check if player
buttonHold.addEventListener("click", function () {
  console.log("button clicked");
  if (playing) {
    //Add current score to the active players score
    //when the player 1 score 0, player 2 score 1
    scores[activePlayer] += currentScore;
    console.log(currentScore);
    console.log(scores[activePlayer]);
    //scores[1] = score[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add("hide");
      // Finish the game
      // User should not be able to play the game once one of the player is declared as winner.
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      //switch player
      switchPlayer();
    }
  }
});

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // Switch to the next player
  //When we switch the player change the value to 0 to 1 or 1 to 1 using ternary operator.
  activePlayer = activePlayer === 0 ? 1 : 0; //reassigning the value to active player switching value between 0 and 1.
  currentScore = 0;
  //Add toggle method it will check if the class if its exists if its not it will add the class
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}
//Starting new game

//Add the event handler to the new game button
// reset the scores to 0
// Set player 1 as a active player

buttonNew.addEventListener("click",init
//   console.log("button clicked");
  //reset the scores to 0
  /* score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove("player--winner");
    player0El.classList.add('player--active');
   */
);

//Let's create a init function which will initialize a new game
// let scores, activePlayer, playing, currentScore;


