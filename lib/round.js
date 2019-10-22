var Turn = require('./turn')

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = [];
  }

  current_card() {
    return this.deck.cards[0];
  }

  take_turn(guess) {
    var new_turn = new Turn(guess, this.current_card());
    this.turns.push(new_turn);
    this.deck.cards.shift();
    return new_turn;
  }

  number_correct(turns = this.turns) {
    var count = 0
    turns.forEach(function(turn, index) {
      if(turn.isCorrect() === true) {
        ++count
      };
    });
    return count;
  }

  percent_correct(turns = this.turns) {
    return ((this.number_correct(turns) / turns.length) * 100).toFixed(2);
  }

  number_correct_by_category(category) {
    var turns = this.turns_in_category(category);
    return this.number_correct(turns);
  }

  percent_correct_by_category(category) {
    var turns = this.turns_in_category(category);
    return this.percent_correct(turns);
  }

  turns_in_category(category) {
    var turns = [];
    this.turns.forEach(function(turn, index) {
      if(turn.card.category === category) {
        turns.push(turn)
      };
    });
    return turns;
  }
}

module.exports = Round
