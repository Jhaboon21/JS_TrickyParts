function guessingGame() {
    // hidden answer that is a whole number between 0 and 99
    const ANSWER = Math.floor(Math.random() * 100);
    let finished = false;
    
    // count how many guesses that player has made
    let numGuesses = 0;

    return function guess(num) {
        if (finished) return "The game is over, you've finished.";
        
        numGuesses++;

        if (num === ANSWER) {
            finished = true;
            // ternary for string on first or multiple guesses
            const guess = numGuesses === 1 ? "guess" : "guesses";
            return `You Win! You guessed ${num} in ${numGuesses} ${guess}.`;
        }
        if (num < ANSWER) return `${num} is too low!`;
        if (num > ANSWER) return `${num} is too high!`;
    }
}

module.exports = { guessingGame };
