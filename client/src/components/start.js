import React from 'react';
import './start.scss';


const Start= (props) => {

    return (
    <div>
        <div className="row d-flex justify-content-center"></div>
            <div className="col">
                <img className="text-center" src={'/img/SM_Pokémon_logo.png'} alt="Pokemon Logo" />
            </div>
            <div className="col">

            </div>
            <div className="col">

            </div>
        <div className="row align-items-center choice">Choose your starter!</div>
        <div className="col pb-4">
            <img className="text-center" src={'/img/SM_Pokémon_logo.png'} alt="Pokemon Logo" />
        </div>
        <div className="row d-flex col justify-content-center choice">Battles!</div>
    </div>
    )
}

export default Start;