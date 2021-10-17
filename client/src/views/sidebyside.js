import React from 'react';
import Welcome from '../components/welcome';
import Start from '../components/start';
import './views.scss';

const SideBySide = (props) => { 
    return (
        <div className="row justify-content-evenly">
            <div className="box m-3 col d-flex align-items-center justify-content-center align-content-center">
                <Welcome />
            </div>
            <div className="box m-3 col d-flex align-items-center justify-content-center align-content-center">
                <Start />
            </div>
        </div>
    )
}

export default SideBySide;