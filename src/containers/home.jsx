import React, { useReducer } from 'react';
import Header from '../components/header';
import MiniCardList from '../components/mini_card_list';
import CardList from '../components/card_list';
import Photo from '../components/test/photo';
import RedSquare from '../components/test/RedSquare';
import { Context, initialState, reducer } from "../store/index";
const path = require('path');
const sampleData = [
    {
        label: 'Un test de Algo', price: '$777', src: '',
    },
    {
        label: 'Un test de Algo', price: '$777', src: '',
    },
    {
        label: 'Un test de Algo', price: '$777', src: '',
    },
    {
        label: 'Un test de Algo', price: '$777', src: '',
    },
    {
        label: 'Un test de Algo', price: '$777', src: '',
    },
];


const Home = () => {
    const [store, dispatch] = useReducer(reducer, initialState);
    return <Context.Provider value={{ store, dispatch }}>
        <React.Fragment>
            <Header />
            <MiniCardList miniCards={sampleData} />
            <CardList cards={sampleData} />
        </React.Fragment>
    </Context.Provider>
}



export default Home;