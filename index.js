// Decelerations

let firstCard = 12
let secondCard = 10
let sum = firstCard + secondCard
let message = "" 
let messageEl=document.getElementById("message-el")
console.log(messageEl)
let sumEl = document.getElementById("sum-el")

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

    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
}
