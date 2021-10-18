import React from 'react';
import Battle from '../components/battle';
import Signboard from '../components/signboard';
import Learn from '../components/learn';

import './views.scss';

const SideBySide = (props) => {
    return (
        <div className="p-4 row d-flex flex-column justify-content-center">
            <div className="stacked col d-flex align-items-stretch justify-content-center align-content-evenly" style={{ minHeight: `200px` }}>
                <Signboard />
            </div>
            <div className="stacked col mt-4" style={{ minHeight: `500px`}}>
                {/* <Battle /> */}
                <Learn />
            </div>
        </div>
    )
}

export default SideBySide;