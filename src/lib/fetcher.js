const fetch = require("isomorphic-fetch");

function createFetcher({ token, baseURL }) {
    const requestParams = {
        headers: new Headers({
            Authorization: `Basic ${token}`,
            "content-type": "application/json",
            "User-Agent": "Duda REST API"
        })
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
