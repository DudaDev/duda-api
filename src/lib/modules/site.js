const SITE_ENDPOINT = `sites/multiscreen/`;

function createSiteHandler(fetcher) {
    return {
        getSite(siteName) {
            return fetcher.get(`${SITE_ENDPOINT}${siteName}`);
        },

        getSiteByExtId(siteName) {
            return fetcher.get(`${SITE_ENDPOINT}byexternalid/${siteName}`);
        },

        createSite(templateId, options = {}) {
            const data = {...options, template_id: templateId};
            return fetcher.post(`${SITE_ENDPOINT}create`, data);
        },

        updateSite(siteName, data) {
            return fetcher.post(`${SITE_ENDPOINT}update/${siteName}`, data);
        },

        deleteSite(siteName) {
            return fetcher.delete(`${SITE_ENDPOINT}${siteName}`);
        },

        getSiteToken(siteName) {
            return fetcher.get(`store/${siteName}/accessData`);
        },

        publishSite(siteName) {
            return fetcher.post(`${SITE_ENDPOINT}publish/${siteName}`);
        },

        unpublishSite(siteName) {
            return fetcher.post(`${SITE_ENDPOINT}unpublish/${siteName}`);
        },

        duplicateSite(siteName, data = {}) {
            return fetcher.post(`${SITE_ENDPOINT}duplicate/${siteName}`, data);
        },

        resetSite(siteName, templateId, removeBizInfos = false) {
            const data = {
                template_id: templateId,
                site_data: {removeBizInfos}
            }
            return fetcher.post(`${SITE_ENDPOINT}reset/${siteName}`, data);
        },

        switchTemplate(siteName, newTemplate) {
            const data = {template_id: newTemplate}
            return fetcher.post(`${SITE_ENDPOINT}switchTemplate/${siteName}`, data);
        },
    };
}

module.exports = createSiteHandler;
