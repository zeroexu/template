import React from 'react';
import MiniCard from './mini_card';
const MiniCardList = ({ miniCards = [] }) => {
    return <div className={'mini-card-list'}>
        {miniCards.map(minicard => {
            return <MiniCard minicard={minicard} />
        })}
    </div>
}

export default MiniCardList;