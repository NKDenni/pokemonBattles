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
                <div className="col">
                    <div className="row">
                        <p>Type: {props.type}</p>
                    </div>
                    <div className="row">

                    </div>
                    <div className="row">

                    </div>
                    <div className="row">

                    </div>
                </div>
            </div>

            <div className="px-5">
                <hr className="my-2"/>
            </div>
            <div className="row px-5">

            </div>
            <div className="row">

            </div>
            <div className="row">

            </div>
        </div>
    )
}

export default Monstercard;