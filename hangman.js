
// make list of variables for the ids starting point
var villans = ["joker", "catwoman", "penguin",];
var wordblanks= [];
// variables for score
var wins = 0;
var losses = 0;
var turns = 7;
var guesses = [];
// Let's start by grabbing a reference to the <span> below.
var villain = document.getElementById("villains");
var villainLetters = document.getElementById("villainLetters");
var userGuess = document.getElementById("userGuess");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var turns = document.getElementById("turns");

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = villans[Math.floor(Math.random() * villans.length)];
console.log("This is the computuer guess: " + computerGuess);
displayLettersToGuess(computerGuess);

// function displayLettersToGuess(wordToGuess) {
//     villain.innerText = '_ '.repeat(wordToGuess.length);
// }

for (var i= 0; i < villans.length; i++){
    console.log(villan[i]);
    wordblanks.push("_ ");
    document.getElementById("villain").textContent = wordblanks.join(" ");
}
// change to for loop

// creating function when key is pressed
// document.addEventListener("keyup", function(event) {
//     console.log(event);
//     // Determines which key was pressed.
//       var userGuess = event.key;
//       guesses.push(userGuess);
//     console.log(userGuess);

//     }) 
document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log("This is the user guess: " + userGuess);
    guesses.push(userGuess);
    console.log(userGuess);
    // check to see if user guess's letteers match cpus guess
    for (var i = 0; i < computerGuess.length; i++) {
        // console.log(computerGuess[i]);
        if (userGuess === computerGuess[i]) {
            console.log("letter is found");
            // villain.innerText = userGuess + '_ ';
            //  top line here is changing whole var of userguess. need to update letter only
            // add user letter to the word; take away the userscore and add the letter
            console.log(computerGuess[i] + " and " + userGuess)
            // document.textContent.getElementById(userGuess)= userGuess[i];
            
        } else {
            console.log("no matches");
            //detract points from total guesses
            console.log(turns--);
            turns--; 
            // add to letters guessed
        }
    // if then statement only running entire code if turns > 0
    
    userGuess.textContent = "your guesses " + guesses;
    wins.textContent = "Wins: " + wins;
    losses.textContent = "Losses: " + losses;
    turns.textContent = "Turns: " + turns;
}};