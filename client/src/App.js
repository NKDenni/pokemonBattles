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
  const [selected, setSelected] = useState(false);

  const [eplayer, setEplayer] = useState({});
  const [etype, setEtype] = useState("");
  const [ehealth, setEhealth] = useState("");
  const [eattack, setEattack] = useState("");
  const [edefense, setEdefense] = useState("");
  const [esatt, setEsatt] = useState("");
  const [esdef, setEsdef] = useState("");
  const [espeed, setEspeed] = useState("");

  return (
    <div className="App container">
      <div>
        <Navbar />
      </div>
      <div className="row">
        <GameProvider>
          <Router>
            <SideBySide default path="/" {...{ player, setPlayer, ptype, setPtype, phealth, setPhealth, pattack, setPattack, pdefense, setPdefense, psatt, setPsatt, psdef, setPsdef, pspeed, setPspeed, pflavor, setPflavor, selected, setSelected, setEhealth, setEattack, setEdefense, setEsatt, setEsdef, setEspeed, setEtype, setEplayer}} />
            <Stacked path="/battle" {...{ player, ptype, phealth, pattack, pdefense, psatt, psdef, pspeed, pflavor, selected, setSelected, eplayer, etype, ehealth, eattack, edefense, esatt, esdef, espeed }} />
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
