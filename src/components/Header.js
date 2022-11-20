import { Link, useLocation } from 'react-router-dom';
import { Box, Button, IconButton, Menu, MenuButton, MenuList, MenuItemOption, MenuOptionGroup, MenuDivider, Text, Tooltip } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { HamburgerIcon } from '@chakra-ui/icons';

export default function Header({ handleReset, wins, xWins, oWins, onXColorSelect, onOColorSelect, xTokenColor, oTokenColor }) {
  const location = useLocation()
  const pathname = location.pathname

  const colorOptions = ["blue-green", "orange-pink", "purple", "teal", "yellow", "red"]

  return (
    <Box className="Header">
      <Tooltip label="Back">
        <IconButton 
          colorScheme="teal"
          as={Link}
          to="/"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </IconButton>
      </Tooltip>

      <Button onClick={handleReset} colorScheme="teal">
        Reset Board
      </Button>

      <Menu closeOnSelect={false}>
        <Tooltip label="Menu">
          <MenuButton
            as={IconButton}
            aria-label="Color Options"
            icon={<HamburgerIcon />}
            colorScheme="teal"
          />
        </Tooltip>

        <MenuList 
          color="black" 
          fontSize="initial" 
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
        >
          {pathname === "/1P" ? (
            <Text gridColumn="1 / 3" fontSize='xl' fontWeight="500">
              Wins: {wins}
            </Text>
          ) : (
            <>
              <Text fontSize="xl" fontWeight="500">
                X Wins: {xWins}
              </Text>
              <Text fontSize="xl" fontWeight="500">
                O Wins: {oWins}
              </Text>
            </>
          )}

          <MenuDivider gridColumn="1 / 3" />

          <MenuOptionGroup 
            value={xTokenColor} 
            title="X Token Color" 
            type="radio" 
            onChange={(v) => onXColorSelect(v)}
          >
            {colorOptions.map((color, i) => (
              <MenuItemOption 
                value={color} 
                key={`X-${color}`} 
                isDisabled={pathname === "/1P" ? wins < (i * 5) : xWins < (i * 5)}
              >
                <Tooltip 
                  label={i === 0 ? "" : `Unlock with ${i * 5} wins`}
                >
                  <Box className={`TokenColor ${color}`}>
                    {color}
                  </Box>
                </Tooltip>
              </MenuItemOption>
            ))}
          </MenuOptionGroup>

          <MenuOptionGroup 
            value={oTokenColor} 
            title="O Token Color" 
            type="radio" 
            onChange={(v) => onOColorSelect(v)} 
          >
            {colorOptions.map((color, i) => (
              <MenuItemOption 
                value={color} 
                key={`O-${color}`} 
                isDisabled={pathname === "/1P" ? wins < (i * 5) : oWins < (i * 5)}
              >
                <Tooltip 
                  label={i === 0 ? "" : `Unlock with ${i * 5} wins`}
                >
                  <Box className={`TokenColor ${color}`}>
                    {color}
                  </Box>
                </Tooltip>
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Box>
  )
}