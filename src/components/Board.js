import React, { useCallback } from "react";
import { Box, Button, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";

export default function Board() {
  const [board, setBoard] = React.useState(["", "", "", "", "", "", "", "", ""])
  const [turnCount, setTurnCount] = React.useState(0)

  const [alert, setAlert] = React.useState(null)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

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

  React.useEffect(() => {
    if(isOver) {
      if(isWin) {
        setAlert(`Congratulations ${board[isWin[0]]} wins!`)
      } else {
        setAlert("Cat's game!")
      }
    } 
  }, [isOver])

  React.useEffect(() => {
    if(alert) onOpen()
  }, [alert])

  function handleAddPiece(e) {
    const newBoard = [...board]
    const token = turnCount % 2 == 1 ? "O" : "X"

    if(!isOver) {
      if(newBoard[e.currentTarget.id] === "") {
        newBoard.splice(e.currentTarget.id, 1, token)
        if(turnCount < 9) setTurnCount(turnCount + 1)
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
    onClose()
    handleReset()
  }

  return (
    <>
      <Box className="Header">
        <Button onClick={handleReset} colorScheme="teal">Reset Board</Button>
      </Box>
      
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

      {/* <AlertDialog 
        isOpen={isOpen} 
        leastDestructiveRef={cancelRef} 
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay >
          <AlertDialogContent sx={{ maxWidth: "300px" }}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {alert}
            </AlertDialogHeader>
            <AlertDialogFooter>
              <Button onClick={onClose}>
                Close
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog> */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent sx={{ maxWidth: "300px" }}>
          {/* <ModalHeader>{isOver ? "Game Over" : "Error"}</ModalHeader> */}
          <ModalHeader>{alert}</ModalHeader>
          <ModalCloseButton />
          {/* <ModalBody fontSize="lg" fontWeight="bold">
            {alert}
          </ModalBody> */}

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" colorScheme="red" ml={3} onClick={handleClose}>Reset</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}