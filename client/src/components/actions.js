import React from 'react';
import './actions.scss';
import { navigate } from '@reach/router';
import axios from 'axios';

const Actions = (props) => {
    const {player, setEhealth, setEattack, setEdefense, setEsatt, setEsdef, setEspeed, setEtype, setEplayer, pic, setPic} = props;

    const handleBattle = (e) => {
        const names = ['bulbasaur', 'charmander', 'squirtle', 'pikachu'];
        const selector = Math.floor(Math.random() * 3);
        const name = names[selector]
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((res) => {
                console.log(res.data);
                setEhealth(res.data.stats[0].base_stat);
                setEattack(res.data.stats[1].base_stat);
                setEdefense(res.data.stats[2].base_stat);
                setEsatt(res.data.stats[3].base_stat);
                setEsdef(res.data.stats[4].base_stat);
                setEspeed(res.data.stats[5].base_stat);
                setEtype(res.data.types[0].type.name);
                setEplayer(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        navigate("/battle");
    }

    const handleAppearance = (e) => {
        let i = pic;
        let max = 0;
        if (player.name === 'pikachu'){
            max = 4;
        } else {
            max = 2;
            }
            if (i < max){
                i += 1;
            } else {i = 1;}
        setPic(i);
        

    }

    return (
        <div className="d-flex flex-column justify-content-center">
            <div className="row col my-2">
                <button className="action text-center" onClick= { handleAppearance }>Change Appearance</button>
            </div>
            <div className="row col my-2">
                <button className="action text-center" onClick={ handleBattle }>Battle</button>
            </div>
            <div className="row col my-2">
                <button className="action text-center" >Learn Moves</button>
            </div>
        </div>
    )
}

export default Actions;