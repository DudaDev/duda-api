const fetch = require('node-fetch');

function createFetcher({ token, baseURL }) {
    const requestParams = {
        headers: {
            Authorization: `Basic ${token}`,
            "Content-Type": "application/json",
            "User-Agent": "Duda REST API"
        }
    };
    async function makeRequest(type, path, data) {
        requestParams.method = type;
        if (data) {
            requestParams.body = JSON.stringify(data);
        }
        const response = await fetch(`${baseURL}/${path}`, requestParams);
        return (response.status === 200 ?  response.json() : response);
    }

    return {
        get(path) {
            return makeRequest('GET', path)
        },
        post(path, data) {
            return makeRequest('POST', path, data)
        },
        put(path, data) {
            return makeRequest('PUT', path, data)
        },
        delete(path) {
            return makeRequest('DELETE', path)
        },
    };
}

module.exports = createFetcher;
