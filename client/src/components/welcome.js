import React from 'react';
import './welcome.scss';


const Welcome = (props) => {

    return (
    <div>
        <div className="row d-flex justify-content-center battles">Welcome</div>
        <div className="my-4 row align-items-center">
            <div className="col battles">to</div>
            <div className="col pb-4">
                <img className="text-center" src={'/img/SM_Pokémon_logo.png'} alt="Pokemon Logo" />
            </div>
        </div>
        <div className="row d-flex col justify-content-center battles">Battles!</div>
    </div>
    )
}

export default Welcome;