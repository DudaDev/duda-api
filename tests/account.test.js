const createAccountHandler = require('../src/lib/modules/account')
const sinon = require('sinon')
const Sinon = require('sinon')

describe('testing account endpoints', () => {
    const Mockfetcher = sinon.spy({
        get: () => {return 'called from get'},
        post: () => {return 'called from post'},
        put: () => {return 'called from put'},
        delete: () => {return 'called from delete'}
    })
    const accountObj = createAccountHandler(Mockfetcher)

    //see that I get X number of functions
    test('test account endponit has 11 functions', () => {
        expect(Object.values(accountObj).length).toBe(11);

    })
    //see that functions X call Y with Z params
    test('getAccountDetails endpint', () => {
        const spy = jest.spyOn(accountObj, 'getAccountDetails')
        accountObj.getAccountDetails('fdfdfd')
        expect(spy).toBeCalled()
    })

})