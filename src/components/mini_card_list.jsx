import React, { useContext } from 'react'
import { Context } from '../store/index'
import MiniCard from './mini_card'
const utils = require('../utils/utils')
const { handleRequestStayData } = utils.default

const MiniCardList = () => {
  const { store, dispatch } = useContext(Context)
  if (store.firstLoadStay === true) {
    handleRequestStayData(dispatch)
  }

  const minicards = store.minicards
  return (
    <div className='mini-card-list'>
      {minicards.map((minicard, index) => {
        return <MiniCard minicard={minicard} key={index} />
      })}
    </div>)
}

export default MiniCardList
