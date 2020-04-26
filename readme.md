# duda-api

Wrapper Node library for Duda's REST API.

## Documentation

See [API documentation](https://developer.duda.co/reference) for complete referece

## Installation

Use the package manager [npm](https://pip.pypa.io/en/stable/) to install duda-api.

```bash
npm install duda-api
```

## Usage


```javscript
const Duda = require('duda-api)

// Initilize API
const client = Duda(token) 

//Fetach Site
client.getSite(siteID).then(site => console.log(site))

```

- Token - API Token (**required**)
- BaseURL - the environment you would like to use. Defaults to *https://api.duda.co/api/sites* (optional)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
TBD

[MIT](https://choosealicense.com/licenses/mit/)