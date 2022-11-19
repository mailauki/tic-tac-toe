import React from "react";
import { useLocation } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import Header from './Header';
import Board from './Board';
import Popup from './Popup';

export default function Game() {
  const location = useLocation()
  const pathname = location.pathname

  // const [tokenColor, setTokenColor] = React.useState("blue-green")
  const [xTokenColor, setXTokenColor] = React.useState("blue-green")
  const [oTokenColor, setOTokenColor] = React.useState("blue-green")

  const [board, setBoard] = React.useState(["", "", "", "", "", "", "", "", ""])
  const newBoard = [...board]
  const [turnCount, setTurnCount] = React.useState(0)
  const token = turnCount % 2 == 1 ? "O" : "X"
  const [wins, setWins] = React.useState(0)

  const [alert, setAlert] = React.useState(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

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

  const hasXConsecutive = winCombos.filter((win) => {
    if(win.map((i) => xArray.includes(i)).filter((el) => el === true).length === 2) {
      return win
    }
  })
  const hasOConsecutive = winCombos.filter((win) => {
    if(win.map((i) => oArray.includes(i)).filter((el) => el === true).length === 2) {
      return win
    }
  })

  const nextBestXMove = hasXConsecutive.map((win) => win.filter((i) => {
    if(board[i] === "") return i
  })).flat()[0]
  const nextBestOMove = hasOConsecutive.map((win) => win.filter((i) => {
    if(board[i] === "") return i
  })).flat()[0]

  const emptyIndexes = board.map((piece, i) => {
    if(piece === "") return i
  }).filter((i) => i !== undefined)

  const randomMove = emptyIndexes[Math.floor(Math.random()*emptyIndexes.length)]

  React.useEffect(() => {
    if(isOver) {
      if(isWin) {
        if(pathname === "/1P") {
          if(board[isWin[0]] === "X") {
            setAlert("Congratulations You Win!")
          } else {
            setAlert("Sorry You Lose.")
          }
        } else {
          setAlert(`Congradulations ${board[isWin[0]]} Wins!`)
        }
      } else {
        setAlert("Cat's game!")
      }
    } 
  }, [isOver])

  React.useEffect(() => {
    if(alert) onOpen()
  }, [alert])

  React.useEffect(() => {
    if(pathname === "/1P") {
      if(token === "O" && !isOver) {
        if(nextBestOMove) {
          newBoard.splice(nextBestOMove, 1, token)
        } 
        else if(nextBestXMove) {
          newBoard.splice(nextBestXMove, 1, token)
        }
        else {
          newBoard.splice(randomMove, 1, token)
        }

        if(turnCount < 9) setTurnCount(turnCount + 1)

        setAlert("Loading...")
        setTimeout(() => {
          setAlert(null)
          onClose()
          setBoard(newBoard)
        }, 3000)
      }
    }
  }, [token])

  function handleAddPiece(e) {
    if(!isOver) {
      if(newBoard[e.currentTarget.id] === "") {
        if(pathname === "/1P") {
          if(token === "X") {
            newBoard.splice(e.currentTarget.id, 1, token)
            if(turnCount < 9) setTurnCount(turnCount + 1)
          }
        } else {
          newBoard.splice(e.currentTarget.id, 1, token)
          if(turnCount < 9) setTurnCount(turnCount + 1)
        }
      } else {
        setAlert("Can't move there!")
        onOpen()
      }
      setBoard(newBoard)
    }
  }

  function handleReset() {
    setBoard(["", "", "", "", "", "", "", "", ""])
    setTurnCount(0)
    setAlert(null)
  }

  function handleClose() {
    handleReset()
    onClose()
  }

  return (
    <>
      <Header 
        handleReset={handleReset} 
        wins={wins} 
        // onColorSelect={setTokenColor} 
        onXColorSelect={setXTokenColor} 
        onOColorSelect={setOTokenColor} 
        // tokenColor={tokenColor} 
        xTokenColor={xTokenColor}
        oTokenColor={oTokenColor}
      />

      <Board 
        board={board} 
        handleAddPiece={handleAddPiece} 
        // tokenColor={tokenColor} 
        xTokenColor={xTokenColor}
        oTokenColor={oTokenColor}
      />

      <Popup 
        alert={alert} 
        handleClose={handleClose} 
        isOpen={isOpen} 
        onClose={onClose} 
      />
    </>
  )
}