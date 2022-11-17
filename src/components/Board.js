import React from "react";
import { Box } from "@chakra-ui/react";

export default function Board() {
  // const board = Array.from(Array(9), (e,i))
  // const board = ["X", "", "", "", "", "", "", "", ""]
  const [board, setBoard] = React.useState(["", "", "", "", "", "", "", "", ""])

  console.log(board)

  function handleAddPiece(e) {
    const newBoard = [...board]
    newBoard.splice(e.currentTarget.id, 1, "X")
    setBoard(newBoard)
  }

  return (
    <Box className="Board" bg="white">
      {board.map((el, index) => (
        <Box  
          id={index} 
          className="Box"
          onClick={handleAddPiece}
        >
          <p className="Piece">{el}</p>
          {/* <p className="Piece">{el === 1 || el === 4 || el === 8 ? "X" : "O"}</p> */}
          {/* {el === 1 || el === 4 || el === 8 ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="Piece"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="Piece"><path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 22c-5.519 0-10-4.48-10-10 0-5.519 4.481-10 10-10 5.52 0 10 4.481 10 10 0 5.52-4.48 10-10 10z"/></svg>
          )} */}
        </Box>
      ))}
    </Box>
  )
}