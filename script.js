let cardOne = randomCardNum();
let cardTwo = randomCardNum()
let cards = [cardOne, cardTwo]
let sum = cardOne + cardTwo;
const btnStart = document.querySelector('.btn-start');
const messageEL = document.querySelector('#message-el');
const cardsEl = document.querySelector('#cards-el');
const sumEl = document.querySelector("#sum-el");
const newCard = document.querySelector('.new-card');
let hasBlackJack = false;
let isAlive = true;


btnStart.addEventListener('click', (startGame))

function startGame() {
    if( sum <= 20) {
        messageEL.textContent = 'want to draw another card?';
   } else if(sum === 21) {
    messageEL.textContent = "You've got a Blackjack!";
    hasBlackJack = true;
   } else {
    messageEL.textContent = "You're out of the game!";
    isAlive = false;
   }
   cardsEl.textContent = `Cards: `
   sumEl.textContent = `Sum: ${sum}`
   for(let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
   }
}

function randomCardNum() {
    const randomNum = Math.floor(Math.random()*13) + 1;
   return randomNum;
}


newCard.addEventListener('click', () => {
    if(isAlive === true && hasBlackJack === false) {
        let card = randomCardNum();
        cards.push(card);
        sum += card;
        startGame();
    }

})