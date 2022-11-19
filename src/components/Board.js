import { Box } from "@chakra-ui/react";

export default function Board({ board, handleAddPiece }) {
  return (
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
  )
}