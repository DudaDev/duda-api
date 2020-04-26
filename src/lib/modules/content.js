const SITE_ENDPOINT = `sites/multiscreen/`;
const CONTENT_INJECTION_ENDPOINT = "sites/multiscreen/inject-content/";
const MULTI_LOCATION_ENDPOINT = "content/location/";

function createContentHandler(fetcher) {
    return {
        getSiteContentLibrary(siteName) {
            return fetcher.get(`${SITE_ENDPOINT}${siteName}/content`);
        },

        updateSiteContentLibrary(siteName, data) {
            return fetcher.post(`${SITE_ENDPOINT}${siteName}/content`, data);
        },

        publishContentLibraryChanges(siteName) {
            return fetcher.post(`${SITE_ENDPOINT}${siteName}/content/publish`);
        },

        //multi-location

        getLocationData(siteName, locationID) {
            return fetcher.get(
                `${SITE_ENDPOINT}${siteName}/${MULTI_LOCATION_ENDPOINT}${locationID}`
            );
        },

        createLocation(siteName, data) {
            return fetcher.post(`${SITE_ENDPOINT}${siteName}/${MULTI_LOCATION_ENDPOINT}`, data);
        },

        updateLocation(siteName, locationID) {
            return fetcher.psot(
                `${SITE_ENDPOINT}${siteName}/${MULTI_LOCATION_ENDPOINT}${locationID}`
            );
        },

        deleteLocation(siteName, locationID) {
            return fetcher.delete(
                `${SITE_ENDPOINT}${siteName}/${MULTI_LOCATION_ENDPOINT}${locationID}`
            );
        },

        //content injection

        uploadResource(siteName, data) {
            return fetcher.post(`${SITE_ENDPOINT}resources/${siteName}/upload`, data);
        },

        injectContent(siteName, data) {
            return fetcher.post(`${CONTENT_INJECTION_ENDPOINT}${siteName}`, data);
        },

        injectContentToSinglePage(siteName, pageName, data) {
            return fetcher.post(`${CONTENT_INJECTION_ENDPOINT}${siteName}/${pageName}`, data);
        },

        getContentInjectionValues(siteName) {
            return fetcher.get(`${CONTENT_INJECTION_ENDPOINT}${siteName}`);
        },
    };
}

module.exports = createContentHandler;
