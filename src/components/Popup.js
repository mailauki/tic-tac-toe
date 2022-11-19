import React from "react";
import { Button, AlertDialog, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, useDisclosure, Spinner } from "@chakra-ui/react";

export default function Popup({ alert, handleClose, isOpen, onClose }) {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  
  // React.useEffect(() => {
  //   if(alert) onOpen()
  // }, [alert])

  return (
    <AlertDialog 
      isOpen={isOpen} 
      leastDestructiveRef={cancelRef}
      isCentered
    >
      <AlertDialogOverlay >
        <AlertDialogContent sx={{ maxWidth: "300px", textAlign: "center" }}>
          {alert === "Loading..." ? (
            <>
              <AlertDialogHeader>
                <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='blue.500'
                  size='xl'
                />
                <br/>
                Opponent Thinking...
              </AlertDialogHeader>
            </>
          ) : (
            <>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                {alert}
              </AlertDialogHeader>
              <AlertDialogFooter>
                <Button variant="ghost" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost" colorScheme="red" onClick={handleClose}>
                  Reset
                </Button>
              </AlertDialogFooter>
            </>
          )}
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}