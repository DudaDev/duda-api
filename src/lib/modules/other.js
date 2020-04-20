const SITE_ENDPOINT = `sites/multiscreen/`;

function createOtherHandler(fetcher) {
    return {
        getAllBackups(siteName) {
            return this.get(`${CONSTANTS.SITE_ENDPOINT}multiscreen/backups/${siteName}`);
        },

        createBackup(siteName, backupName) {
            const data = {
                name: backupName,
            };
            return this.post(`${CONSTANTS.SITE_ENDPOINT}backups/${siteName}/create`, data);
        },

        restoreSite(siteName, backupName) {
            return this.post(`${CONSTANTS.SITE_ENDPOINT}backups/${siteName}/restore/${backupName}`);
        },

        deleteBackup(siteName, backupName) {
            return this.delete(
                `${CONSTANTS.SITE_ENDPOINT}backups/${siteName}/restore/${backupName}`
            );
        },

        generateSSLCerificate(siteName) {
            return this.post(`${CONSTANTS.SITE_ENDPOINT}${siteName}/certificate`);
        },

        renewSSLCerificate(siteName) {
            return this.post(`${CONSTANTS.SITE_ENDPOINT}${siteName}/certificate/renew`);
        },

        deleteSSLCerificate(siteName) {
            return this.delete(`${CONSTANTS.SITE_ENDPOINT}${siteName}/certificate`);
        },

        customCall(method, path, data = null) {
            switch (method.toLowerCase()) {
                case "get":
                    return this.get(path);
                case "post":
                    return this.post(path, data);
                case "put":
                    return this.put(path, data);
                case "delete":
                    return this.delete(path);
                default:
                    throw new Error("Invalid method");
            }
        },
    };
}

module.exports = createOtherHandler;

