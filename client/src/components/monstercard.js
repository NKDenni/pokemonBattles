import React from 'react';
import './monstercard.scss';


const Monstercard = (props) => {

    return (
        <div className="monstercard row justify-content-center">
            <h1>You got "XXXXXX"!</h1>
            <div className="px-5">
                <hr className="my-2"/>
            </div>
            <div className="row px-5">
                <img className="monster border border-dark p-0" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'} alt="Pikachu" />
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
                <hr className="my-2"/>
            </div>
            <div className="row d-flex flex-row px-5">
                <h2 className="col-sm-3 mb-0 text-start">Moves</h2>
                <p className="flavor col p-0 mb-0 text-center text-muted">{props.flavor}When several of these POKéMON gather, their electricity could build and cause lightning storms.</p>
            </div>
            <div className="px-5">
                <hr className="my-2" />
            </div>
            <div className="row">
                
            </div>
            <div className="row">

            </div>
        </div>
    )
}

export default Monstercard;