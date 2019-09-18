const { request } = require('graphql-request')

const requester = (url, query) => {
    return request(url, query);
}

module.exports = {
    requester
};