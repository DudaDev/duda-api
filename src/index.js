const createFetcher = require('./lib/fetcher')
const createSiteHandler = require('./lib/modules/site')
const createTemplateHandler = require('./lib/modules/template')
const createPageHandler = require('./lib/modules/page')
const createAccountHandler = require('./lib/modules/account')
const createContentHandler = require('./lib/modules/content')
const createOtherHandler = require('./lib/modules/other')

function createClient(token, baseURL = 'https://api.duda.co/api') {
    const fetcher = createFetcher({
      token,
      baseURL
    });
    return {
      ...createSiteHandler(fetcher),
      ...createTemplateHandler(fetcher),
      ...createPageHandler(fetcher),
      ...createAccountHandler(fetcher),
      ...createContentHandler(fetcher),
      ...createOtherHandler(fetcher)
    };
}

module.exports = createClient;