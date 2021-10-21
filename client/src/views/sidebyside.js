import React, {useState} from 'react';
import Welcome from '../components/welcome';
import Start from '../components/start';
import Actions from '../components/actions';
import Monstercard from '../components/monstercard';

import './views.scss';

const SideBySide = (props) => {
    const { player, setPlayer, ptype, setPtype, phealth, setPhealth, pattack, setPattack, pdefense, setPdefense, psatt, setPsatt, psdef, setPsdef, pspeed, setPspeed, pflavor, setPflavor} = props;

    const [selected, setSelected ] = useState(false);

    return (
        <div className="row justify-content-evenly">
            <div className="sidebyside m-3 col d-flex align-items-stretch justify-content-center align-content-evenly">
                { selected?
                    <Monstercard player={player} ptype={ptype} phealth={phealth} pattack={pattack} pdefense={pdefense} psatt={psatt} psdef={psdef} pspeed={pspeed} pflavor={pflavor}/>:
                    <Welcome /> 
                }
            </div>
            <div className="sidebyside m-3 col d-flex align-items-center justify-content-center align-content-around">
                { selected?
                    <Actions player={player} /> :
                    <Start setPlayer={setPlayer} setPtype={setPtype} setPhealth={setPhealth} setPattack={setPattack} setPdefense={setPdefense} setPsatt={setPsatt} setPsdef={setPsdef} setPspeed={setPspeed} setPflavor={setPflavor} selected={selected} setSelected={setSelected} />
                }
            </div>
        </div>
    )
}

export default SideBySide;