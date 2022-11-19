import { Link } from 'react-router-dom';
import { Box, Button, IconButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function Header({ handleReset, wins }) {
  return (
    <Box className="Header">
      <IconButton 
        colorScheme="teal"
        as={Link}
        to="/"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </IconButton>
      <Button onClick={handleReset} colorScheme="teal">
        Reset Board
      </Button>
      <Button variant="ghost" colorScheme="teal">
        {wins}
      </Button>
    </Box>
  )
}