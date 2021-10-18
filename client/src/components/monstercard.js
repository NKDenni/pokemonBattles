import React from 'react';
import './monstercard.scss';


const Monstercard = (props) => {

    return (
        <div className="monstercard row justify-content-center align-content-sm-between">
            <div className="px-5">
                <h1 className="my-3">You got "XXXXXX"!</h1>
                <div className="px-0">
                    <hr className="mt-2 mb-0"/>
                </div>
            </div>
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
            <div className="px-5">
                <hr className="my-0"/>
            </div>
            <div className="row d-flex flex-row px-5">
                <h2 className="col-sm-3 mb-0 text-start">Moves</h2>
                <p className="flavor col p-0 mb-0 text-center text-muted">{props.flavor}When several of these POKéMON gather, their electricity could build and cause lightning storms.</p>
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
    )
}

export default Monstercard;