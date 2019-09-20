const { request } = require('graphql-request');
const Keys = require('./keys');
const { allCards, allStayDatasByLabelStart, allCardsByStayId } = require('./queries');


const requesterGraphql = (url, query) => {
    return request(url, query);
}

const requesterGraphqlFormatState = async (url, query) => {
    const response = await requesterGraphql(url, query);
    return {
        loading: false,
        data: response
    }
}

const handleRequestCards = async (dispatch) => {
    let url = Keys.REPOSITORIES.GRAPH_API;
    let query = allCards();

    const response = await requesterGraphql(url, query);


    return dispatch({
        type: "getAllCards",
        response: {
            loading: false,
            data: response
        }
    });
}

const handleRequestCardsByStayId = async (dispatch, id) => {
    let url = Keys.REPOSITORIES.GRAPH_API;
    let query = allCardsByStayId(id);
    if (id === 0)
        query = allCards();

    const response = await requesterGraphql(url, query);


    return dispatch({
        type: "getAllCards",
        response: {
            loading: false,
            data: response
        }
    });
}

const handleRequestStayData = async (dispatch) => {
    let url = Keys.REPOSITORIES.GRAPH_API;
    let query = allStayDatasByLabelStart("");

    const response = await requesterGraphql(url, query);

    return dispatch({
        type: "getAllStayData",
        response: {
            loading: false,
            data: response
        }
    });
}

const handleCurrentStay = (dispatch, stayId) => {
    return dispatch({
        type: "setCurrentStay",
        newStay: stayId
    });
}

export default {
    requesterGraphql,
    requesterGraphqlFormatState,
    handleRequestCards,
    handleRequestStayData,
    handleCurrentStay,
    handleRequestCardsByStayId
};