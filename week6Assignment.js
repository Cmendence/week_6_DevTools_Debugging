import Deck  from "./deck.js"


// class Player {
//     constructor(playerName, playerDeck, playerPoints)
// }
class Player {
    constructor(name){
        this.name = name;
        this.points = 0;
        this.playerDeck = [];
    }

}
let playerOne = new Player ('Bobby');
let playerTwo = new Player ('Magnus');


const cardValueMap = {
        '2': { rank: '2', value: 2 },
        '3': { rank: '3', value: 3 },
        '4': { rank: '4', value: 4 },
        '5': { rank: '5', value: 5 },
        '6': { rank: '6', value: 6 },
        '7': { rank: '7', value: 7 },
        '8': { rank: '8', value: 8 },
        '9': { rank: '9', value: 9 },
        '10': { rank: '10', value: 10 },
        'J': { rank: 'Jack', value: 11 },
        'Q': { rank: 'Queen', value: 12 },
        'K': { rank: 'King', value: 13 },
        'A': { rank: 'Ace', value: 14 },
    };

  start();

function start(){
    console.log(`Get ready to play....WAR!
    
    `)
    const deck = new Deck()
    deck.shuffle()
    const deckMid = Math.ceil(deck.numberOfCards / 2);
    playerOne.playerDeck.push(...deck.cards.slice(0, deckMid));
    playerTwo.playerDeck.push(...deck.cards.slice(deckMid, deck.numberOfCards));
    stop = false
}


class Game {
    playWar() {
        for (let i = 0; i < 26; i++) {
            let playerOneCard = `${cardValueMap[playerOne.playerDeck[i].value].rank} of ${playerOne.playerDeck[i].suit}`;
            let playerTwoCard = `${cardValueMap[playerTwo.playerDeck[i].value].rank} of ${playerTwo.playerDeck[i].suit}`;
            let playerOneRank = cardValueMap[playerOne.playerDeck[i].value].value;
            let playerTwoRank = cardValueMap[playerTwo.playerDeck[i].value].value;

            console.log(`${playerOne.name}'s card:  ${playerOneCard}`);
            console.log(`${playerTwo.name}'s card: ${playerTwoCard}`);
        if (playerOneRank > playerTwoRank) {
            playerOne.points ++;
        } else if (playerOneRank < playerTwoRank) {
            playerTwo.points ++;
        } else {
            console.log('Tie hand!');
        }
        
        console.log(`Score: ${playerOne.name}:  ${playerOne.points}
       ${playerTwo.name}: ${playerTwo.points}
        `);
        }

    }

}

let playWar = new Game();
playWar.playWar()

if (playerOne.points > playerTwo.points){
    console.log(`${playerOne.name} wins with ${playerOne.points} points!!!`);
}else if (playerOne.points < playerTwo.points){
    console.log(`${playerTwo.name} wins with ${playerTwo.points} points!!!`);
} else {
    console.log('Tie game!');
}