// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let url = "https://cdn.glitch.global/";
let cards = [
    "5948c7b9-0b93-4de8-ba3f-2e73e90bc2a9/card1p.jpg?v=1710261910442",
    "5948c7b9-0b93-4de8-ba3f-2e73e90bc2a9/card2p.jpg?v=1710262007052",
    "5948c7b9-0b93-4de8-ba3f-2e73e90bc2a9/card3p.jpg?v=1710262015031",
    "5948c7b9-0b93-4de8-ba3f-2e73e90bc2a9/card4p.jpg?v=1710262020864 ",
    "e45c86aa-0f1e-4769-8214-c2051a151cd4/card1.jpg?v=1710262094046",
    "e45c86aa-0f1e-4769-8214-c2051a151cd4/card2.jpg?v=1710262100696",
    "e45c86aa-0f1e-4769-8214-c2051a151cd4/card3.jpg?v=1710262108026",
    "e45c86aa-0f1e-4769-8214-c2051a151cd4/card4.jpg?v=1710262111603"


];

// Button to Show Deck
buttonShow.onclick = function() {
    game.innerHTML = "";
    console.log("Showing the deck...");
  
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' class='card'>");
    }
    buttonShow.style.color="gray";
};

// Button to Double Deck
buttonDouble.onclick = function() {

    console.log("Deck has " + cards.length + " cards.");
    for (let card of cards) { 
        if (cards.length !==16) { 
            cards.push(card);
            game.insertAdjacentHTML ("beforeend", "<div style='background-image: url(" + url +
            card +
            ")' class='card'>");
        }
        buttonDouble.style.color="gray";
    }
    console.log ("Deck has " + cards.length + " cards.");
};

// Button to Shuffle Cards
buttonShuffle.onclick = function shuffle(array) {
     game.innerHTML = "";
   for (let card of cards) { 
        if (cards.length !==16) { 
            cards.push(card);
            game.insertAdjacentHTML ("beforeend", "<div style='background-image: url(" + url +
            card +
            ")' class='card'>");
            gameContainer.insertAdjacentHTML ("beforeend",);
      
        }
   }
   

};
/* ---------------------------------------------------
DON'T CHANGE THE Fisher-Yates SHUFFLE FUNCTION BELOW!
--------------------------------------------------- */
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

         
}






game.innerHTML = "";

// Button to Flip All Cards
buttonFlip.onclick = function() {

};

// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
});