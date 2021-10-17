import React, { useContext, useState, useEffect } from 'react';
import axios from "axios";
const GameContext = React.createContext();

export function useGame(){
    return useContext(GameContext);
}

export function GameProvider ({ children }) {

    const [currentMonster, setCurrentMonster] = useState();     //TODO - create model for pokemon monster that's currently playing turn
    const [score, setScore] = useState();
    const [monsters, setMonsters] = useState();                 //TODO - list of monsters to choose from.  May not need.
    const [loading, setLoading] = useState(true);               //use if we plan to call from the api to build the list of monsters and display them. I think this can be done at the view instead.

    const ChoicesBase = ['rock', 'paper', 'scissors'];
    //game model. We can expand as needed
    const GameObject = {
        winner: "draw",
        score: score
    }

    const getEnemyChoice = () => {
        const choices = [...ChoicesBase];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }

    const getWinnerOfTurn = (playerChoice) => {
        let winner = "";
        const choices = [...ChoicesBase];
        const enemyChoice = getEnemyChoice();

        const playerScore = choices.indexOf(playerChoice);
        const enemyScore = choices.indexOf(enemyChoice);

        if(playerScore === enemyScore){
            winner = "draw";
        } else if (playerScore === 0){                      //if player picked rock
            winner = enemyScore === 1 ? "enemy" : "player"; 
        } else if (playerScore === 1) {                     //if player picked paper
            winner = enemyScore === 2 ? "enemy" : "player"; 
        } else if (playerScore === 2) {                     //if player picked scissors
            winner = enemyScore === 1 ? "enemy" : "player"; 
        } else {                                            //else just call it a draw for edge cases
            winner = "draw";
        }

        return winner;
    }

    const play = (playerChoice) => {
        const winner = getWinnerOfTurn(playerChoice);
        const thisGameTurn = { ...GameObject };
        thisGameTurn.winner = winner;

        if(winner === 'player'){
            // setScore(score + 1);
            setScore(score + 1);
        }

        return thisGameTurn;
    }

    useEffect(() => {
        //TODO Do something when the game first load.
        setScore(0);
        setLoading(false);
    }, []);
    
    //pass objects and methods through
    const value = {
        currentMonster,
        play,
        score,
        monsters
    }

    return (
        <GameContext.Provider value={ value }>
            { !loading && children }
        </GameContext.Provider>
    )
}
