import React, { useState } from 'react';
import { Router } from '@reach/router'
import Navbar from './components/navbar'
import Footer from './components/footer'
import SideBySide from './views/sidebyside'
import Stacked from './views/stacked'
import { GameProvider } from './context/GameContext';
import './App.scss';

function App() {

  const [player, setPlayer] = useState({});
  const [ptype, setPtype] = useState("");
  const [phealth, setPhealth] = useState("");
  const [pattack, setPattack] = useState("");
  const [pdefense, setPdefense] = useState("");
  const [psatt, setPsatt] = useState("");
  const [psdef, setPsdef] = useState("");
  const [pspeed, setPspeed] = useState("");
  const [pflavor, setPflavor] = useState("");

  return (
    <div className="App container">
      <div>
        <Navbar />
      </div>
      <div className="row">
        <GameProvider>
          <Router>
            <SideBySide default path="/" player={player} setPlayer={setPlayer} ptype={ptype} setPtype={setPtype} phealth={phealth} setPhealth={setPhealth} pattack={pattack} setPattack={setPattack} pdefense={pdefense} setPdefense={setPdefense} psatt={psatt} setPsatt={setPsatt} psdef={psdef} setPsdef={setPsdef} pspeed={pspeed} setPspeed={setPspeed} pflavor={pflavor} setPflavor={setPflavor}/>
            <Stacked path="/battle" player={player} ptype={ptype} phealth={phealth} pattack={pattack} pdefense={pdefense} psatt={psatt} phealth={psdef} pspeed={pspeed} pflavor={pflavor}/>
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
