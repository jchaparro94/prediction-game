let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let guessedLetters = [];
let letterToGuess;

let guessesLeft = 9;

let wins = 0;
let losses = 0;

//Three functions for updating the nubmer of guesses, the letter to guess and the guessed letters array
let updateGuessesLeft = () => {
    document.querySelector('#guesses-left').innerHTML = guessesLeft;
};

let updateLetterToGuess = () => {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

let lettersGuessed = () => {
    document.querySelector('#guesses-so-far').innerHTML = guessedLetters.join(", ");
};

//reset game after wining or losing
let reset = () => {
    guessesLeft = 9;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    lettersGuessed();
};

//function to start when the page loads
updateLetterToGuess();
updateGuessesLeft();

//
document.onkeydown = () => {
    guessesLeft--;
    let letter = String.fromCharCode(event.which).toLowerCase();
    guessedLetters.push(letter);
    updateGuessesLeft();
    lettersGuessed();
    // console.log(letterToGuess);
        if(letter === letterToGuess) {
            wins++
            document.querySelector("#wins").innerHTML = wins;

            reset();
        }
        if(guessesLeft === 0) {
            losses++;
            document.querySelector("#losses").innerHTML = losses;

            reset();
        }
};