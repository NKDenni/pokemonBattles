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
  const [pMoveOne, setPmoveOne] = useState("");
  // const [pMove2, setPMove2] = useState("");
  // const [pMove3, setPMove3] = useState("");
  // const [pMove4, setPMove4] = useState("");
  const [selected, setSelected] = useState(false);
  const [pic, setPic] = useState(1);

  const [eplayer, setEplayer] = useState({});
  const [etype, setEtype] = useState("");
  const [ehealth, setEhealth] = useState("");
  const [eattack, setEattack] = useState("");
  const [edefense, setEdefense] = useState("");
  const [esatt, setEsatt] = useState("");
  const [esdef, setEsdef] = useState("");
  const [espeed, setEspeed] = useState("");
  // const [eMove1, setEMove1] = useState("");
  // const [eMove2, setEMove2] = useState("");
  // const [eMove3, setEMove3] = useState("");
  // const [eMove4, setEMove4] = useState("");
  const [battle, setBattle] =useState(false);

  return (
    <div className="App container">
      <div>
        <Navbar />
      </div>
      <div className="row">
        <GameProvider>
          <Router>
            <SideBySide 
            default path="/" 
              {...{ player, setPlayer, ptype, setPtype, phealth, setPhealth, pattack, setPattack, pdefense, setPdefense, psatt, setPsatt, 
                psdef, setPsdef, pspeed, setPspeed, pMoveOne, setPmoveOne, pflavor, setPflavor, pic, setPic, selected, setSelected, setEhealth, 
                setEattack, setEdefense, setEsatt, setEsdef, setEspeed, setEtype, setEplayer, setBattle}}
            />
            <Stacked 
            path="/battle" 
            {...{ player, ptype, phealth, pattack, pdefense, psatt, psdef, pspeed, pflavor, pic, battle, selected, 
              setSelected, eplayer, etype, ehealth, eattack, edefense, esatt, esdef, espeed }}
            />
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
