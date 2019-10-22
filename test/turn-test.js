var assert = require('chai').assert;
var Card = require('../lib/card');
var Turn = require('../lib/turn');

describe('Turn', function() {
  it('should be a function', function() {
    assert.isFunction(Turn);
  });

  it('should instantiate a turn', function() {
    var card = new Card("What is the capital of Alaska?", "Juneau", 'Geography');
    var turn = new Turn('Juneau', card);

    assert.isObject(turn);
  });

  it('should have attributes', function() {
    var card = new Card("What is the capital of Alaska?", "Juneau", 'Geography');
    var turn = new Turn('Juneau', card);

    assert.equal(turn.card, card)
    assert.equal(turn.guess, 'Juneau')
  });

  it('should evaluate correctness', function() {
    var card = new Card("What is the capital of Alaska?", "Juneau", 'Geography');
    var correct_turn = new Turn('Juneau', card);
    var incorrect_turn = new Turn('Juno', card);

    assert.equal(correct_turn.isCorrect(), true);
    assert.equal(incorrect_turn.isCorrect(), false);
  });

  it('should give feedback', function() {
    var card = new Card("What is the capital of Alaska?", "Juneau", 'Geography');
    var correct_turn = new Turn('Juneau', card);
    var incorrect_turn = new Turn('Juno', card);

    assert.equal(correct_turn.feedback(), 'Correct!');
    assert.equal(incorrect_turn.feedback(), 'Incorrect :(');
  });
});
