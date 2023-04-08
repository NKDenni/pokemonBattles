import React from 'react';
import Welcome from '../components/welcome';
import Start from '../components/start';
import Actions from '../components/actions';
import Monstercard from '../components/monstercard';

import './views.scss';

const SideBySide = (props) => {
    const { player, setPlayer, ptype, setPtype, phealth, setPhealth, pattack, setPattack, pdefense, setPdefense, psatt, setPsatt,
            psdef, setPsdef, pspeed, setPspeed, pMoveOne, setPmoveOne, pflavor, setPflavor, pic, setPic, selected, setSelected, setEhealth,
            setEattack, setEdefense, setEsatt, setEsdef, setEspeed, setEtype, setEplayer, setBattle } = props;


    return (
        <div className="row justify-content-evenly">
            <div className="sidebyside m-3 col d-flex align-items-stretch justify-content-center align-content-evenly">
                { selected?
                    <Monstercard 
                        {...{ player, ptype, phealth, pattack, pdefense, psatt, psdef, pspeed, pflavor, pMoveOne, setPmoveOne, selected, setSelected, pic}}/>:
                    <Welcome /> 
                }
            </div>
            <div className="sidebyside m-3 col d-flex align-items-center justify-content-center align-content-around">
                { selected?
                    <Actions {...{ player, setEhealth, setEattack, setEdefense, setEsatt, setEsdef, setEspeed, setEtype, setEplayer, pic, setPic, setBattle}} /> :
                    <Start {...{ player, setPlayer, ptype, setPtype, phealth, setPhealth, pattack, setPattack, pdefense, setPdefense, psatt, setPsatt,
                                psdef, setPsdef, pspeed, setPspeed, pMoveOne, setPmoveOne, pflavor, setPflavor, pic, setPic, selected, setSelected }} />
                }
            </div>
        </div>
    )
}

export default SideBySide;