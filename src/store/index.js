import React from "react";

export const initialState = {
    count: 0,
    loadingcards: false,
    firstLoadStay: true,
    firstLoadCards: true,
    minicards: [],
    card: [],
    currentStay: 0
};

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
                    firstLoadCards: false,
                    loadingcards: action.response.loading,
                    cards: action.response.data.allCards
                };
            break;
        case "getAllStayData":
            console.log(action.response)
            if (action.response)
                newstate = {
                    firstLoadStay: false,
                    loadingstays: action.response.loading,
                    minicards: action.response.data.allStayDatas
                };
            break;
        case "setCurrentStay":
            newstate = { currentStay: action.newStay };
            break;
        default:
            newstate = {};
    }
    const copyState = Object.assign({}, state);
    return Object.assign(copyState, newstate);
};

export const Context = React.createContext();
