import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import { ChakraProvider } from '@chakra-ui/react'
// import { Button } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        {/* <header className="App-header">
        </header> */}
        <Board />
      </div>
    </ChakraProvider>
  );
}

export default App;
