import { Link } from 'react-router-dom';
import { Box, Button, Heading, Tooltip } from '@chakra-ui/react';

export default function Start() {
  return (
    <Box className="Start">
      <Heading as='h2' size='xl'>Tic-Tac-Toe</Heading>

      <Tooltip label="Play against Computer">
        <Button 
          id="1P" 
          colorScheme="teal"
          as={Link}
          to="/1P"
        >
          1 Player
        </Button>
      </Tooltip>

      <Tooltip label="Player against Someone next to You">
        <Button 
          id="2P" 
          colorScheme="teal" 
          as={Link}
          to="/2P"
        >
          2 Player
        </Button>
      </Tooltip>
    </Box>
  )
}