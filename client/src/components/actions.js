import React, { useState } from 'react';
import './actions.scss';
import { useGame } from '../context/GameContext';

const Actions = (props) => {
    const { play, score } = useGame();
    const [winner, setWinner] = useState('');

    const handlePlay = (e) => {
        setWinner('');
        const turnWinner = play('paper');
        setWinner(`winner: ${turnWinner.winner} score: ${score}`);
    }

    return (
        <div className="d-flex flex-column justify-content-center">
            { winner }
            <div className="row col my-2">
                <button className="text-center">Change Appearance</button>
            </div>
            <div className="row col my-2">
                <button className="text-center" onClick={ handlePlay }>Battle</button>
            </div>
            <div className="row col my-2">
                <button className="text-center">Learn Moves</button>
            </div>
        </div>
    )
}

export default Actions;