import React, { useContext, useState, useEffect } from 'react';

const AppearanceContext = React.createContext();

export function changeAppearance(){
    return useContext(AppearanceContext)
}

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }
// class SLL {
//     constructor() {
//         this.head = null;
//     }
//     nextNode(curr) = 
// }

// gets name of pokemon

// pikachu:
//    1 -> 2 -> 3 -> 4 and points back to 1
// bublasaur:
//    1 -> 2 and points back to 1

