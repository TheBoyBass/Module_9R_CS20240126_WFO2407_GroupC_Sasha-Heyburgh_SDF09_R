// Decelerations
let cards = [] //Setting empty cards array
let sum = 0// creating the sum variable and giving the addition values of card 1 and 2
let hasBlackJack = false
let isAlive = false
let message = "" // creating the message variable and giving it an empty string value
let messageEl=document.getElementById("message-el") // Storing the message paragraph in a variable called messageEl
let sumEl = document.getElementById("sum-el") // Storing the sum paragraph in a variable called sumEl
let cardsEl = document.getElementById("card-el") // Storing the card paragraph in a variable called cardsEl
let playerEl = document.getElementById("player-el")

//object carrying player details
let player = {
    Name: "Lindo",
    Chips: 145
}

// MainCode

// Displaying the player name
playerEl.textContent = player.Name + ": $" + player.Chips 

// function to get random number between from 1 to 13
function getRandom() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
        } else if (randomNumber == 1) {
            return 11
            } else {
                return randomNumber
            }

            
    
}
// Adding Start game function  
function startGame() {
    isAlive = true
    let firstCard = getRandom() // creating the first card variable and giving it a random value
    let secondCard = getRandom() // creating the second card variable and giving it a random value
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard // adding the first and second card values to the sum variable
    renderGame()
}

// Adding render game function   
function renderGame() {
//settingup winning and losing conditions of the game
    if (sum <= 20) {
        message = "You do not have Blackjack. You need to draw another card"
    } else if (sum === 21) {
        message = "You have Blackjack! Congratulations!"
        hasBlackJack = true // Update hasBlackJack to true
        player.Chips += 10 // Add $10 to player's chips
        playerEl.textContent = player.Name + ": $" + player.Chips 
    } else {
        message = "You bust! Game over!"
        isAlive = false // Update is alive to to false
        player.Chips -= 20 // Subtract $20 from player's chips
        playerEl.textContent = player.Name + ": $" + player.Chips 

    }       

    // Game status messages printed out on screen

    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    
    // For loop updates cards in game
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

}

//New Card Function adds previous New card to Previous sum
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let NewCard = getRandom()
        sum += NewCard
        cards.push(NewCard) //Updating current cards Array
        renderGame() //Calling startGame()

    }
}
