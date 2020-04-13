const createClient = require('./src/index')
const client = createClient("NTYxYzQ3ODE1ZjpwYXNzd29yZDEyMzQ=");

// client.getSite(`9a7d4ec5`).then(res => console.log(res)).catch(err => console.log(err))
// client.createSite('1101602').then(res => console.log(res)).catch(err => console.log(err))
client.getAllTemplates().then(res => console.log(res)).catch(err => console.log(err))