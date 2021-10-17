import React from 'react';
import './actions.scss';


const Actions = (props) => {

    return (
        <div className="d-flex flex-column justify-content-center">
            <div className="row col my-2">
                <button className="text-center">Change Appearance</button>
            </div>
            <div className="row col my-2">
                <button className="text-center">Battle</button>
            </div>
            <div className="row col my-2">
                <button className="text-center">Learn Moves</button>
            </div>
        </div>
    )
}

export default Actions;