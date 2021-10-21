import React from 'react';
import Welcome from '../components/welcome';
import Start from '../components/start';
import Actions from '../components/actions';
import Monstercard from '../components/monstercard';

import './views.scss';

const SideBySide = (props) => {
    const { player, setPlayer, ptype, setPtype, phealth, setPhealth, pattack, setPattack, pdefense, setPdefense, psatt, setPsatt, psdef, setPsdef, pspeed, setPspeed, pflavor, setPflavor} = props;

    return (
        <div className="row justify-content-evenly">
            <div className="sidebyside m-3 col d-flex align-items-stretch justify-content-center align-content-evenly">
                {/* <Welcome /> */}
                <Monstercard player={player} ptype={ptype} phealth={phealth} pattack={pattack} pdefense={pdefense} psatt={psatt} psdef={psdef} pspeed={pspeed} pflavor={pflavor}/>
            </div>
            <div className="sidebyside m-3 col d-flex align-items-center justify-content-center align-content-around">
                <Start setPlayer={setPlayer} setPtype={setPtype} setPhealth={setPhealth} setPattack={setPattack}  setPdefense={setPdefense} setPsatt={setPsatt} setPsdef={setPsdef} setPspeed={setPspeed} setPflavor={setPflavor}/>
                {/* <Actions player={player}/> */}
            </div>
        </div>
    )
}

export default SideBySide;