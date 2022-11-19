import { Link } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';

export default function Start({onSelect}) {
  function handleGameChoice(e) {
    onSelect(e.target.id)
  }

  return (
    <Box className="Start">
      <h1>Tic-Tac-Toe</h1>
      <Button 
        // onClick={handleGameChoice} 
        id="1P" 
        colorScheme="teal"
        as={Link}
        to="/1P"
      >
        1 Player
      </Button>
      <Button 
        // onClick={handleGameChoice} 
        id="2P" 
        colorScheme="teal" 
        as={Link}
        to="/2P"
      >
        2 Player
      </Button>
    </Box>
  )
}