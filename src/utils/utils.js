import { gzip } from 'zlib'

const { request } = require('graphql-request')
const Keys = require('./keys')
const { allCards, allStayDatasByLabelStart, allCardsByStayId } = require('./queries')

const requesterGraphql = (url, query) => {
  return request(url, query)
}

const requesterGraphqlFormatState = async (url, query) => {
  const response = await requesterGraphql(url, query)
  return {
    loading: false,
    data: response
  }
}

const handleRequestCards = async (dispatch) => {
  const url = Keys.REPOSITORIES.GRAPH_API
  const query = allCards()

  const response = await requesterGraphql(url, query)
  return processCardsResponse(dispatch, response)
}

const handleRequestCardsByStayId = async (dispatch, id) => {
  const url = Keys.REPOSITORIES.GRAPH_API
  let query = allCardsByStayId(id)
  if (id === 0) {
    query = allCards()
  }

  const response = await requesterGraphql(url, query)
  return processCardsResponse(dispatch, response)
}

const processCardsResponse = (dispatch, response) => {
  refineNameFromCardsRequested(response.allCards)
  const currentSites = filterNameFromCardsRequested(response.allCards)
  return dispatch({
    type: 'getAllCards',
    response: {
      loading: false,
      data: response.allCards,
      currentSites: currentSites,
      currentSiteMessage: setMessageSite(currentSites)
    }
  })
}

const handleRequestStayData = async (dispatch) => {
  const url = Keys.REPOSITORIES.GRAPH_API
  const query = allStayDatasByLabelStart('')

  const response = await requesterGraphql(url, query)

  return dispatch({
    type: 'getAllStayData',
    response: {
      loading: false,
      data: response.allStayDatas
    }
  })
}

const handleCurrentStay = (dispatch, stayId) => {
  return dispatch({
    type: 'setCurrentStay',
    newStay: stayId
  })
}


const hackName = (img_name) => {
  const partials = img_name.split('/')

  if (partials.length > 0) {
    return partials[partials.length - 1]
      .replace('.jpg', '')
      .replace('cluster-', '')
      .replace('img-', '')
      .replace(/_/gi, ' ')
      .replace(/-/gi, ' ')
      .toUpperCase()
  } else {
    return ""
  }
}

const refineNameFromCardsRequested = (cards) => {
  cards.map(card => {
    return card.nameSite = hackName(card.imgUrl)
  })
}

const filterNameFromCardsRequested = (cards) => {
  const sites = []
  cards.forEach(card => {
    sites.push(card.nameSite)
  })
  return [...new Set(sites)]
}

const setMessageSite = (sites) => {
  if (sites.length > 1) {
    return "en todas las estadías"
  } else {
    return "en " + [...new Set(sites)][0]
  }
}

export default {
  requesterGraphql,
  requesterGraphqlFormatState,
  handleRequestCards,
  handleRequestStayData,
  handleCurrentStay,
  handleRequestCardsByStayId
}
