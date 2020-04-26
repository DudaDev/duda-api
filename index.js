const createClient = require('./src/duda')
const client = createClient("NTYxYzQ3ODE1ZjpwYXNzd29yZDEyMzQ=");

// client.getSite(`9a7d4ec5`).then(res => console.log(res)).catch(err => console.log(err))
// client.createSite('1101602').then(res => console.log(res)).catch(err => console.log(err))
client.getAllTemplates().then(res => console.log(res)).catch(err => console.log(err))

// client.getSite('c6abfae8').then(res => console.log(res)).catch(err => console.log(err))

