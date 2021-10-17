import React, { useState } from 'react';
import './actions.scss';
import { useGame } from '../context/GameContext';

const Actions = (props) => {
    const { playTurn, checkWinner, resetGame } = useGame();         //grab the methods and game properties
    const [winner, setWinner] = useState('');

    const handlePlay = (e) => {
        setWinner('');
        const turnWinner = playTurn('paper');
        setWinner(`winner: ${turnWinner.winner} score: ${turnWinner.score}`);
    }

    const handleCheckWin = (e) => {
        const winner = checkWinner();
        console.log(`winner: ${winner}`);
    }

    const handleGameReset = () => {
        resetGame();
    }

    return (
        <div className="d-flex flex-column justify-content-center">
            { winner }
            <div className="row col my-2">
                <button className="text-center" onClick= { handleGameReset }>Change Appearance</button>
            </div>
            <div className="row col my-2">
                <button className="text-center" onClick={ handlePlay }>Battle</button>
            </div>
            <div className="row col my-2">
                <button className="text-center" onClick={ handleCheckWin }>Learn Moves</button>
            </div>
        </div>
    )
}

export default Actions;