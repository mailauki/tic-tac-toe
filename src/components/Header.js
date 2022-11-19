import { Link } from 'react-router-dom';
import { Box, Button, IconButton, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { HamburgerIcon } from '@chakra-ui/icons';

export default function Header({ handleReset, wins, onColorSelect, tokenColor }) {
  const colorOptions = ["blue-green", "orange-pink", "purple", "teal", "yellow"]

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

      <Menu closeOnSelect={false}>
        <MenuButton
          as={IconButton}
          aria-label="Color Options"
          icon={<HamburgerIcon />}
          colorScheme="teal"
        />
        <MenuList color="black" fontSize="initial">
          <MenuOptionGroup value={tokenColor} title="Token Color" type="radio" onChange={(v) => onColorSelect(v)}>
            {colorOptions.map((color) => (
              <MenuItemOption value={color}>
                <Box className={`TokenColor ${color}`}>
                  {color}
                </Box>
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Box>
  )
}