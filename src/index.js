const createFetcher = require('./lib/fetcher')
const createSiteHandler = require('./lib/modules/site')
const createTemplateHandler = require('./lib/modules/template')
const createPageHandler = require('./lib/modules/page')

function createClient(token) {
    const fetcher = createFetcher({
      token, // Get this from environment variable
      baseURL: "https://api.duda.co/api" // this also can come from environment variable
    });
    return {
      ...createSiteHandler(fetcher),
      ...createTemplateHandler(fetcher),
      ...createPageHandler(fetcher)
    };
}

module.exports = createClient;