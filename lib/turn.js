class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  isCorrect() {
    return this.guess === this.card.answer;
  }

  feedback() {
    if(this.isCorrect()) {
      return 'Correct!';
    } else {
      return 'Incorrect :(';
    };
  }
}

module.exports = Turn
