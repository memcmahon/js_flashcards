var assert = require('chai').assert;
var Card = require('../lib/card');

describe('Card', function() {
  it('shoud be a function', function() {
    assert.isFunction(Card);
  });

  it('should instantiate a card', function() {
    var card = new Card("What is the capital of Alaska?", "Juneau", 'Geography');

    assert.isObject(card);
  });

  it('should have attributes', function() {
    var card = new Card("What is the capital of Alaska?", "Juneau", 'Geography');

    assert.equal(card.question, 'What is the capital of Alaska?');
    assert.equal(card.answer, 'Juneau');
    assert.equal(card.category, 'Geography');
  });
});
