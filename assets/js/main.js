//Letter choices available
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
let wins = 0;                                                                                                                                       ;
let losses = 0;
let guesses = 9;
let guessesLeft = 9;
let guessedLetters = [];
let letterToGuess = null;

document.querySelector("#wins").innerHTML = `Wins: ${wins}`;
document.querySelector("#losses").innerHTML = `Losses: ${losses}`;
document.querySelector("#guessLeft").innerHTML = guessLeft;
document.querySelector("#guessLeft").innerHTML = guessLeft;
document.querySelector("#guessedLetters").innerHTML = guessedLetters;
//Lets the computer select a random letter from the available choices
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);
//document.querySelector('.pyschic').style.display = "none";
//Allows the user 9 guesses
// guesses = guesses || 9
function updateGuessesLeft() {
    // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

function updateLetterToGuess() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

function updateGuessesSoFar() {
    // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
    document.querySelector('#guessedLetters').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// Function will be called when we reset everything
var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

//When key is released it becomes the users guess
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess)
    if (computerGuess === userGuess) {
        
       alert("You Win!")
       reset();
       wins++;
       document.querySelector('#wins').innerHTML = "Wins: " + wins;
    } else if (computerGuess !== userGuess) {
        //If the Users choice was an alphabet char then update guesses left and add users guess to the array of guessed letters
        guessesLeft--;
        guessedLetters.push(userGuess);
        updateGuessesLeft();
        updateGuessesSoFar();
        //define win game code
        if (guessesLeft > 0) {
            if (userGuess == letterToGuess) {
                wins++;
                
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                
            }
            //define lose
        } else if (guessesLeft == 0) {
            
            alert("You lose!")
            reset();
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
         

        }
        
        return false;
    } else {
        alert("Oops, we have an error");
    }

};