let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

const guessInput = document.getElementById('guessInput');
const guessSubmit = document.getElementById('guessSubmit');
const Resultsec = document.querySelector('.resultsection');
const Remainguess = document.querySelector('.remain-guess');

const Prevguess = document.querySelector('.pre-guess');
const dk = document.querySelector('.dontknow');

const p = document.createElement('p');
let pichlaGuess = [];
let numguess = 1;

let GamePlay = true;

// Starting game
if (GamePlay) {
    guessSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        const Guess = parseInt(guessInput.value);
        console.log(Guess);
        validateGuess(Guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess) || guess < 0 || guess > 100) {
        alert("Invalid Response!");
        console.log(alert);
    } else {
        pichlaGuess.push(guess);
        checkGuess(guess);
        DisplayGuess(guess);
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
      
        endGame(true);  // Pass `true` for a win
    } else if (guess < randomNumber) {
        Displaymsg('Too low, try again!');
    } else if (guess > randomNumber) {
        Displaymsg('Too high, try again!');
    }

    // If max guesses have been reached and still no correct guess, trigger loss
    if (numguess === 11 && guess !== randomNumber) {
     
        endGame(false);  // Pass `false` for a loss
    }
}

function DisplayGuess(guess) {
    guessInput.value = '';
    Prevguess.innerHTML += `<h3>${guess}</h3>`;
    numguess++;
    Remainguess.innerHTML = `${11 - numguess}`;
}

function Displaymsg(message) {
    dk.innerHTML = `<br><span>Hint: </span><h1>${message}</h1>`;
}

function newGame() {
    const NewgameBtn = document.querySelector('#newGamebtn');
    NewgameBtn.addEventListener('click', () => {
        randomNumber = Math.floor(Math.random() * 100 + 1);
        pichlaGuess = [];
        numguess = 1;
        guessInput.removeAttribute('disabled');
        Resultsec.removeChild(p);
        Remainguess.innerHTML = `${11 - numguess}`;
        dk.innerHTML = '';
        Prevguess.innerHTML = '';
        GamePlay = true;
    });
}

function endGame(won) {
    guessInput.value = '';
    guessInput.setAttribute("disabled", ' ');
    p.classList.add('Button');
    p.innerHTML = `<h2 id="newGamebtn">Start New Game</h2>`;
    dk.innerHTML = '';  // Clear hint area
    Resultsec.appendChild(p);

    // Show winning or losing message based on `won` parameter
    if (won) {
        Displaymsg(`Congratulations! You guessed the number ${randomNumber}!`);
    } else {
        Displaymsg(`You lose 👎 -- The correct number was: ${randomNumber}`);
    }

    GamePlay = false;
    newGame();
}
