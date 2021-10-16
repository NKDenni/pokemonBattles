import React from 'react';
import Welcome from '../components/welcome';

const Start = (props) => {
    return (
        <div className="row">
            <div className="col d-flex align-items-center justify-content-center align-content-center">
                <Welcome />
            </div>
            <div className="col d-flex align-items-center justify-content-start">
            </div>
        </div>
    )
}

export default Start;