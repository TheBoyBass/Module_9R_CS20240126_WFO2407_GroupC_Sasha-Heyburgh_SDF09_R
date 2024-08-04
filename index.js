// Decelerations

let firstCard = 12 // creating the first card variable and giving it a random value
let secondCard = 10 // creating the second card variable and giving it a random value
let sum = firstCard + secondCard // creating the sum variable and giving the addition values of card 1 and 2
let message = "" // creating the message variable and giving it an empty string value
let messageEl=document.getElementById("message-el") // Storing the message paragraph in a variable called messageEl
let sumEl = document.getElementById("sum-el") // Storing the sum paragraph in a variable called sumEl
let cardsEl = document.getElementById("card-el") // Storing the card paragraph in a variable called cardsEl

// MainCode

// Adding start game function   
function startGame() {
//settingup winning and losing conditions of the game
    if (sum <= 20) {
        message = "You do not have Blackjack. You need to draw another card"
    } else if (sum === 21) {
        message = "You have Blackjack! Congratulations!"
    } else {
        message = "You bust! Game over!"
    }       

    // Game status messages printed out on screen

    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
}
