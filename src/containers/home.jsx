import React, { useReducer } from 'react'
import Header from '../components/header'
import MiniCardListContaniner from '../components/mini_cards_container'
import CardList from '../components/card_list'
import { Context, initialState, reducer } from '../store/index'

const Home = () => {
  const [store, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ store, dispatch }}>
      <>
        <Header />
        <MiniCardListContaniner />
        <CardList />
      </>
    </Context.Provider>)
}

export default Home
