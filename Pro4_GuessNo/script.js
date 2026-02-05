const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
       const guess = parseInt(userInput.value)
       validateGuess(guess)
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid no')
    }else if(guess < 1){
        alert("Please enter a valid number")
    }
    else if(guess > 100){
        alert("Please enter a number less than 100")
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage("You guesd right")
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is to low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is to high`)
    }
}
function displayGuess(guess){
    userInput.value = ``
    guessSlot.innerHTML += `${guess}`
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    
}

function newGame(){

}

