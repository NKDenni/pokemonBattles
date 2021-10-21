import React, { useState, useEffect } from 'react';
import YellowButton from "./YellowButton";
import { navigate } from '@reach/router';
import { useGame } from '../context/GameContext';


const Signboard = (props) => {
    const [message, setMessage] = useState();
    const { resetGame } = useGame(); 

    useEffect(() => {
        setMessage(props.message)
    }, [props.message])

    const handleClick = (e) => {
        resetGame();
        navigate("/");
    }

    return (
    <div className="row d-flex align-content-center">
            <div className="col battles" style={{marginBottom:"25px"}}>{message}</div>
            { props.gameOver && <YellowButton text="BACK" handleClick={handleClick}/> }
    </div>
    )
}

export default Signboard;