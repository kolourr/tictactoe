const gameCell = document.querySelectorAll('[game-cell]')
const gameBoard = document.getElementById('game-board')
const whoWonPopUp = document.querySelector('[game-message]')
const whoWonPopUpMessage = document.querySelector('[who-won]')
const restartButton = document.querySelector('[restart]')


let oTurn
let X = 'x'
let O = 'o'

const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


startGame()

restartButton.addEventListener('click', startGame)

function startGame(){
    oTurn = false
    gameCell.forEach(cell => {
        cell.classList.remove(X)
        cell.classList.remove(O)
        cell.removeEventListener('click', handleClick)
        //Only fire the event listener once 
        cell.addEventListener('click', handleClick, {once: true})
    })
    setBoardHoverClass()
    whoWonPopUp.classList.remove('show')
}



 function handleClick(e){
      const clickedCell = e.target
      const currentClass = oTurn ? O : X
      placeMark(clickedCell, currentClass)
      
      if(checkWinner(currentClass)){
        console.log("Winner")
        endGame(false)
      }else if(isDraw()){
        console.log("Draw")
        endGame(true)
      }
      else {
        console.log("Switching Turns")
        swapTurns()
        //Need the hover class to be based on who's upcoming turn it is
        setBoardHoverClass()
      }

 }

 function isDraw(){
     return [...gameCell].every(cell => {
       return cell.classList.contains(X) ||cell.classList.contains(O)
     })
 }



 
 function endGame(draw){
    draw ? whoWonPopUpMessage.innerText = `Draw!` : whoWonPopUpMessage.innerText = `${oTurn ? "O's" : "X's"} Wins!`
    whoWonPopUp.classList.add('show')
 }

 function checkWinner(currentClass){
    return winningCombinations.some(combinations => {
        return combinations.every(index => {
            return gameCell[index].classList.contains(currentClass)

        })
    })
 }



 


 function placeMark(clickedCell, currentClass){
    clickedCell.classList.add(currentClass)
 }

 function swapTurns(){
    oTurn = !oTurn
}

function setBoardHoverClass(){   
    gameBoard.classList.remove(O)
    gameBoard.classList.remove(X)
    oTurn ? gameBoard.classList.add(O) : gameBoard.classList.add(X)

}

  

