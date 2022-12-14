var carousel = document.getElementById("carousel");
var cards = carousel.children;
var currentCard = 0;

function showNextCard() {
  // Move the current card to the right by 100% (the width of the carousel)
  cards[currentCard].style.left = "-100%";
  // Increment the current card index
  currentCard = (currentCard + 1) % cards.length;
  // Move the next card to the left by 100% (the width of the carousel)
  cards[currentCard].style.left = "0%";
}

// Show the next card every 3 seconds
setInterval(showNextCard, 3000);
let const .mp
``