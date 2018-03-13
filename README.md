![Barbershop.io Logo](https://pbs.twimg.com/profile_images/583479109977669633/hwsBYKzo_400x400.png)

# Barbershop Code Challenge &middot; [![CircleCI](https://circleci.com/gh/HartiganHM/barbershop-challenge/tree/master.svg?style=svg)](https://circleci.com/gh/HartiganHM/barbershop-challenge/tree/master) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)
> Challenge Accepted

A coding challenge presented by Barbershop.io and executed by Hugh Hartigan. An experimental app built around the Unsplash API showing popular photos in both a list and grid layout. Styling is optimized for desktop, tablet, and mobile layouts. Selecting a photo will display a higher resolution image, as well as information about the photographer, which links to their Unsplash portfolio page.

## Installing / Getting started

To install this project, clone the repo down locally and run npm install.

```shell
git clone git@github.com:HartiganHM/barbershop-challenge.git barbershop-challenge && cd barbershop-challenge && npm install
```

This will clone the repository to your machine under the directory `barbershop-challenge`. This will also `cd` into that directory and run `npm install`, installing all necessary dependencies. The repository makes use of `node-sass-chokidar`, a CSS style watcher and compiler that is friendly with `create-react-app`. Though all of the stylesheets are `.scss`, the `.js` files themselves look for a `.css`. To prepare for this, run:

```shell
npm run build-css
```

This will allow `node-sass-chokidar` to build the `.css` files that all of the `.js` files require when running. 

You should now be ready to start the application! Run the following command to boot it up:

```shell
npm start
```

This script has been built to start your application on `localhost:3000`, as well as watch your CSS for any style changes and run a linter. Any linting warnings will show up in the terminal, as well as the console of your browser.

## Developing

### Built With
React, Redux, Router, Sass, Enzyme, Jest

### Prerequisites
This application requires access to the Unsplash API. In order to gain acces, you will have to have to [sign-up for an account here](https://unsplash.com/developers). Step-by-step instructions for how to use the Unsplash API in JavaScript around found in the [`unsplash-js` GitHub repository](https://github.com/unsplash/unsplash-js).

Once logged in, start a 'New Application' which will give you a set of credentials to access the API from the application. From your terminal, execute the following:

```shell
touch src/unsplashCredentials.js
```

This will create a file called `unsplashCredentials.js` in the `src/` directory of the cloned down repository which will be used in the `unsplash` helper function of the application. A template for the structure of the file can be found below:

```javascript
// unsplashCredentials.js

const unsplashCredentails = {
  APPLICATION_ID: '{APP_ID}',
  SECRET: '{APP_SECRET}',
  CALLBACK_URL: '{CALLBACK_URL}'
};

export default unsplashCredentails;
```
Keep key names identical to the above, as they are referenced elsewhere in the application. Should you choose to change them, make sure to change them in the `unsplash` helper function as well.

## Tests

The testing suite runs through Enzyme and Jest. To run the testing suite, enter the following command:

```shell
npm test
```

Any new tests will populate in the terminal. If no changes have been made to any of the tests since the last commit, you will have the following options:

* `a`: Run all tests
* `p`: Filter tests by file name
* `t`: Filter tests by test name
* `q`: Quit watch mode

The testing suite is comprhenzive in scope, checking all `.js` files, including Redux architecture, React conditional rendering, helper functions, and API calls. For any PRs to be accepted, all tests must be passing.

## Linting

The linting for this application is run through the following command:

```shell
npm run eslint
```

This will check all existing `.js` files through the `.eslintrc.js` file found in the root of the repository. If you create any directories that are more deeply nested, add the required relative path to the `eslint` script in the `package.json`. For any PRs to be accepted, there must be zero linting errors.

## Style guide

The styling of this project uses Sass with an independent style sheet for any component or container. The `/styles` directory holds all mixins and variables which reference reused styling methods for specific content sections, as well as the overarching color palette for the project.

## Api Reference

* [Unsplash API](https://unsplash.com/developers)
* [unsplash-js](https://github.com/unsplash/unsplash-js)
