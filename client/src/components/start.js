import React, { useEffect, useState } from 'react';
import './start.scss';
import axios from 'axios';

const Start= (props) => {

    const { setPlayer, setPtype, setPhealth, setPattack, setPdefense, setPsatt, setPsdef, setPspeed, setPflavor, setSelected} = props;

    const [pokeballs, setPokeballs] = useState([]);

    useEffect(() => {
        const promises= [];
        for (let i = 1; i < 17; i++) {
            promises.push(axios.get(`https://pokeapi.co/api/v2/item/${i}`))
        }
        Promise.all(promises)
            .then(res =>{
                // console.log(res);
                const balls = res.map((item) => {
                    return item.data.sprites.default
                })
                // console.log(balls);
                setPokeballs(balls);
            })

    }, [])

    const handleBulbasaur = () =>{
        console.log('Bulbasaur')
        axios.get('https://pokeapi.co/api/v2/pokemon/bulbasaur')
            .then((res) => {
                // console.log(res.data);
                setPhealth(res.data.stats[0].base_stat);
                setPattack(res.data.stats[1].base_stat);
                setPdefense(res.data.stats[2].base_stat);
                setPsatt(res.data.stats[3].base_stat);
                setPsdef(res.data.stats[4].base_stat);
                setPspeed(res.data.stats[5].base_stat);
                setPtype(res.data.types[0].type.name);
                setPlayer(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        axios.get('https://pokeapi.co/api/v2/pokemon-species/bulbasaur')
            .then((res) =>{
                let fact = res.data.flavor_text_entries[0].flavor_text;
                console.log(fact.replace(/[\n\f]/g, ' '))
                setPflavor(fact.replace(/[\n\f]/g, ' '))
            })
            .catch((err) => {
                console.log(err);
            })
        setSelected(true);
    }

    const handleCharmander = () => {
        console.log('Charmander')
        axios.get('https://pokeapi.co/api/v2/pokemon/charmander')
            .then((res) => {
                // console.log(res.data);
                setPhealth(res.data.stats[0].base_stat);
                setPattack(res.data.stats[1].base_stat);
                setPdefense(res.data.stats[2].base_stat);
                setPsatt(res.data.stats[3].base_stat);
                setPsdef(res.data.stats[4].base_stat);
                setPspeed(res.data.stats[5].base_stat);
                setPtype(res.data.types[0].type.name);
                setPlayer(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        axios.get('https://pokeapi.co/api/v2/pokemon-species/charmander')
            .then((res) => {
                let fact = res.data.flavor_text_entries[0].flavor_text;
                console.log(fact.replace(/[\n\f]/g, ' '))
                setPflavor(fact.replace(/[\n\f]/g, ' '))
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleSquirtle = () => {
        console.log('Squirtle')
        axios.get('https://pokeapi.co/api/v2/pokemon/squirtle')
            .then((res) => {
                // console.log(res.data);
                setPhealth(res.data.stats[0].base_stat);
                setPattack(res.data.stats[1].base_stat);
                setPdefense(res.data.stats[2].base_stat);
                setPsatt(res.data.stats[3].base_stat);
                setPsdef(res.data.stats[4].base_stat);
                setPspeed(res.data.stats[5].base_stat);
                setPtype(res.data.types[0].type.name);
                setPlayer(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        axios.get('https://pokeapi.co/api/v2/pokemon-species/squirtle')
            .then((res) => {
                let fact = res.data.flavor_text_entries[0].flavor_text;
                console.log(fact.replace(/[\n\f]/g, ' '))
                setPflavor(fact.replace(/[\n\f]/g, ' '))
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handlePikachu = () => {
        console.log('Pikachu')
        axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
            .then((res) => {
                // console.log(res.data);
                // console.log(res.data.name);
                // console.log(res.data.id);
                // console.log(res.data.stats[0].base_stat);
                // console.log(res.data.stats[1].base_stat);
                // console.log(res.data.types[0].type.name);
                setPhealth(res.data.stats[0].base_stat);
                setPattack(res.data.stats[1].base_stat);
                setPdefense(res.data.stats[2].base_stat);
                setPsatt(res.data.stats[3].base_stat);
                setPsdef(res.data.stats[4].base_stat);
                setPspeed(res.data.stats[5].base_stat);
                setPtype(res.data.types[0].type.name);
                setPlayer(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        axios.get('https://pokeapi.co/api/v2/pokemon-species/pikachu')
            .then((res) => {
                let fact = res.data.flavor_text_entries[1].flavor_text;
                console.log(fact.replace(/[\n\f]/g, ' '))
                setPflavor(fact.replace(/[\n\f]/g, ' '))
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // console.log('Outside');
    // console.log(player);
    // console.log(ptype);
    // console.log(phealth);
    // console.log(pattack);
    // console.log(pdefense);
    // console.log(psatt);
    // console.log(psdef);
    // console.log(pspeed);
    // console.log(pflavor)

    return (
    <div>
        <div className="row">
            <div className="col p-0 d-flex flex-wrap justify-content-evenly">
                    <img className="pokemon text-center" onClick={handleBulbasaur} src={'./img/pokemon/bulbasaur/1-bulbasaur.png'} alt="Bulbasaur" />
                    <img className="pokemon text-center" onClick={handleCharmander} src={'./img/pokemon/charmander/1-charmander.png'} alt="Charmander" />
                    <img className="pokemon text-center" onClick={handleSquirtle} src={'./img/pokemon/squirtle/1-squirtle.png'} alt="Squirtle" />
            </div>
        </div>
        <div className="row align-items-center choice">Choose your starter!</div>
        <div className="row d-flex flex-row justify-content-center">
            {pokeballs.map((ball,index)=>{
                return(
                    <img key={index} className="p-0 balls" src={ ball } alt="ball" />
                )
            })}
        </div>
        <div className="col">
                <img className="text-center pokemon" onClick={handlePikachu} src={'./img/pokemon/pikachu/1-pikachu.png'} alt="Pikachu" />
        </div>
    </div>
    )
}

export default Start;