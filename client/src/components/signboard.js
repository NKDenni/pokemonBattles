import React, { useState, useEffect } from 'react';
import YellowButton from "./YellowButton";
import { navigate } from '@reach/router';
import { useGame } from '../context/GameContext';
import { motion, useAnimation, transform } from "framer-motion";

const toSpringVelocity = transform([0, 5], [50, 0]);

const Signboard = (props) => {
    const [message, setMessage] = useState();
    const controls = useAnimation();
    const { resetGame } = useGame(); 

    useEffect(() => {
        setMessage(props.message)
        controls.start({
            scale: 1,
            transition: {
              type: "spring",
              velocity: toSpringVelocity(0),
              stiffness: 700,
              damping: 80
            }
          });
    }, [props.message, props.score])

    const handleClick = (e) => {
        resetGame();
        navigate("/");
    }

    return (
    <div className="row d-flex align-content-center">
            <motion.span animate={controls}>
                <div className="col battles" style={{marginBottom:"25px"}}>{message}</div>
            </motion.span>
            { props.gameOver && <YellowButton text="BACK" handleClick={ handleClick }/> }
    </div>
    )
}

export default Signboard;