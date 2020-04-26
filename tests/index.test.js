const createClient = require('../src/duda')
const fetchMock = require('fetch-mock-jest');

test('try mock fetch', async () => {
    fetchMock.mock('http://example.com', 200);
    const res = await fetch('http://example.com');
    expect(res.status).toBe(200);
    fetchMock.restore();
})


test('test API authentication token and base URL', async () => {
    const api = createClient('BAD TOKEN')
    const result = await api.getSite('089f848c')
    expect(result.status).toBe(401)

})

// test('test API base URL', async () => {
//     const api = createClient('NTYxYzQ3ODE1ZjpwYXNzd29yZDEyMzQ=', 'https://api.duda.co/appi')
//     const result = await api.getSite('NOT A REAL SITE')
//     expect(result.status).toBe(403)
    
// })