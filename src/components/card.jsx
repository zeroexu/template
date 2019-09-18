import React from 'react';
import image from '../assets/images/sample.png';
const Card = ({ card }) => {
    const { label, price } = card;
    return <div className={'card element'}>
        <img src={image} />
        <div>
            {label}
        </div>
        <div>
            {price}
        </div>
    </div>
}

export default Card;