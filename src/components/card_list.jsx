import React from 'react';
import Card from './card';
const CardList = ({ cards = [] }) => {
    return <div className={'bow'}>
        <h1>Un titulo para <span className={'strong'}>algo</span></h1>
        <div className={'card-list'}>
            {cards.map((card, index) => {
                return <Card card={card} key={index} />
            })}
        </div>
    </div>

}

export default CardList;