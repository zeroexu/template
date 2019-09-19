import React from 'react';
import MiniCard from './mini_card';
const MiniCardList = ({ miniCards = [] }) => {
    return <div className={'bow-mini'}>
        <h1>Un titulo para <span className={'strong'}>algo</span></h1>
        <div className={'mini-card-list'}>
            {miniCards.map((minicard, index) => {
                return <MiniCard minicard={minicard} key={index} />
            })}
        </div>
    </div>
}

export default MiniCardList;