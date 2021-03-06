<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">

  <title>Number guessing game</title>

  <style>
    html {
      font-family: sans-serif;
    }

    body {
      width: 50%;
      max-width: 800px;
      min-width: 480px;
      margin: 0 auto;
    }

    .lastResult {
      color: white;
      padding: 3px;
    }
  </style>
</head>

<body>
  <h1>Number guessing game</h1>

  <p>We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer. We'll tell you if your guess was too high or too low.</p>

  <div class="form">
    <label for="guessField">Enter a guess: </label>
    <input type="text" id="guessField" class="guessField">
    <input type="submit" value="Submit guess" class="guessSubmit">
  </div>

  <div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
  </div>

  <script>
    // Stablish variables and constants that we need to store the data that our program will use.

    //Mathematic algoritm to get a random number.
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    //These constants save a reference to the resulting parragraphs of the HTML and will be used to insert values ahead in the code.

    const guesses = document.querySelector('.guesses');
    const lastResult = document.querySelector('.lastResult');
    const lowOrHi = document.querySelector('.lowOrHi');

    //These constants save references to the input text and the "send" button, and will be used to control the player's responses.

    const guessSubmit = document.querySelector('.guessSubmit');
    const guessField = document.querySelector('.guessField');

    let guessCount = 1;
    let resetButton;

    guessField.focus();

    function checkGuess() {

      let userGuess = Number(guessField.value);
      if (guessCount === 1) {
        guesses.textContent = "Intentos anteriores: ";
      }
      guesses.textContent += userGuess + " ";

      if (userGuess === randomNumber) {
        lastResult.textContent = "¬°Felicidades! ¬°Lo adivinaste!";
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = " ";
        setGameOver();
      } else if (guessCount === 10) {
        lastResult.textContent = "¬°¬°¬°Fin del juego!!!";
        setGameOver();
      } else {
        lastResult.textContent = "¬°Incorrecto!";
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
          lowOrHi.textContent = "¬°El numero es muy bajo!";
        } else if (userGuess > randomNumber) {
          lowOrHi.textContent = "¬°El numero es muy grande!";
        }
      }
      guessCount++;
      guessField.value = " ";
      guessField.focus();
    }
    guessSubmit.addEventListener('click', checkGuess);

    function setGameOver() {
      guessField.disabled = true;
      guessSubmit.disabled = true;
      resetButton = document.createElement('button');
      resetButton.textContent = 'Iniciar nuevo juego';
      document.body.append(resetButton);
      resetButton.addEventListener('click', resetGame);
    }

    function resetGame() {
      guessCount = 1;

      const resetParas = document.querySelectorAll('.resultParas');
      for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
      }

      resetButton.parentNode.removeChild(resetButton);

      guessField.disabled = false;
      guessSubmit.disabled = false;
      guessField.value = '';
      guessField.focus();

      lastResult.style.backgroundColor = 'white';

      randomNumber = Math.floor(Math.random() * 100) + 1;
    }
  </script>
</body>

</html>
