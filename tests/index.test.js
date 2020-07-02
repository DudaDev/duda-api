const createClient = require('../src/duda')


describe('test auth token', () => {
    test('expect 401 when using bad token', async () => {
        const api = createClient('BAD TOKEN')
        const result = await api.getSite('089f848c')
        expect(result.status).toBe(401)
    
    })
})

describe('test base url', () => {
    test('expect 403 when using bad base URL', async () => {
        const api = createClient('NTYxYzQ3ODE1ZjpwYXNzd29yZDEyMzQ=', 'https://api.duda.co/appi')
        const result = await api.getSite('NOT A REAL SITE')
        expect(result.status).toBe(403)
        
    })
})