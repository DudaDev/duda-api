const SITE_ENDPOINT = `sites/multiscreen/`;

function createCollectionHandler(fetcher) {
    return {
        getCollection(siteName, collectionName) {
            return this.get(`${SITE_ENDPOINT}${siteName}/collection/${collectionName}`);
        },

        getSiteCollections(siteName) {
            return this.get(`${SITE_ENDPOINT}${siteName}/collection`);
        },

        createCollection(siteName, data) {
            return this.post(`${SITE_ENDPOINT}${siteName}/collection`, data);
        },

        updateCollectionName(siteName, CollectionName, data) {
            return this.put(`${SITE_ENDPOINT}${siteName}/collection/${CollectionName}`, data);
        },

        deleteCollection(siteName, collectionName) {
            return this.get(`${SITE_ENDPOINT}${siteName}/collection/${collectionName}`);
        },

        //collection rows

        addRow(siteName, collectionName, data) {
            return this.post(`${SITE_ENDPOINT}${siteName}/collection/${collectionName}/row`, data);
        },

        updateRow(siteName, collectionName, data) {
            return this.put(`${SITE_ENDPOINT}${siteName}/collection/${collectionName}/row`, data);
        },

        delteRow(siteName, collectionName, data) {
            return this.delete(
                `${SITE_ENDPOINT}${siteName}/collection/${collectionName}/row`,
                data
            );
        },

        //collection fields

        addField(siteName, collectionName, data) {
            return this.post(
                `${SITE_ENDPOINT}${siteName}/collection/${collectionName}/field`,
                data
            );
        },

        addField(siteName, collectionName, fieldName, data) {
            return this.put(
                `${SITE_ENDPOINT}${siteName}/collection/${collectionName}/field/${fieldName}`,
                data
            );
        },

        deleteField(siteName, collectionName, fieldName) {
            return this.put(
                `${SITE_ENDPOINT}${siteName}/collection/${collectionName}/field/${fieldName}`
            );
        },
    };
}

module.exports = createCollectionHandler;
