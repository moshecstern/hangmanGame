
// make list of variables for the ids starting point
var villans = ["joker", "catwoman", "penguin",];
var wordblanks = [];
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
// var turns = document.getElementById("turns");
// turns = turnsCount;
// functions 
// function updateStats(){
//     wins.textContent = wins;
//     losses.textContent = losses;
//     turns.textContent = turns;
// }
  // Function that updates the turn...
//   function updateScore() {
//     document.querySelector("turns").innerHTML = turnsCount;
//   }
// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = villans[Math.floor(Math.random() * villans.length)];
console.log("This is the computuer guess: " + computerGuess);

function displayLettersToGuess(wordToGuess) {
    // villain.innerText = '_ '.repeat(wordToGuess.length);
// for loop that pushes letter (if correct) into array that displays wordblanks into villains
    for (var i = 0; i < wordToGuess.length; i++) {
        console.log(wordToGuess[i]);
        wordblanks.push("_");
    }
    document.getElementById("villains").textContent = wordblanks.join(" ");
}
displayLettersToGuess(computerGuess);

document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log("This is the user guess: " + userGuess);
    // pushes userGuess (which is now event.key) in array of wordblanks
    wordblanks.push(userGuess);
    console.log("This is also the user guess" + userGuess);
    // check to see if user guess's letteers match cpus guess
    for (var i = 0; i < computerGuess.length; i++) {
        // console.log(computerGuess[i]);
        // var userGuess = event.key.toLowerCase();
        if (userGuess === computerGuess[i]) {
            console.log("letter is found");
            wordblanks[i] = userGuess;
            // add user letter to the word; take away the userscore and add the letter
            console.log(computerGuess[i] + " and " + userGuess)
            // document.textContent.getElementById(userGuess)= userGuess[i];
            console.log(wordblanks);
            document.getElementById("villains").textContent = wordblanks.join(" ");
        } } if (userGuess !== computerGuess) {
            console.log("no matches");
            //detract points from total guesses
             guesses--
            console.log(turns--);
            // make turn count go down by 1
            turns--;
            console.log("this is how many turns i have left " + turns);
            // updateStats();
            // turnsCount.innerHTML = turnsCount;
            // document.getElementById("turns").textContent = turns;
            // add to letters guessed
            // guesses.push(userGuess);
            // console.log(guesses);
        }
        // if then statement only running entire code if turns > 0

        // userGuess.textContent = "your guesses " + guesses;
        // wins.textContent = wins;
        // losses.textContent = losses;
        // turns.textContent = turns;
    
};