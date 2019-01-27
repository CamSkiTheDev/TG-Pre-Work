let currentCard;
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
while (currentCard != 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}

//Learned how to create a while loop and set its stop condition.