import React, { useContext, useState } from 'react'
import { Context } from '../store/index'
import Card from './card'
const utils = require('../utils/utils')
const { handleRequestCards, handleRequestCardsByStayId } = utils.default

const callRequest = () => {
  const { store, dispatch } = useContext(Context)
  const [localStayId, setStay] = useState(0)

  if (store.firstLoadCards === true) {
    handleRequestCards(dispatch)
  }

  if (parseInt(localStayId, 10) !== parseInt(store.currentStay, 10)) {
    handleRequestCardsByStayId(dispatch, parseInt(store.currentStay, 10))
    setStay(parseInt(store.currentStay, 10))
  }
}

const CardList = () => {
  const { store } = useContext(Context)
  callRequest()

  const cards = store.cards
  return (
    <div className='bow'>
      <h1>Vuelos destacados en <span className='strong'>todas las estadías</span></h1>
      <div className='card-list'>
        {cards.map((card, index) => {
          return <Card card={card} key={index} />
        })}
      </div>
    </div>)
}

export default CardList
