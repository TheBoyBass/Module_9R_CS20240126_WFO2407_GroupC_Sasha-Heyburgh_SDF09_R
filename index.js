// Decelerations

let firstCard = 10 // creating the first card variable and giving it a random value
let secondCard = 5 // creating the second card variable and giving it a random value
let cards = [firstCard, secondCard] //Creating the cards array
let sum = firstCard + secondCard // creating the sum variable and giving the addition values of card 1 and 2
let message = "" // creating the message variable and giving it an empty string value
let messageEl=document.getElementById("message-el") // Storing the message paragraph in a variable called messageEl
let sumEl = document.getElementById("sum-el") // Storing the sum paragraph in a variable called sumEl
let cardsEl = document.getElementById("card-el") // Storing the card paragraph in a variable called cardsEl
let NewCard = 6

// MainCode

// Adding Start game function  
function startGame() {
    renderGame()
}

// Adding render game function   
function renderGame() {
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
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

}

//New Card Function adds previous New card to Previous sum
function newCard() {
    sum= sum + NewCard
    cards.push(NewCard) //Updating current cards Array
    renderGame() //Calling startGame()
}
