# SSL Utility Node for Tray.io CDK

This is an utility node built using Tray.io's [CDK](https://developer.tray.io/developer-portal/cdk/introduction/).

## Functionality:

This node is for utility functions with ssl certificates. It uses the NPM package `ssl-checker` at https://www.npmjs.com/package/ssl-checker.

### GetSslExpiration:

From a given URL as `string`, certificate data will be returned: For example, lookup of www.google.com:

```
{
    expiration: '2024-05-20T08:18:58.000Z',
    daysRemaining: 55,
    valid: true,
    validFrom: '2024-02-26T08:18:59.000Z',
    validFor: [ 'www.google.com' ]
}
```

## Installation in Tray.io

This assumes you've already installed the Tray CDK. If not, follow the guides at https://developer.tray.io/developer-portal/cdk/introduction/

- Create a custom service in your Tray environment. Select "None" as the auth type. Copy the name of that service into the `connector.json` file under `service.name`.

- Prepend your Tray namespace to the connector name in `connector.json`

- Initialize NPM to install all packages `npm i` or `sudo npm i`.

- Test the connector with `tray-cdk connector test get_ssl_expiration`

- Deploy to your Tray.io instance `tray-cdk deployment create`

If deployment is successful, the new SSL Utility node should be available in your Tray environment.

!(CDK/SSLUtility.png)
