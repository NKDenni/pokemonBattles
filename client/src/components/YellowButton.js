import React from 'react'

const YellowButton = (props) => {
    const { text, handleClick } = props;

    return (
        <div>
            <button className="cartoon-button font-pokemon" onClick={ handleClick }
            style={{
                backgroundImage:`url("./img/UI/yellow_160x50Button.png")`,
                backgroundColor:`transparent`,
                backgroundSize:`cover`,
                backgroundPosition:`center`,
                width:`160px`,
                height:`50px`,
                borderRadius:`10px`,
                border:'none',
                padding:`0`,
                color:`#0061ff`,
                margin:`auto`,
                fontSize:`20px`
                }}><h2 className="font-pokemon" style={{marginBottom: `12px`}}>{ text }</h2></button>
        </div>
    )
}

export default YellowButton
