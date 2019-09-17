import React from 'react';
import Header from '../components/header';
import MiniCardList from '../components/mini_card_list';
import CardList from '../components/card_list';

const Home = () => {
    return <React.Fragment>
        <header />
        <MiniCardList />
        <CardList />
    </React.Fragment>
}

export default Home;