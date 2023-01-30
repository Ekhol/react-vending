import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Crunchwrap from './Crunchwrap';
import Sandwich from './Sandwich';
import Soda from './Soda';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/the-taco-bell-crunchwrap-supreme" element={<Crunchwrap />} />
            <Route exact path="/sandwich" element={<Sandwich />} />
            <Route exact path="/soda" element={<Soda />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
