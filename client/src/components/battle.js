import React, { useState } from 'react';
import './battle.scss';
import { useGame } from '../context/GameContext';
import { navigate } from '@reach/router';

const Battle = (props) => {
    const { playerStats, player, ptype, phealth, pattack, pdefense, psatt, psdef, pspeed, eplayer, etype, ehealth, eattack, edefense, esatt, esdef, espeed } = props;

    const { playTurn, checkWinner } = useGame(); 
    const [playing, setPlaying] = useState(true);

    const handlePlay = (e) => {
        // setMessage('');
        const turnWinner = playTurn('paper');
        if(turnWinner.winner === "draw"){
            props.handleMessageUpdate(`A ${turnWinner.winner}!`);
        } else {
            const winner = turnWinner.winner === "player" ? player.name : turnWinner.winner;
            props.handleMessageUpdate(`${winner} wins this turn!`);
        }
        props.handleScoreUpdate(turnWinner.score);
        CheckGameWinner();
    }

    const CheckGameWinner = () => {
        const winner = checkWinner() === "player" ? player.name : checkWinner();
        if(winner !== "")
        {
            props.handleMessageUpdate(`${winner} wins!`);
            props.handleGameOver(true);
            setPlaying(false);
            if(winner !== "enemy")
                props.updatePlayerStats("level", playerStats.level + 1);
        }
    }

    return (
        <div className="my-5 mx-3 row d-flex flex-row justify-content-evenly" >
            <div className="col-sm-6">
                <div className="row d-flex align-items-around align-content-around justify-content-center">
                    <div className="row px-5">
                        <img className="text-center monster" src={`./img/pokemon/${player.name}/1-${player.name}.png`} alt={player.name} />
                        <div className="col d-flex flex-column justify-content-evenly">
                            <div className="row">
                                <p className="col text-start pe-0 mb-1">Type: <span className="text-capitalize">{ptype}</span></p>
                                <p className="col-sm-4 text-end p-0 mb-1">#: {player.id}</p>
                            </div>
                            <div className="row">
                                <p className="col text-start pe-0 mb-1">HP: {phealth}</p>
                                <p className="col text-end p-0 mb-1">Speed: {pspeed}</p>
                            </div>
                            <div className="row">
                                <p className="col text-start pe-0 mb-1">Attack: {pattack}</p>
                                <p className="col text-end p-0 mb-1">Defense: {pdefense}</p>
                            </div>
                            <div className="row">
                                <p className="col text-start pe-0 mb-1">S-Att: {psatt}</p>
                                <p className="col text-end p-0 mb-1">S-Def: {psdef}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row px-5">
                        <div className="px-0">
                            <hr className="mt-0 mb-1" />
                        </div>
                        <div className="row d-flex p-0 m-0 flex-row">
                            <p className="col-sm-5 text-start p-0 mb-0"><button disabled={!playing} className="att px-3" onClick={handlePlay}>Growl{props.move1}</button></p>
                            <p className="col-sm-4 text-center p-0 mb-0">Power: --{props.attack1}</p>
                            <p className="col-sm-3 text-end p-0 mb-0">Acc: 100{props.accuracy1}</p>
                        </div>
                        <div className="px-0">
                            <hr className="mt-2 mb-1" />
                        </div>
                        <div className="row d-flex p-0 m-0 flex-row">
                            <p className="col-sm-5 text-start p-0 mb-0"><button disabled={!playing} className="att px-3" onClick={handlePlay}>Thunder shock{props.move2}</button></p>
                            <p className="col-sm-4 text-center p-0 mb-0">Power: 50{props.attack2}</p>
                            <p className="col-sm-3 text-end p-0 mb-0">Acc: 100{props.accuracy2}</p>
                        </div>
                        <div className="px-0">
                            <hr className="mt-2 mb-1" />
                        </div>
                        <div className="row d-flex p-0 m-0 flex-row">
                            <p className="col-sm-5 text-start p-0 mb-0"><button className="att px-3" disabled>Move{props.move3}</button></p>
                            <p className="col-sm-4 text-center p-0 mb-0">{props.attack3}</p>
                            <p className="col-sm-3 text-end p-0 mb-0">{props.accuracy3}</p>
                        </div>
                        <div className="px-0">
                            <hr className="mt-2 mb-1" />
                        </div>
                        <div className="row d-flex p-0 m-0 flex-row">
                            <p className="col-sm-5 text-start p-0 mb-0"><button className="att px-3" disabled>Move{props.move4}</button></p>
                            <p className="col-sm-4 text-center p-0 mb-0">{props.attack4}</p>
                            <p className="col-sm-3 text-end p-0 mb-0">{props.accuracy4}</p>
                        </div>
                    </div>
                    <div className="row px-5 mb-1">
                        <div className="px-0">
                            <hr className="mt-2 mb-2" />
                        </div>
                        <div className="row d-flex p-0 m-0 flex-row justify-content-center">
                            <p className="col-sm-4 text-start p-0 mb-0">Height: {player.height}</p>
                            <p className="col-sm-4 text-center p-0 mb-0">Lvl: {playerStats.level}</p>
                            <p className="col-sm-4 text-end p-0 mb-0">Weight: {player.weight}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="row d-flex align-items-around align-content-around justify-content-center">
                    <div className="row px-5">
                        <img className="text-center monster" src={`./img/pokemon/${eplayer.name}/1-${eplayer.name}.png`} alt={eplayer.name} />
                        <div className="col d-flex flex-column justify-content-evenly">
                            <div className="row">
                                <p className="col text-start pe-0 mb-1">Type: <span className="text-capitalize">{etype}</span></p>
                                <p className="col-sm-4 text-end p-0 mb-1">#: {eplayer.id}</p>
                            </div>
                            <div className="row">
                                <p className="col text-start pe-0 mb-1">HP: {ehealth}</p>
                                <p className="col text-end p-0 mb-1">Speed: {espeed}</p>
                            </div>
                            <div className="row">
                                <p className="col text-start pe-0 mb-1">Attack: {eattack}</p>
                                <p className="col text-end p-0 mb-1">Defense: {edefense}</p>
                            </div>
                            <div className="row">
                                <p className="col text-start pe-0 mb-1">S-Att: {esatt}</p>
                                <p className="col text-end p-0 mb-1">S-Def: {esdef}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row px-5">
                        <div className="px-0">
                            <hr className="mt-0 mb-1" />
                        </div>
                        <div className="row d-flex p-0 m-0 flex-row">
                            <p className="col-sm-5 text-start p-0 mb-0">Growl{props.move1}</p>
                            <p className="col-sm-4 text-center p-0 mb-0">Power: --{props.attack1}</p>
                            <p className="col-sm-3 text-end p-0 mb-0">Acc: 100{props.accuracy1}</p>
                        </div>
                        <div className="px-0">
                            <hr className="mt-2 mb-1" />
                        </div>
                        <div className="row d-flex p-0 m-0 flex-row">
                            <p className="col-sm-5 text-start p-0 mb-0">Thunder shock{props.move2}</p>
                            <p className="col-sm-4 text-center p-0 mb-0">Power: 50{props.attack2}</p>
                            <p className="col-sm-3 text-end p-0 mb-0">Acc: 100{props.accuracy2}</p>
                        </div>
                        <div className="px-0">
                            <hr className="mt-2 mb-1" />
                        </div>
                        <div className="row d-flex p-0 m-0 flex-row">
                            <p className="col-sm-5 text-start p-0 mb-0">Move{props.move3}</p>
                            <p className="col-sm-4 text-center p-0 mb-0">{props.attack3}</p>
                            <p className="col-sm-3 text-end p-0 mb-0">{props.accuracy3}</p>
                        </div>
                        <div className="px-0">
                            <hr className="mt-2 mb-1" />
                        </div>
                        <div className="row d-flex p-0 m-0 flex-row">
                            <p className="col-sm-5 text-start p-0 mb-0">Move{props.move3}</p>
                            <p className="col-sm-4 text-center p-0 mb-0">{props.attack3}</p>
                            <p className="col-sm-3 text-end p-0 mb-0">{props.accuracy3}</p>
                        </div>
                    </div>
                    <div className="row px-5 mb-1">
                        <div className="px-0">
                            <hr className="mt-2 mb-2" />
                        </div>
                        <div className="row d-flex p-0 m-0 flex-row justify-content-center">
                            <p className="col-sm-4 text-start p-0 mb-0">Height: {eplayer.height}</p>
                            <p className="col-sm-4 text-center p-0 mb-0">Lvl: 1{player.level}</p>
                            <p className="col-sm-4 text-end p-0 mb-0">Weight: {eplayer.weight}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Battle;
