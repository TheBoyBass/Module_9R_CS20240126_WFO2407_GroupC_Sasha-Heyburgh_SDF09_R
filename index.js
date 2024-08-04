// Decelerations

let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard


// MainCode
console.log(sum) //sum output

//settingup winning and losing conditions of the game
if (sum <= 20) {
    console.log("You do not have Blackjack. You need to draw another card")
    } else if (sum === 21) {
        console.log("You have Blackjack! Congratulations!")
        } else {
            console.log("You bust! Game over!")
            }


