// Decelerations

let firstCard = 12
let secondCard = 9
let sum = firstCard + secondCard
let message = ""

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
            

console.log("The sum of your cards is" ,sum) //sum output
console.log(message) //message output}
}
