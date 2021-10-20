import React, { useContext, useState, useEffect } from 'react';

const ChoiceContext = React.createContext();

export function useChoice(){
    return useContext(ChoiceContext)
}



// on click -> make axios call grab pokemon data
// take data and fill out pokemon card
// save pokemon card to local storage or cookie
