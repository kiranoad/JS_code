let randonNumber = parseInt(Math.random()* 100 + 1);

const submitButton = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const lastRemining = document.querySelector(".lastResult");
const lowOrHight = document.querySelector(".lowOrHi");
const StartOver = document.querySelector(".resultParas");
const p = document.createElement('p');


let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submitButton.addEventListener('click',function(event){
        event.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        
        validateGuess(guess)
    })
}

function validateGuess (guess){
    if(isNaN(guess)){
        alert('Plaese enter the valid number')
    }
    else if(guess < 1){
        alert('Plaese enter a number more than 1')
    }
    else if(guess > 100){
        alert('Plaese enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over.Random number was ${randonNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    //
    if(guess === randonNumber){
        displayMessage(`You Guessed it right`)
        endGame()     
    }
    else if(guess < randonNumber){
        displayMessage(`Number is TOOO Low`)
    }
    else if(guess > randonNumber){
        displayMessage(`Number is TOOO High`)
    }
}

function displayGuess(guess){
    //
    userInput.value = ''
    guessSlot.innerHTML += `${guess},`
    numGuess++;
    lastRemining.innerHTML = `${11 - numGuess},`

}

function displayMessage(message){
    //
    lowOrHight.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<h2 id ="newGame">Start New Game</h2>`;
    StartOver.appendChild(p);
    playGame = false;
    newGame();

}

function newGame(){
   const newGameButton = document.querySelector('#newGame')
   newGameButton.addEventListener("click", function(event){
        randonNumber = parseInt(Math.random()* 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = ''
        lastRemining.innerHTML = `${11 - numGuess},`
        userInput.removeAttribute("disabled");
        StartOver.removeChild(p);

        playGame = true;

   })

}




