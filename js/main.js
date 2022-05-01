const gameCell = document.querySelectorAll('[game-cell]')
const gameBoard = document.getElementById('game-board')
let oTurn
let X = 'x'
let O = 'o'

 gameCell.forEach(cell => {
     //Only fire the event listener once 
     cell.addEventListener('click', handleClick, {once: true})
 })


 function handleClick(e){
      const clickedCell = e.target
      const currentClass = oTurn ? O : X
      placeMark(clickedCell, currentClass)
      

      swapTurns()
      //Need the hover class to be based on who's upcoming turn it is
      setBoardHoverClass()

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

    oTurn ? gameBoard.classList.add(O) ? gameBoard.classList.add(X)

}

  

