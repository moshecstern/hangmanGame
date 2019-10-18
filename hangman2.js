// make list of variables for the ids starting point
var villans = ["joker", "catwoman", "penguin", "bane", "poisonivy", "scarecrow", "twoface", "riddler", "mrfreeze", "hush", "harleyquinn"];
//empty array to hold the blanks or correct guesses
var letterTiles;
var villainCounter = 0;
// variables for score
var wins = 0;
var losses = 0;
var turns;
var guesses;
var villainToGuess;
var lettersGuessedArray;
var gameOver = false;
// Let's start by grabbing a reference to the <span> below.
var villain = document.getElementById("villains");
var villainLetters = document.getElementById("villainLetters");
var letterGuessed = document.getElementById("userGuess");
var turnsRemaining = document.getElementById("turns");
var winsElement = document.getElementById("wins");
var lossesElement = document.getElementById("losses");

// show what num on the array we are on out of how many
var villainWeAreon = document.getElementById("villainArrayWerOn");
// console.log(letterTiles[i]  +  villains.length)



var reset = document.getElementById("reset");
//add event listener to this button to call setupNewGame
reset.addEventListener("click", setupNewGame);
//create a start game button by setting the stats for the game
function setupNewGame() {
    //hide reset button
    //variable.style.display = "none";
    reset.style.display = "none";
    villain.textContent = "Gotta catch me!";
    turns = 7;
    lettersGuessedArray = [];
    letterTiles = [];
    gameOver = false;
    // this line makes the cpu choose a random villan array everytime
    // villainToGuess = villans[Math.floor(Math.random() * villans.length)].toLowerCase();
    // makes cpu choose the array in order
    //converting to lower case to make case insensitive
    if (villainCounter >= villans.length) {
        alert("GAME OVER!!! Try again");
        // endGameFunction();
    } else {
        villainToGuess = villans[villainCounter].toLowerCase();
    }
    villainCounter++;
    // when new game change opacity of pic to invisible
    document.getElementById("changePic").style = "opacity: 0.0";
    var smallView = window.matchMedia("(max-width: 840px)")
    //  makes hero pic apear under gameDiv when using smaller screen
        if (smallView.matches) { // If media query matches
            document.getElementById("heroPic").style = "left: 7%; top: 70%";
        } else {
                    document.getElementById("heroPic").style = "left: 10%; top: 30%";
            }
    
    for (var i = 0; i < villainToGuess.length; i++) {
        letterTiles.push("_");
    }

    displayCurrentLetterTiles(letterTiles, lettersGuessedArray, turns, wins, losses);
 };
//when page loads, setup the new game for the player
setupNewGame();

function displayCurrentLetterTiles(letterTilesArray, lettersGuessedArrayArray, turns, wins, losses) {
    //displays the letter tiles array in the html here
    villainLetters.textContent = letterTilesArray.join(" ");
    //also display current letters guessed
    letterGuessed.textContent = lettersGuessedArrayArray.join(" ");
    //display current turns
    turnsRemaining.textContent = turns;
    //display wins and losses
    lossesElement.textContent = losses;
    winsElement.textContent = wins;
};

//display if they won or lost
function changeWinLossCount(didTheyWin) {
    //display the reset button
    reset.style.display = "block";
    //increase win or loss number as appropriate
    if (didTheyWin) {
        wins++;
        console.log(wins);
    } else {
        losses++;
        console.log(losses);
    }
    gameOver = true;
    villain.textContent = villainToGuess;
    if (villainToGuess == "catwoman") {
        document.getElementById("changePic").src = "pictures/catwoman.jpg";
        document.getElementById("changePic").style = "opacity: initial";
        document.getElementById("heroPic").style = "left: 75%; top: 25%";
    } else if (villainToGuess == "penguin") {
        document.getElementById("changePic").src = "pictures/penguin.jpg";
        document.getElementById("changePic").style = "opacity: initial";
        document.getElementById("heroPic").style = "left: 69%; top: 25%";
    } else if (villainToGuess == "joker") {
        document.getElementById("changePic").src = "Pictures/joker.jpg";
        document.getElementById("changePic").style = "opacity: initial";
        document.getElementById("heroPic").style = "left: 73%; top: 19%";
    } else if (villainToGuess == "bane") {
        document.getElementById("changePic").src = "pictures/bane.jpg";
        document.getElementById("changePic").style = "opacity: initial";
        document.getElementById("heroPic").style = "left: 67%; top: 25%";
    } else if (villainToGuess == "poisonivy") {
        document.getElementById("changePic").src = "pictures/poisonivy.jpg";
        document.getElementById("changePic").style = "opacity: initial";
        document.getElementById("heroPic").style = "left: 75%; top: 19%";
    } else if (villainToGuess == "scarecrow") {
        document.getElementById("changePic").src = "pictures/scarecrow.jpg";
        document.getElementById("changePic").style = "opacity: initial";
        document.getElementById("heroPic").style = "left: 69%; top: 22%";
    } else if (villainToGuess == "twoface") {
        document.getElementById("changePic").src = "pictures/twoface.jpg";
        document.getElementById("changePic").style = "opacity: initial";
        document.getElementById("heroPic").style = "left: 75%; top: 19%";
    } else if (villainToGuess == "riddler") {
        document.getElementById("changePic").src = "pictures/riddler.jpg";
        document.getElementById("changePic").style = "opacity: initial";
        document.getElementById("heroPic").style = "left: 79%; top: 19%";
    } else if (villainToGuess == "mrfreeze") {
        document.getElementById("changePic").src = "pictures/mrfreeze.jpg";
        document.getElementById("changePic").style = "opacity: initial";
        document.getElementById("heroPic").style = "left: 67%; top: 25%";
    } else if (villainToGuess == "hush") {
        document.getElementById("changePic").src = "pictures/hush.jpg";
        document.getElementById("changePic").style = "opacity: initial";
        document.getElementById("heroPic").style = "left: 75%; top: 19%";
    } else if (villainToGuess == "harleyquinn") {
        document.getElementById("changePic").src = "pictures/harleyquinn.jpg";
        document.getElementById("changePic").style = "opacity: initial";
        document.getElementById("heroPic").style = "left: 72%; top: 25%";
    }
}

function checkLetterGuessed(letter) {
    var match = false;
    var emptyTilesLeft = false;
    //check against 
    //check for a match bylooping through the current villainTo Guess and if there's a match, replace the matching position in the letterTilesArray if there is
    for (var i = 0; i < villainToGuess.length; i++) {
        if (villainToGuess[i] == letter) {
            match = true;
            letterTiles[i] = letter;
        };
        if (letterTiles[i] == "_") {
            emptyTilesLeft = true;
        };
    };

    if (!match) {
        //if no match, subtract from turns
        turns--;
        //if turns = 0 call display won or lost
        if (turns == 0) {
            changeWinLossCount(false)
        }
    };
    if (!emptyTilesLeft) {
        //if no _ tiles left, display won
        changeWinLossCount(true);
    }
    //call displaycurrentlettertiles and pass array and current guesses
    displayCurrentLetterTiles(letterTiles, lettersGuessedArray, turns, wins, losses);

}


document.onkeyup = function (event) {
    // cheat to see what the villain is
    console.log(villainToGuess);
    //converting to lower case to make case insensitive
    var letterGuessed = event.key.toLowerCase();
    console.log(letterGuessed);
    //add to user guess array if not guessed already
    // JavaScript RegExp Reference to let user input letters only and the spacebar
    if (!lettersGuessedArray.includes(letterGuessed) && !gameOver && letterGuessed.match(/[a-z]/)) {
        lettersGuessedArray.push(letterGuessed);
        //call checkLetterGuessed if not
        checkLetterGuessed(letterGuessed);

    };

    // show what array we are on out of how many 



}









//brownie points
//check if this was guessed -if it was, tell the user - call tellPlayerLetterGuessed
function tellPlayerLetterGuessed() {
    //display that the letter was guessed already
}