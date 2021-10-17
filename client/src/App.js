import React from 'react';
import { Router } from '@reach/router'
import Navbar from './components/navbar'
import Footer from './components/footer'
import SideBySide from './views/sidebyside'
import { GameProvider } from './context/GameContext';
import './App.scss';

function App() {


  

  return (
    <div className="App container">
      <div>
        <Navbar />
      </div>
      <div>
        <GameProvider>
          <Router>
              <SideBySide default path="/" />
          </Router>
        </GameProvider>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
