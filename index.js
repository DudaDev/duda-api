const createClient = require('./src/duda')

// client.createAccount('a1b2c3').then(res=>console.log(res))

// client.grantSitePermissions('a1b2c3', 'be304da7')
client.getSSOLink('a1b2c3', 'be304da7').then(rs => console.log(rs))