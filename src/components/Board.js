import { Box } from "@chakra-ui/react";

export default function Board({ board, handleAddPiece, xTokenColor, oTokenColor }) {

  return (
    <Box className="Board" bg="white">
      {board.map((el, index) => (
        <Box  
          id={index} 
          className="Box"
          onClick={handleAddPiece}
          key={index}
        >
          <p className={`Piece ${el === "X" ? xTokenColor : oTokenColor}`}>
            {el}
          </p>
        </Box>
      ))}
    </Box>
  )
}