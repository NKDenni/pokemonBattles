import React, { } from 'react';
import './start.scss';
// import axios from 'axios';

const Start= (props) => {

// const [pokeballs, setPokeballs] = useState([]);
// const ballarr = [];

    // useEffect(() => {
    //     const balls = [];
    //     for (let i = 1; i < 17; i++) {
    //     axios.get(`https://pokeapi.co/api/v2/item/${i}`)
    //         .then(res => {
    //             const urlList = ({ ...res.data })
    //             balls.push(urlList.sprites);
    //         })
    //         .catch((err) => console.log(err));
    //     }
    //     setPokeballs(balls)
    // }, [])

    // // const pokeballs = () =>{
    // //     for (let i = 1; i < 17; i++) {
    // //         axios.get(`https://pokeapi.co/api/v2/item/${i}`)
    // //             .then(res => {
    // //                 const urlList = ({ ...res.data })
    // //                 ballarr.push(urlList.sprites);
    // //             })
    // //             .catch((err) => console.log(err));
    // //     }
    // //     setBalls(ballarr);
    // // }

    // console.log(pokeballs);

    return (
    <div>
        <yellowButton text={"START"} />
        <div className="row">
            <div className="col d-flex flex-wrap justify-content-center">
                <img className="text-center img-fluid pokemon" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'} alt="Bulbasaur" />
                <img className="text-center img-fluid pokemon" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'} alt="Charmander" />
                <img className="text-center img-fluid pokemon" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'} alt="Squirtle" />
            </div>
        </div>
        <div className="row align-items-center choice">Choose your starter!</div>
        <div className="row d-flex justify-content-center">
            {/* Temporarily adding hardcoded URLS just to get this page done */}
            <img className="p-0 balls" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'} alt="poke-ball" />
            <img className="p-0 balls" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png'} alt="great-ball" />
            <img className="p-0 balls" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png'} alt="ultra-ball" />
            <img className="p-0 balls" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png'} alt="master-ball" />
            <img className="p-0 balls" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/beast-ball.png'} alt="beast-ball" />
            <img className="p-0 balls" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/net-ball.png'} alt="net-ball" />
            <img className="p-0 balls" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/nest-ball.png'} alt="nest-ball" />
            <img className="p-0 balls" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/safari-ball.png'} alt="safari-ball" />
            <img className="p-0 balls" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lure-ball.png'} alt="lure-ball" />
            <img className="p-0 balls" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/moon-ball.png'} alt="moon-ball" />
            <img className="p-0 balls" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/park-ball.png'} alt="park-ball" />
            <img className="p-0 balls" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dusk-ball.png'} alt="dusk-ball" />
            <img className="p-0 balls" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/heavy-ball.png'} alt="heavy-ball" />
            <img className="p-0 balls" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/heal-ball.png'} alt="heal-ball" />
            <img className="p-0 balls" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/love-ball.png'} alt="love-ball" />
            <img className="p-0 balls" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dive-ball.png'} alt="dive-ball" />
            <img className="p-0 balls" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/cherish-ball.png'} alt="cherish-ball" />

            {/* here is my attempt at grabbing the URL's out of the array of objects */}

            {/* {pokeballs.map((ball, index) => {
                console.log('list');
                console.log(ball);
                return (
                    <div key={index}><span>{ball.default}</span>
                        <img src={ball.default} alt="missing pokeball"/>
                    </div>
                )
            })} */}
        </div>
        <div className="col">
                <img className="text-center pokemon" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'} alt="Pikachu" />
        </div>
    </div>
    )
}

export default Start;