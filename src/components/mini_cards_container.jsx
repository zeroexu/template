import React from 'react';
import MiniCardList from './mini_card_list';

const MiniCardListContaniner = () => {
    return <div className={'bow-mini'}>
        <h1>Los vuelos màs baratos para tu estadía en <span className={'strong'}>Miami</span></h1>
        <MiniCardList />
    </div>
}

export default MiniCardListContaniner;