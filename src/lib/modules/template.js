const TEMPLATE_ENDPOINT = `sites/multiscreen/templates/`;

function createTemplateHandler(fetcher) {
    return {
        getTemplate(templateID) {
            return fetcher.get(`${TEMPLATE_ENDPOINT}${templateID}`);
        },

        getAllTemplates() {
            return fetcher.get(TEMPLATE_ENDPOINT);
        },

        updateTemplateName(templateID, newTemplateName) {
            return fetcher.post(`${TEMPLATE_ENDPOINT}${templateID}`, newTemplateName);
        },

        createTemplateFromSite(siteName, newTemplateName) {
            const body = {
                site_name: siteName,
                new_template_name: newTemplateName,
            };
            return fetcher.post(`${TEMPLATE_ENDPOINT}${templateID}fromsite`, body);
        },

        createTemplateFromTemplate(templateID, newTemplateName) {
            const body = {
                template_id: templateID,
                new_template_name: newTemplateName,
            };
            return fetcher.post(`${TEMPLATE_ENDPOINT}${templateID}fromtemplate`, body);
        },

        deleteTemplate(templateID) {
            return fetcher.delete(`${TEMPLATE_ENDPOINT}${templateID}`);
        },
    };
}

module.exports = createTemplateHandler;
