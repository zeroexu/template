import React, { useContext, useState } from 'react'
import { Context } from '../store/index'
import MiniCardList from './mini_card_list'

const MiniCardListContaniner = () => {
  const { store } = useContext(Context)
  return (
    <div className='bow-mini'>
      <h1>Los vuelos más baratos para tu estadía <span className='strong'>{store.currentSiteMessage}</span></h1>
      <MiniCardList />
    </div>
  )
}

export default MiniCardListContaniner
