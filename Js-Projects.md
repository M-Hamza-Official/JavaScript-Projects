## Number Guessing Game:



## Html

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Guessing App</title>
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <nav>
        <h1>Guess Me.</h1>
    </nav>
    <header>
        <h1>Game Instructions</h1>
        <ul>
            <li>Guess a number between 1 and 100.</li>
            <li>You have 10 attempts to guess the correct number.</li>
            <li>After each guess, you’ll get feedback indicating if your guess is too high or too low.</li>
            <li>If you guess correctly within the attempts, you win! Otherwise, the game will reveal the correct number at the end.</li>
        </ul>
    </header>
    
    <div class="main-box">
        <div class="container">
    <form action="">
<label for="GuessField"  id="guess">Guess a Number</label>
<input type="text" id="guessInput" class="guess-Input">
<input type="submit" id="guessSubmit" class="guess-Input" value="Submit Guess"  >
    </form>
    <div class="resultsection">
        <p>Previous guess: <span class="pre-guess"></span></p>
        <p>Remaining Guess: <span class="remain-guess">10</span></p>
        <p class="dontknow"></p>
    </div>
    </div>
</div>
    <script src="./script.js"></script>
</body>
</html>
```
## Css
```css
/* Reset some default styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

/* Full height of viewport */
html, body {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10%;
    justify-content: center;
    background-color: #f0f0f5;
}

/* Main box that holds everything */
.main-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 400px;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

/* Container for form and result section */
.container {
    width: 100%;
}

/* Form styling */
form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
}

/* Label for input field */
#guess {
    font-size: 1.2rem;
    color: #333333;
    margin-bottom: 5px;
}

/* Input fields styling */
.guess-Input {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
}

/* Submit button styling */
#guessSubmit {
    background-color: #4CAF50;
    color: #ffffff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
}

#guessSubmit:hover {
    background-color: #45a049;
}
#guessSubmit:focus {
    border:2px solid black ;
}
header{
    width: 40%;
}
nav h1{
    position: absolute;
    top: 0;
    padding-top: 20px;
    color: #45a049;
    font-weight: bolder;
    font-family:fantasy;
    font-size: 35px;
    
}
/* Result section styling */
.resultsection {
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 4px;
    border: 1px solid #ddd;
    margin-top: 10px;
}

.resultsection p {
    font-size: 1rem;
    color: #333333;
    margin-bottom: 8px;
}

/* Previous guess and remaining guess styling */
.pre-guess, .remain-guess {
    font-weight: bold;
    color: #4CAF50;
}

/* Message styling */
.dontknow h1  {
    font-size: 1.2rem;
    color: #FF5722;
    text-align: center;
    margin-top: 10px;
}
#newGamebtn{
    color: black;
    text-align: center;
    margin-top: 10px;
    cursor: pointer;
    text-decoration: underline;
}

/* Responsive styling */
@media (max-width: 400px) {
    .main-box {
        padding: 15px;
    }
  
    
    #guess {
        font-size: 1rem;
    }

    .resultsection p {
        font-size: 0.9rem;
    }
}
```
Javascript

```javascript
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
```
