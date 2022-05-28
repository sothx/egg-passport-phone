# egg-passport-phone

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-passport-phone.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-passport-phone
[travis-image]: https://img.shields.io/travis/eggjs/egg-passport-phone.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-passport-phone
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-passport-phone.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-passport-phone?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-passport-phone.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-passport-phone
[snyk-image]: https://snyk.io/test/npm/egg-passport-phone/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-passport-phone
[download-image]: https://img.shields.io/npm/dm/egg-passport-phone.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-passport-phone

<!--
Description here.
-->

## Install

```bash
$ npm i egg-passport --save
$ npm i egg-passport-phone --save
```

**Note:** also need [egg-passport](https://github.com/eggjs/egg-passport) .

## Usage

```js
// {app_root}/config/plugin.js
exports.passport = {
  enable: true,
  package: 'egg-passport',
};

exports.passportPhone = {
  enable: true,
  package: 'egg-passport-phone',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.passportPhone = {
  // phoneNumberField: 'phoneNumber',
  // verifyCodeField: 'verifyCode',
  // phoneNumberRegExp: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/
};
```

The available options are:

- `phoneNumberField` - Optional, defaults to `username`
- `verifyCodeField` - Optional, defaults to `password`

Both fields define the name of the properties in the POST body that are sent to the server.

- `phoneNumberRegExp` - Optional, verify phoneNumber RegExp

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

<!-- writeing -->

## Questions & Suggestions

Please open an issue [here](https://github.com/sothx/egg-passport-phone/issues).

## License

[MIT](LICENSE)
