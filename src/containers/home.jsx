import React, { useReducer } from 'react';
import Header from '../components/header';
import MiniCardListContaniner from '../components/mini_cards_container';
import CardList from '../components/card_list';
import Card from '../components/card';
import Photo from '../components/test/photo';
import RedSquare from '../components/test/RedSquare';
import { Context, initialState, reducer } from "../store/index";
const path = require('path');
const predata = {
    label: 'Aaaaa', price: 'nnnn', src: '',
};
const sampleData = [predata, predata, predata, predata, predata, predata];

const Home = () => {
    const [store, dispatch] = useReducer(reducer, initialState);

    return <Context.Provider value={{ store, dispatch }}>
        <React.Fragment>
            <Header />
            <MiniCardListContaniner />
            <CardList />
        </React.Fragment>
    </Context.Provider>
}



export default Home;
/*<Header />
            <MiniCardList miniCards={sampleData} />
            <CardList cards={sampleData} />*/