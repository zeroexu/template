import React from 'react';
import Card from './card';
const CardList = ({ cards = [] }) => {
    return <div className={'card-list'}>
        {cards.map(card => {
            return <Card card={card} />
        })}
    </div>
}

export default CardList;