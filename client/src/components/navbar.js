import React from 'react';
import './navbar.scss';


const Navbar = (props) => {
    return (
        <div className="row" id="navbar">
            <div className="col d-flex align-items-center justify-content-end">
                <img className="text-end" src={'/img/SM_Pokémon_logo.png'} alt="Pokemon Logo"/>
            </div>
            <div className="col d-flex align-items-center justify-content-start">
                <h1 id="battles" className="mt-4 ms-2 mb-0 font-pokemon">Battles!</h1>
            </div>
        </div>
    )
}

export default Navbar;