import React, { useContext } from 'react';
import { Context } from "../store/index";
const utils = require('../utils/utils');
const { handleCurrentStay } = utils.default;

const MiniCard = ({ minicard }) => {
    const { store, dispatch } = useContext(Context);
    const { label, bestPrice, customId } = minicard;
    return <button className={'mini-card element'} onClick={() => {
        handleCurrentStay(dispatch, customId);
    }}>

        <div>
            <span className={'sub-title'}>{label}</span>
        </div>
        <div>
            <span className={'title'}>${bestPrice}</span>
        </div>

    </button>
}

export default MiniCard;