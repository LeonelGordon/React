import React, { useState } from "react"
import confetti from "canvas-confetti" 
import { Square } from "./components/Square"
import { TURNS } from "./constants"
import { checkWinnerFrom, checkEndGame} from "./logic/board"
import { WinnerModal } from "./components/WinnerModal"
import { saveGameToStorage,resetGameStorage } from "./logic/storage/index.js"


function App() {
  const [board,setBoard]= useState (() => {
    const boardFromStorage= window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : 
    (Array(9).fill(null)) 
    })

  const [turn, setTurn] = useState (() => {
    const turnFromStorage= window.localStorage.getItem('turn')
    return turnFromStorage ?? (TURNS.x)
  })

  const [winner, setWinner] =useState(null) //null= no hay ganador, false= empate
  
  

  const resetGame= () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)

    resetGameStorage()
  }

  const updateBoard= (index) => {
      //No actualizamos esta posicion si ya tiene un valor
      if (board[index] || winner) return
    //Actualizamos el tablero
      const newBoard = [...board]
          newBoard[index] = turn
        setBoard(newBoard)
        //Cambia el turno
      const newTurn= turn === TURNS.x ? TURNS.o : TURNS.x
      setTurn(newTurn)

      saveGameToStorage({
        board: newBoard,
        turn: newTurn
      })
      //Revisamos si hay ganador
      const newWinner= checkWinnerFrom(newBoard)
      if (newWinner) {
        confetti()
        setWinner(newWinner)
      } else if (checkEndGame(newBoard)){
        setWinner (false)
      }
  }

  return (
    <main className="board">
        <h1>3 EN LINEA</h1>
        <button onClick={resetGame}> Volver a jugar</button>
        <section className="game">
          {
            board.map((square, index) => {
              return (
                <Square
                key= {index}
                index={index}
                updateBoard={updateBoard}
                >
                  {square}
                </Square>
              )
            }
            )
          }
        </section>

        <section className="turn">
          <Square isSelected={turn === TURNS.x}> {TURNS.x} </Square>
          <Square isSelected={turn === TURNS.o}> {TURNS.o} </Square>
        </section>

      <WinnerModal resetGame={resetGame} winner={winner}/>

    </main>
  )
}

export default App
