import React, { useContext } from 'react';
import { Context } from "../store/index";
const utils = require('../utils/utils');
const { handleRequestCards } = utils.default;

import Card from './card';
const CardList = () => {
    const { store, dispatch } = useContext(Context);
    if (store.firstLoadCards === true)
        handleRequestCards(dispatch);
    const cards = store.card;
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