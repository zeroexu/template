import React from "react";

export const initialState = { count: 0, loadingcards: false };

export const reducer = (state, action) => {
    console.log(state, action)
    let newstate = {}
    switch (action.type) {
        case "reset":
            newstate = initialState;
            break;
        case "increment":
            newstate = { count: state.count + 1 };
            break;
        case "decrement":
            newstate = { count: state.count - 1 };
            break;
        case "getAllCards":
            console.log(action.response)
            if (action.response)
                newstate = {
                    loadingcards: action.response.loading,
                    cards: action.response.data.allCards
                };
            break;
        default:
            newstate = {};
    }
    const copyState = Object.assign({}, state);
    return Object.assign(copyState, newstate);
};

export const Context = React.createContext();
