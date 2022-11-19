import { Link } from 'react-router-dom';
import { Box, Button, IconButton, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons';

export default function Header({ handleReset, wins, onColorSelect }) {
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
      {/* <Button variant="ghost" colorScheme="teal">
        {wins}
      </Button> */}
      <Menu >
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          // variant='outline' 
          // variant="ghost" 
          colorScheme="teal"
        />
        <MenuList color="black">
          <MenuItem>Token Color</MenuItem>
          <MenuItem onClick={(e) => onColorSelect(e.target.id)}>
            <Box id="blue-green" className="TokenColor blue-green">blue-green</Box>
          </MenuItem>
          <MenuItem onClick={(e) => onColorSelect(e.target.id)}>
            <Box id="orange-pink" className="TokenColor orange-pink">orange-pink</Box>
          </MenuItem>
          <MenuItem onClick={(e) => onColorSelect(e.target.id)}>
            <Box id="purple" className="TokenColor purple">purple</Box>
          </MenuItem>
          <MenuItem onClick={(e) => onColorSelect(e.target.id)}>
            <Box id="teal" className="TokenColor teal">teal</Box>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}