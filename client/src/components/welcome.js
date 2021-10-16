import React from 'react';


const Welcome = (props) => {

    return (
    <div>
        <div className="row battle">Welcome</div>
            <div className="row">
                <div className="col battle">
                    to
                </div>
                <div className="col">
                    <img className="text-center" src={'/img/SM_Pokémon_logo.png'} alt="Pokemon Logo" />
                </div>
            </div>
        <div className="row">Battles!</div>
    </div>
    )
}

export default Welcome;