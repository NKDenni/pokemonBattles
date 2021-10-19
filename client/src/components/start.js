import React, { useEffect, useState } from 'react';
import './start.scss';
import axios from 'axios';

const Start= (props) => {

    const [pokeballs, setPokeballs] = useState([]);


    useEffect(() => {
        const promises= [];
        for (let i = 1; i < 17; i++) {
            promises.push(axios.get(`https://pokeapi.co/api/v2/item/${i}`))
        }
        Promise.all(promises)
            .then(res =>{
                console.log(res);
                const balls = res.map((item) => {
                    return item.data.sprites.default
                })
                console.log(balls);
                setPokeballs(balls);
            })

    }, [])

    return (
    <div>
        <div className="row">
            <div className="col p-0 d-flex flex-wrap justify-content-evenly">
                    <img className="pokemon text-center img-fluid" src={'./img/pokemon/1-bulbasaur.png'} alt="Bulbasaur" />
                    <img className="pokemon text-center img-fluid" src={'./img/pokemon/2-charmander.png'} alt="Charmander" />
                    <img className="pokemon text-center img-fluid" src={'./img/pokemon/3-squirtle.png'} alt="Squirtle" />
            </div>
        </div>
        <div className="row align-items-center choice">Choose your starter!</div>
        <div className="row d-flex flex-row justify-content-center">

            {console.log('hello')}
            {console.log(pokeballs)}
            {pokeballs.map((ball,index)=>{
                return(
                    <img key={index} className="p-0 balls" src={ ball} alt="ball" />
                )
            })}
        </div>
        <div className="col">
                <img className="text-center pokemon" src={'./img/pokemon/4-pikachu.png'} alt="Pikachu" />
        </div>
    </div>
    )
}

export default Start;