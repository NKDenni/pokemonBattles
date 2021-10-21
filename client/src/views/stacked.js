import React, { useState } from 'react';
import Battle from '../components/battle';
import Signboard from '../components/signboard';
import Learn from '../components/learn';

import './views.scss';

const SideBySide = (props) => {
    const { player, ptype, phealth, pattack, pdefense, psatt, psdef, pspeed, pflavor, ehealth, eattack, edefense, esatt, esdef, espeed, etype, eplayer } = props;

    const playerBaseStats = {
        ptype: "Electric",
        level: 1,
        phealth: 100
    }

    const [message, setMessage] = useState('Begin Battle!');
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [playerStats, setPlayerStats] = useState({...playerBaseStats});

    const handleMessageUpdate = (msg) => {
        setMessage(msg);
    }
    const handleScoreUpdate = (value) => {
        setScore(value);
    }

    const handleGameOver = (value) => {
        setGameOver(value);
    }

    const updatePlayerStats = (key, value) => {
        const newPlayerStats = {...playerStats};
        newPlayerStats[key] = value;
        setPlayerStats(newPlayerStats);
    }

    return (
        <div className="p-4 row d-flex flex-column justify-content-center">
            <div className="stacked col d-flex align-items-stretch justify-content-center align-content-evenly" style={{ minHeight: `200px` }}>
                <Signboard message={message} gameOver={gameOver} score={score}/>
            </div>
            <div className="stacked col mt-4" style={{ minHeight: `500px`}}>

                <Battle 
                handleMessageUpdate= { handleMessageUpdate }
                handleScoreUpdate={ handleScoreUpdate }
                handleGameOver={ handleGameOver } 
                updatePlayerStats={ updatePlayerStats } 
                playerStats={ playerStats }
                {...{ player, ptype, phealth, pattack, pdefense, psatt, psdef, pspeed, pflavor, eplayer, etype, ehealth, eattack, edefense, esatt, esdef, espeed }}
                />
                {/* <Learn message={message} setMessage={setMessage} /> */}
            </div>
        </div>
    )
}

export default SideBySide;