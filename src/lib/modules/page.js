const SITE_ENDPOINT = `sites/multiscreen/`;

function createPageHandler(fetcher) {

    return {
        getPageDetails(siteName, pageName) {
            return fetcher.get(`${SITE_ENDPOINT}${siteName}/pages/${pageName}`);
        },
    
        getSitePages(siteName) {
            return fetcher.get(`${SITE_ENDPOINT}${siteName}/pages`);
        },
    
        updatePage(siteName, pageName, data) {
            return fetcher.post(`${SITE_ENDPOINT}${siteName}/pages/${pageName}/update`, data);
        },
    
        duplicatePage(siteName, pageName, newPageTitle) {
            return fetcher.post(`${SITE_ENDPOINT}${siteName}/pages/${pageName}/duplicate?pageTitle=${newPageTitle}`);
        },
    
        deletePage(siteName, pageName) {
            return fetcher.delete(`${SITE_ENDPOINT}${siteName}/pages/${pageName}/delete`);
        }
    }

}

module.exports = createPageHandler;