import React from 'react';
import './battle.scss';


const Battle = (props) => {
    const { player, ptype, phealth, pattack, pdefense, psatt, psdef, pspeed, pflavor, pic} = props;

    return (
        <div className="my-5 mx-3 row d-flex flex-row justify-content-evenly" >
            <div className="col-sm-6">
                <div className="row d-flex align-items-around align-content-around justify-content-center">
                    <div className="row px-5">
                        <img className="text-center monster" src={`./img/pokemon/${player.name}/${pic}-${player.name}.png`} alt={player.name} />
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
                            <p className="col-sm-5 text-start p-0 mb-0">Growl{props.move1}</p>
                            <p className="col-sm-4 text-center p-0 mb-0">Power: --{props.attack1}</p>
                            <p className="col-sm-3 text-end p-0 mb-0">Acc: 100{props.accuracy1}</p>
                        </div>
                        <div className="px-0">
                            <hr className="mt-2 mb-1" />
                        </div>
                        <div className="row d-flex p-0 m-0 flex-row">
                            <p className="col-sm-5 text-start p-0 mb-0">Scratch{props.move2}</p>
                            <p className="col-sm-4 text-center p-0 mb-0">Power: 40{props.attack2}</p>
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
                        <h1 className="mb-5">Moves You can Learn</h1>
                        <div className="row d-flex p-0 m-0 flex-row">
                            <p className="col-sm-2 text-start p-0 mb-0">Lvl: 9{props.movelvl1}</p>
                            <p className="col text-start p-0 mb-0">Ember {props.movename1}</p>
                            <p className="col text-center p-0 mb-0">Power: 40{props.attack1}</p>
                            <p className="col text-end p-0 mb-0">Acc: 100{props.accuracy1}</p>
                        </div>
                        <div className="px-0">
                            <hr className="mt-2 mb-1" />
                        </div>
                        <div className="row d-flex p-0 m-0 flex-row text-muted">
                            <p className="col-sm-2 text-start p-0 mb-0">Lvl: 15{props.movelvl2}</p>
                            <p className="col text-start p-0 mb-0">Leer {props.movename2}</p>
                            <p className="col text-center p-0 mb-0">Power: --{props.attack2}</p>
                            <p className="col text-end p-0 mb-0">Acc: 100{props.accuracy2}</p>
                        </div>
                        <div className="px-0">
                            <hr className="mt-2 mb-1" />
                        </div>
                        <div className="row d-flex p-0 m-0 flex-row text-muted">
                            <p className="col-sm-2 text-start p-0 mb-0">Lvl: 22{props.movelvl3}</p>
                            <p className="col text-start p-0 mb-0">Rage {props.movename3}</p>
                            <p className="col text-center p-0 mb-0">Power: 20{props.attack3}</p>
                            <p className="col text-end p-0 mb-0">Acc: 100{props.accuracy3}</p>
                        </div>
                        <div className="px-0">
                            <hr className="mt-2 mb-1" />
                        </div>
                        <div className="row d-flex p-0 m-0 flex-row text-muted">
                            <p className="col-sm-2 text-start p-0 mb-0">Lvl: 30{props.movelvl4}</p>
                            <p className="col text-start p-0 mb-0">Slash {props.movename4}</p>
                            <p className="col text-center p-0 mb-0">Power: 70{props.attack4}</p>
                            <p className="col text-end p-0 mb-0">Acc: 100{props.accuracy4}</p>
                        </div>
                        <div className="px-0">
                            <hr className="mt-2 mb-1" />
                        </div>
                        <div className="row d-flex p-0 m-0 flex-row text-muted">
                            <p className="col-sm-2 text-start p-0 mb-0">Lvl: 38{props.movelvl4}</p>
                            <p className="col text-start p-0 mb-0">Flamethrower {props.movename4}</p>
                            <p className="col text-center p-0 mb-0">Power: 90{props.attack4}</p>
                            <p className="col text-end p-0 mb-0">Acc: 100{props.accuracy4}</p>
                        </div>
                        <div className="px-0">
                            <hr className="mt-2 mb-1" />
                        </div>
                        <div className="row d-flex p-0 m-0 flex-row text-muted">
                            <p className="col-sm-2 text-start p-0 mb-0">Lvl: 46{props.movelvl4}</p>
                            <p className="col text-start p-0 mb-0">Fire Spin {props.movename4}</p>
                            <p className="col text-center p-0 mb-0">Power: 35{props.attack4}</p>
                            <p className="col text-end p-0 mb-0">Acc: 85{props.accuracy4}</p>
                        </div>
                        <div className="px-0">
                            <hr className="mt-2 mb-1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Battle;
