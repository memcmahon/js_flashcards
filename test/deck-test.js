var assert = require('chai').assert;
var Card = require('../lib/card')
var Turn = require('../lib/turn')
var Deck = require('../lib/deck')

describe('Deck', function() {
  it('should be a function', function() {
    assert.isFunction(Deck);
  })

  it('should create a deck', function() {
    var card1 = new Card("What is the capital of Alaska?", "Juneau", 'Geography');
    var card2 = new Card("The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", "Mars", 'STEM');
    var card3 = new Card("Describe in words the exact direction that is 697.5° clockwise from due north?", "North north west", 'STEM');
    var deck = new Deck([card1, card2, card3]);

    assert.isObject(deck);
  })

  it('should have attributes', function() {
    var card1 = new Card("What is the capital of Alaska?", "Juneau", 'Geography');
    var card2 = new Card("The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", "Mars", 'STEM');
    var card3 = new Card("Describe in words the exact direction that is 697.5° clockwise from due north?", "North north west", 'STEM');
    var deck = new Deck([card1, card2, card3]);

    assert.equal(deck.cards[0], card1);
    assert.equal(deck.cards[1], card2);
    assert.equal(deck.cards[2], card3);
  })

  it('should count its cards', function() {
    var card1 = new Card("What is the capital of Alaska?", "Juneau", 'Geography');
    var card2 = new Card("The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", "Mars", 'STEM');
    var card3 = new Card("Describe in words the exact direction that is 697.5° clockwise from due north?", "North north west", 'STEM');
    var deck = new Deck([card1, card2, card3]);

    assert.equal(deck.count(), 3);
  })

  it('should get cards by category', function() {
    var card1 = new Card("What is the capital of Alaska?", "Juneau", 'Geography');
    var card2 = new Card("The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", "Mars", 'STEM');
    var card3 = new Card("Describe in words the exact direction that is 697.5° clockwise from due north?", "North north west", 'STEM');
    var deck = new Deck([card1, card2, card3]);

    assert.equal(deck.cards_in_category('STEM')[0], card2)
    assert.equal(deck.cards_in_category('STEM')[1], card3)
    assert.equal(deck.cards_in_category('Geography')[0], card1)
  assert.deepEqual(deck.cards_in_category('popculture'), [])
  })
})
