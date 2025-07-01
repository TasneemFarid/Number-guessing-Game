let playerOneDiv = document.getElementById('playerOne')
let playerTwoDiv = document.getElementById('playerTwo')

let inputOne = document.getElementById('inputOne')
let buttonOne = document.getElementById('buttonOne')

let inputTwo = document.getElementById('inputTwo')
let buttonTwo = document.getElementById('buttonTwo')

let result = document.getElementById('result')

let secretNumber = ''
let guessNumber = ''
let chances = 5

buttonOne.addEventListener('click', function(){
    secretNumber = inputOne.value
    playerOneDiv.style.display = 'none'
    playerTwoDiv.style.display = 'block'
    inputOne.value = ''
})

buttonTwo.addEventListener('click', function(){
    guessNumber = inputTwo.value

    if(guessNumber == secretNumber){
        result.innerHTML = "🎉 Congratulations, its a match! Player Two Won! 🎉"
    }
    else{
        chances--
        if(chances > 0){
            result.innerHTML = `❌ Wrong guess! ${chances} chances left! ❌`
        }
        else{
            result.innerHTML = "✨ Player One Won! ✨"
        }
    }

    inputTwo.value = ''
})


let shayan = ['red', 9, 'Mirpur', 'Pizza']

shayan.map(item=>{
    console.log(item)
})