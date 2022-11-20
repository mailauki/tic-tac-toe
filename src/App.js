import './App.css';
import React from "react";
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from './components/Game';
import Start from './components/Start';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="App">

          <Routes>
            <Route path="/1P" element={<Game />} />
            <Route path="/2P" element={<Game />} />
            <Route path="/" element={<Start />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
