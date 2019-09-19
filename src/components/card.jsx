import React from 'react';
import image from '../assets/images/sample.png';
const Card = ({ card }) => {
    const { label, price } = card;
    return <div className={'card element'}>
        <img src={image} />
        <div className={'inner'}>
            <div>
                <span className={'sub-title float-left'}>xxxx</span>
                <span className={'sub-title float-right'}>yyyy</span>
            </div>
            <div className={'cleaner-floater'}>
                <span className={'title float-left'}>{label}</span>
                <span className={'title float-right'}>{price}</span>

            </div>
            <div className={'cleaner-floater'}>
                <button>Button</button>
            </div>
            <div className={'cleaner-floater'}>
            </div>
        </div>

    </div>
}

export default Card;