import React from 'react';
import Welcome from '../components/welcome';
import Start from '../components/start';
import Actions from '../components/actions';
import Monstercard from '../components/monstercard';

import './views.scss';

const SideBySide = (props) => { 
    return (
        <div className="row justify-content-evenly">
            <div className="box m-3 col d-flex align-items-center justify-content-center align-content-center">
                {/* <Welcome /> */}
                <Monstercard />
            </div>
            <div className="box m-3 col d-flex align-items-center justify-content-center align-content-center">
                {/* <Start /> */}
                <Actions />
            </div>
        </div>
    )
}

export default SideBySide;