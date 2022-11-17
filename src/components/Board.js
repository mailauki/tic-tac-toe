import React from "react";
import { Box, Button } from "@chakra-ui/react";

export default function Board() {
  // const board = Array.from(Array(9), (e,i))
  // const board = ["X", "", "", "", "", "", "", "", ""]
  const [board, setBoard] = React.useState(["", "", "", "", "", "", "", "", ""])
  const [turnCount, setTurnCount] = React.useState(0)

  const winCombos = [
    [0,1,2],  // Top row
    [3,4,5],  // Middle row
    [6,7,8],  // Bottom row
    [0,3,6],  // Left collumn
    [1,4,7],  // Middle collumn
    [2,5,8],  // Right collumn
    [2,4,6],  // Left diagonal
    [0,4,8]   // Right diagonal
  ]

  const xArray = board.reduce((a,e,i) => e === "X" ? a.concat(i) : a, [])
  const oArray = board.reduce((a,e,i) => e === "O" ? a.concat(i) : a, [])

  const isWin = winCombos.find((win) => {
    if(win.map((i) => xArray.includes(i)).every((el) => el === true)) {
      return win
    }
    else if(win.map((i) => oArray.includes(i)).every((el) => el === true)) {
      return win
    }
  })
  const isFull = turnCount === 9
  const isOver = isWin || isFull
  const winner = isWin ? `${board[isWin[0]]} wins!` : ""
  
  console.log(isOver && !isWin ? "Cat's game!" : winner)

  function handleAddPiece(e) {
    const newBoard = [...board]
    const token = turnCount % 2 == 1 ? "O" : "X"
    if(!isOver) {
      if(newBoard[e.currentTarget.id] === "") {
        newBoard.splice(e.currentTarget.id, 1, token)
        if(turnCount < 9) setTurnCount(turnCount + 1)
      } else {
        console.log("Can't move there!")
      }
      setBoard(newBoard)
    }
  }

  function handelReset() {
    setBoard(["", "", "", "", "", "", "", "", ""])
    setTurnCount(0)
  }

  return (
    <>
      <Button onClick={handelReset} colorScheme="teal">Reset Board</Button>
      <br />
      <Box className="Board" bg="white">
        {board.map((el, index) => (
          <Box  
            id={index} 
            className="Box"
            onClick={handleAddPiece}
          >
            <p className="Piece">{el}</p>
          </Box>
        ))}
      </Box>
    </>
  )
}