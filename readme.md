# duda-api

Wrapper Node library for Duda's REST API.

## Documentation

See [API documentation](https://developer.duda.co/reference) for complete reference.

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

```javascript

//create a new site
client.createSite(siteName, options).then(site => console.log(site))

//create a site from a template
client.createFromSite(siteName, newTemplateName)
```

In general, the request's path and query paratmeters are passed as agruments and request body is passed as an object. However, 
- In methods containing both mandatory and optional body parameters (for example, create site), mandatory parameters are passed as agruments and optional parameters as an object.
- In methods in which all body parameters are mandatory (for example, create template from site), mandatory parameters are passed as agruments.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
TBD

[MIT](https://choosealicense.com/licenses/mit/)