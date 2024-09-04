import React, { useState, useEffect } from 'react';

const NumberGuessingGame = () => {
  const [targetNumber, setTargetNumber] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [guessesLeft, setGuessesLeft] = useState(15);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    setTargetNumber(Math.floor(Math.random() * 101));
    setGuessesLeft(15);
    setMessage('Guess a number between 0 and 100');
    setGameOver(false);
    setGuess('');
  };

  const handleGuess = () => {
    const numberGuess = parseInt(guess);
    if (isNaN(numberGuess) || numberGuess < 0 || numberGuess > 100) {
      setMessage('Please enter a valid number between 0 and 100');
      return;
    }

    setGuessesLeft(prevGuesses => prevGuesses - 1);

    if (numberGuess === targetNumber) {
      setMessage(`Congratulations! You guessed the number ${targetNumber}!`);
      setGameOver(true);
    } else if (guessesLeft === 1) {
      setMessage(`Game over! The number was ${targetNumber}.`);
      setGameOver(true);
    } else if (numberGuess < targetNumber) {
      setMessage('Too low! Try a higher number.');
    } else {
      setMessage('Too high! Try a lower number.');
    }

    setGuess('');
  };

  return (
    <div className="number-guessing-game">
      <h2>Number Guessing Game</h2>
      <p>{message}</p>
      <p>Guesses left: {guessesLeft}</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={gameOver}
        min="0"
        max="100"
      />
      <button onClick={handleGuess} disabled={gameOver}>Guess</button>
      {gameOver && <button onClick={startNewGame}>Play Again</button>}
    </div>
  );
};

export default NumberGuessingGame;