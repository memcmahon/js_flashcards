var assert = require('chai').assert;
var Card = require('../lib/card');
var Deck = require('../lib/deck');
var Round = require('../lib/round');

describe('Round', function() {
  var card1;
  var card2;
  var card3;
  var deck;
  var round;

  beforeEach(function(){
    card1 = new Card("What is the capital of Alaska?", "Juneau", 'Geography');
    card2 = new Card("The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", "Mars", 'STEM');
    card3 = new Card("Describe in words the exact direction that is 697.5° clockwise from due north?", "North north west", 'STEM');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck)
  });

  it('should be a function', function() {
    assert.isFunction(Round);
  });

  it('should create a round', function() {
    assert.isObject(round);
  });

  it('should have attributes', function() {
    assert.equal(round.deck, deck);
    assert.deepEqual(round.turns, []);
  });

  it('should have current card', function() {
    assert.equal(round.current_card(), card1);
  });

  it('should create turns', function() {
    var turn = round.take_turn('Juneau');

    assert.equal(turn.guess, 'Juneau');
    assert.equal(turn.card, card1);
    assert.equal(round.current_card(), card2);
  });

  it('should count correct turns', function() {
    round.take_turn('Juneau');
    round.take_turn('Venus');

    assert.equal(round.number_correct(), 1);
  });

  it('should calculate percent correct', function() {
    round.take_turn('Juneau');
    round.take_turn('Venus');
    round.take_turn('North north west');

    assert.equal(round.percent_correct(), 66.67);
  });

  it('should count correct turns by category', function() {
    round.take_turn('Juneau');
    round.take_turn('Venus');
    round.take_turn('North north west');

    assert.equal(round.number_correct_by_category('STEM'), 1);
  });

  it('should calculate percent correct by category', function() {
    round.take_turn('Juneau');
    round.take_turn('Venus');
    round.take_turn('North north west');

    assert.equal(round.percent_correct_by_category('STEM'), 50.0);
  });

  it('should get turns by category', function() {
    var turn1 = round.take_turn('Juneau');
    var turn2 = round.take_turn('Venus');
    var turn3 = round.take_turn('North north west');

    assert.equal(round.turns_in_category('STEM')[0], turn2)
    assert.equal(round.turns_in_category('STEM')[1], turn3)
  })
});
