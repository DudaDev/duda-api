const ACCOUNT_ENDPOINT = `accounts/`;

function createAccountHandler(fetcher) {

    return {

        getAccountDetails(accountName) {
            return fetcher.get(`${ACCOUNT_ENDPOINT}${accountName}`)
        },
        
        createAccount(accountName, options = {}) {
            let data = {...options, account_name: accountName}
            return fetcher.post(`${ACCOUNT_ENDPOINT}create`, data);
        },
        
        updateAccount(accountName, data) {
            return fetcher.post(`${ACCOUNT_ENDPOINT}update/${accountName}`, data);
        },
        
        deleteAccount(accountName) {
            return fetcher.delete(`${ACCOUNT_ENDPOINT}${accountName}`)
        },
        
        //permissions
        
        getAllPermissions() {
            return fetcher.get(`${ACCOUNT_ENDPOINT}permissions/multiscreen`)
        },
        
        getSitePermissions(accountName, siteName) {
            return fetcher.get(`${ACCOUNT_ENDPOINT}${accountName}/sites/${siteName}/permissions`)
        },
        
        getCustomerSites(accountName) {
            return fetcher.get(`${ACCOUNT_ENDPOINT}grant-access/${accountName}/sites/multiscreen`)
        },
        
        grantSitePermissions(accountName, siteName, data) {
            return fetcher.get(`${ACCOUNT_ENDPOINT}${accountName}/sites/${siteName}/permissions`, data)
        },
        
        removeSiteAccess(accountName, siteName) {
            return fetcher.delete(`${ACCOUNT_ENDPOINT}${accountName}/sites/${siteName}/permissions`)
        },
        
        getSSOLink(accountName, siteName, target) {
            if (target) return fetcher.get(`${ACCOUNT_ENDPOINT}${accountName}/link?site_name=${siteName}&target=${target}`)
            return fetcher.get(`${ACCOUNT_ENDPOINT}${accountName}/link?site_name=${siteName}`)
        },
        
        resetPasswordLink(accountName) {
            fetcher.post(`${ACCOUNT_ENDPOINT}/reset-password/${accountName}`)
        }

    }

}

module.exports = createAccountHandler;


