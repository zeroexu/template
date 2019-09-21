import React from 'react'
export const initialState = {
  count: 0,
  loadingcards: false,
  firstLoadStay: true,
  firstLoadCards: true,
  minicards: [],
  cards: [],
  currentStay: 0
}

export const reducer = (state, action) => {
  let newstate = {}
  switch (action.type) {
    case 'reset':
      newstate = initialState
      break
    case 'getAllCards':
      if (action.response) {
        newstate = {
          firstLoadCards: false,
          loadingcards: action.response.loading,
          cards: action.response.data
        }
      }
      break
    case 'getAllStayData':
      if (action.response) {
        newstate = {
          firstLoadStay: false,
          loadingstays: action.response.loading,
          minicards: action.response.data
        }
      }
      break
    case 'setCurrentStay':
      newstate = { currentStay: action.newStay }
      break
    case 'getAllCardByStayId':
      newstate = {
        firstLoadCards: false,
        loadingcards: action.response.loading,
        cards: action.response.data
      }
      break
    default:
      newstate = {}
  }
  const copyState = Object.assign({}, state)
  return Object.assign(copyState, newstate)
}

export const Context = React.createContext()
