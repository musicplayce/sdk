<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/musicplayce/ts-sdk">
    <img src="assets/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">@musicplayce/ts-sdk</h3>

  <p align="center">
    MusicPlayce SDK made with Typescript intended for client & server-side use.
    <br />
    <a href="https://github.com/musicplayce/ts-sdk"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!-- · -->
    <a href="https://github.com/musicplayce/ts-sdk/issues">Report Bug</a>
    ·
    <a href="https://github.com/musicplayce/ts-sdk/issues">Request Feature</a>
  </p>
</p>

[![npm version](https://badge.fury.io/js/%40musicplayce%2Fts-sdk.svg)](https://badge.fury.io/js/%40musicplayce%2Fts-sdk) ![](https://github.com/musicplayce/ts-sdk/workflows/build/badge.svg) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

<!-- TABLE OF CONTENTS -->
# Table of Contents

- [Getting Started](#getting-started)
	- [Installing](#installing)
	- [Usage](#usage)
- [Built With](#built-with)
- [Versioning](#versioning)
- [Author(s)](<#author(s)>)
- [License](#license)

## Getting Started

### Installing

Using npm:

```bash
npm install @musicplayce/ts-sdk
```

Using yarn:

```bash
yarn add @musicplayce/ts-sdk
```

### Usage

Import the SDK into your project:
```typescript
import MPlayceClient from '@musicplayce/ts-sdk';

// or use require
const MPlayceClient = require('@musicplayce/ts-sdk');
```

Initialize a new client:

```typescript
const options = { beta: true }; // Passing an options object is optional!
const client = new MPlayceClient(options).authenticate({ username: 'YOUR_USERNAME_EMAIL_HERE', password: 'YOUR_PASSWORD_HERE' });

console.log(client.apiVersion); // '1.0'
```

## Built With

- [Typescript](https://www.typescriptlang.org/) - Typescript enables JavaScript developers to use highly-productive development tools and practices like static checking and code refactoring when developing JavaScript applications.
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js.
- [lodash](https://github.com/lodash/lodash) - A modern JavaScript utility library delivering modularity, performance, & extras.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/MoonTory/theia-cli/tags).

## Author(s)

- **Gustavo Quinta** - _Initial work_ - [MoonTory](https://github.com/moontory)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
