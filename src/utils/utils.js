const { request } = require('graphql-request');

const requesterGraphql = (url, query) => {
    return request(url, query);
}


module.exports = {
    requesterGraphql
};