import React from 'react';
import './battle.scss';


const Battle = (props) => {

    const { player, ptype, phealth, pattack, pdefense, psatt, psdef, pspeed, pflavor } = props;

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
                            <p className="col-sm-5 text-start p-0 mb-0"><button className="att px-3">Growl{props.move1}</button></p>
                            <p className="col-sm-4 text-center p-0 mb-0">Power: --{props.attack1}</p>
                            <p className="col-sm-3 text-end p-0 mb-0">Acc: 100{props.accuracy1}</p>
                        </div>
                        <div className="px-0">
                            <hr className="mt-2 mb-1" />
                        </div>
                        <div className="row d-flex p-0 m-0 flex-row">
                            <p className="col-sm-5 text-start p-0 mb-0"><button className="att px-3">Thunder shock{props.move2}</button></p>
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
                            <p className="col-sm-4 text-center p-0 mb-0">Lvl: 1{props.level}</p>
                            <p className="col-sm-4 text-end p-0 mb-0">Weight: {player.weight}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="row d-flex align-items-around align-content-around justify-content-center">
                    <div className="row px-5">
                        <img className="text-center monster" src={'./img/pokemon/4-pikachu.png'} alt="Pikachu" />
                        <div className="col d-flex flex-column justify-content-evenly">
                            <div className="row">
                                <p className="col text-start pe-0 mb-1">Type: Electric{props.type}</p>
                                <p className="col-sm-4 text-end p-0 mb-1">#: 25{props.number}</p>
                            </div>
                            <div className="row">
                                <p className="col text-start pe-0 mb-1">HP: 35{props.health}</p>
                                <p className="col text-end p-0 mb-1">Speed: 50{props.speed}</p>
                            </div>
                            <div className="row">
                                <p className="col text-start pe-0 mb-1">Attack: 50{props.attack}</p>
                                <p className="col text-end p-0 mb-1">Defense: 40{props.defense}</p>
                            </div>
                            <div className="row">
                                <p className="col text-start pe-0 mb-1">S-Att: 50{props.satt}</p>
                                <p className="col text-end p-0 mb-1">S-Def: 50{props.sdef}</p>
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
                            <p className="col-sm-4 text-start p-0 mb-0">Height: 4{props.height}</p>
                            <p className="col-sm-4 text-center p-0 mb-0">Lvl: 1{props.level}</p>
                            <p className="col-sm-4 text-end p-0 mb-0">Weight: 50{props.weight}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Battle;
