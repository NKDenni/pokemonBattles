import React, { useState } from 'react';
import Battle from '../components/battle';
import Signboard from '../components/signboard';
import Learn from '../components/learn';

import './views.scss';

const SideBySide = (props) => {
    const { player, ptype, phealth, pattack, pdefense, psatt, psdef, pspeed, pflavor } = props;

    const [message, setMessage] = useState('');


    return (
        <div className="p-4 row d-flex flex-column justify-content-center">
            <div className="stacked col d-flex align-items-stretch justify-content-center align-content-evenly" style={{ minHeight: `200px` }}>
                <Signboard message={message}/>
            </div>
            <div className="stacked col mt-4" style={{ minHeight: `500px`}}>
                <Battle message={message} setMessage={setMessage} player={player} ptype={ptype} phealth={phealth} pattack={pattack} pdefense={pdefense} psatt={psatt} psdef={psdef} pspeed={pspeed} pflavor={pflavor}/>
                {/* <Learn message={message} setMessage={setMessage} /> */}
            </div>
        </div>
    )
}

export default SideBySide;