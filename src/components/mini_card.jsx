import React from 'react';

const MiniCard = ({ minicard }) => {
    const { label, price } = minicard;
    return <div className={'mini-card element'}>
        <div>
            {label}
        </div>
        <div>
            {price}
        </div>
    </div>
}

export default MiniCard;