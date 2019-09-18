const { request } = require('graphql-request');
const Keys = require('./keys');
const { allCards } = require('./queries');


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

export default {
    requesterGraphql, requesterGraphqlFormatState, handleRequestCards
};