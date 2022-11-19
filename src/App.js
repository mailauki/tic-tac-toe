import './App.css';
import React from "react";
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Board from './components/Board';
import Start from './components/Start';

function App() {
  const [gameSelect, setGameSelect] = React.useState("")

  console.log(gameSelect)

  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="App">
          {/* <Start onSelect={(option) => setGameSelect(option)} /> */}
          {/* <Board /> */}

          <Routes>
            <Route path="/testing" element={<h1>Test Route</h1>} />
            <Route path="/1P" element={<Board />} />
            <Route path="/" element={
              <Start onSelect={(option) => setGameSelect(option)} />
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
