import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Rotas from "./routes";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Rotas/>
    </BrowserRouter>
      
  )
}

export default App;
