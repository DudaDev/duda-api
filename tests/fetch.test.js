// users.test.js
const fetch = require('node-fetch');
const fetcher = require('../src/lib/fetcher');

jest.mock('fetch');

test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  fetch.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return fetcher.get('ramdon/path').then(data => expect(data).toEqual(users));
});