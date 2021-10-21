import React from 'react';
import './actions.scss';
import { navigate } from '@reach/router';

const Actions = (props) => {
    const {player} = props;

    const handleAppearance = (e) => {

        // player.name === pikachu?
        // Advance to next node in list
        // List is looped so when reach end node point back to head node
        // return current node value and set image state to current node value

    }

    return (
        <div className="d-flex flex-column justify-content-center">
            <div className="row col my-2">
                <button className="action text-center" onClick= { handleAppearance }>Change Appearance</button>
            </div>
            <div className="row col my-2">
                <button className="action text-center" onClick={ e => navigate("/battle") }>Battle</button>
            </div>
            <div className="row col my-2">
                <button className="action text-center" >Learn Moves</button>
            </div>
        </div>
    )
}

export default Actions;