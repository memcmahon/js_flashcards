class Deck {
  constructor(cards) {
    this.cards = cards
  }

  count() {
    return this.cards.length
  }

  cards_in_category(category) {
    var cards_in_category = [];
    this.cards.forEach(function(card, index){
      if(card.category === category) {
        cards_in_category.push(card);
      };
    });
    return cards_in_category;
  }
}

module.exports = Deck
