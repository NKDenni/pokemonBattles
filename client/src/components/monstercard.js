import React from 'react';
import './monstercard.scss';


const Monstercard = (props) => {
    const { player, ptype, phealth, pattack, pdefense, psatt, psdef, pspeed, pflavor, pMoveOne, pic} = props;

    return (
        <div className="monstercard row justify-content-center align-content-sm-between">
            <div className="px-5">
                <h1 className="my-3">You got <span className="text-capitalize">{player.name}</span>!</h1>
                <div className="px-0">
                    <hr className="mt-2 mb-0"/>
                </div>
            </div>
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
            <div className="px-5">
                <hr className="my-0"/>
            </div>
            <div className="row d-flex flex-row px-5">
                <h2 className="col-sm-3 mb-0 text-start">Moves</h2>
                <p className="flavor col p-0 mb-0 text-center text-muted">{pflavor}</p>
            </div>
            <div className="row px-5">
                <div className="px-0">
                    <hr className="mt-0 mb-1" />
                </div>
                <div className="row d-flex p-0 m-0 flex-row">
                    <p className="col-sm-5 text-start p-0 mb-0"><span className="text-capitalize">{pMoveOne}</span></p>
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
                    <p className="col-sm-4 text-start p-0 mb-0">Height: {player.height}</p>
                    <p className="col-sm-4 text-center p-0 mb-0">Lvl: 1{props.level}</p>
                    <p className="col-sm-4 text-end p-0 mb-0">Weight: {player.weight}</p>
                </div>
            </div>
        </div>
    )
}

export default Monstercard;