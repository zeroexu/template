import React from 'react';
import MiniCardList from './mini_card_list';

const MiniCardListContaniner = () => {
    return <div className={'bow-mini'}>
        <h1>Un titulo para <span className={'strong'}>algo</span></h1>
        <MiniCardList />
    </div>
}

export default MiniCardListContaniner;