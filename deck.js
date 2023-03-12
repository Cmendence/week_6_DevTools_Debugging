const suits = ['♠', '♥', '♣', '♦'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];


// deck takes in cards. We have used the freshDeck function to return a flatmapped array of the new deck with suits
export default class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards;
}

// shorthand for this.cards.length
get numberOfCards(){
    return this.cards.length;
}

// Fisher Yates shuffle. Start at the back, take the current card [i], get a random integer position that we have 
// not yet accessed in the deck, and swap those cards.
 shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i-- ) {
       const newIndex = Math.floor(Math.random() * (i + 1));
       const oldValue = this.cards[newIndex];
       this.cards[newIndex] = this.cards[i];
       this.cards[i] = oldValue;
    }
 }

}

// card takes in suit and value
class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

function freshDeck() {
    return suits.flatMap(suit => {
        return values.map(value =>{
            return new Card(suit, value)
        });
    });
}


export { Deck }