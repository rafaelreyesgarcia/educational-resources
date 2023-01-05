# 1. init a package

`npm init -y` creates a package.json file

package.json

```json
{
  "name": "project-name",
  "version": "1.0.0",
  "description": "short description",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

# 2. `npm install --save-dev webpack webpack-cli`

add `index.js` file to new `src` directory.

# 3. build `start` and `build` scripts

```diff
- "test": "echo \"Error: no test specified\" && exit 1"
# runs webpack in development mode
+ "start": "webpack --mode development",
# creates a production bundle using webpack
+ "build": "webpack --mode production" 
```

when these commands are used, webpack will create a `dist` directory with a `main.js` file which is know as the **bundle**

`node dist/main.js` runs the bundle file

# 4. configure webpack to work with react

`npm install react react-dom`

> babel and related packages create a toolchain to use react in the browser.

packages can be installed as `devDependencies` 

`npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react`

installs
- babel core package
- babel-loader (helper so babel can run with webpack)

**preset packages**

determine which plugins to use to compile javascript into a readable format for the browser

- @babel/preset-env
- @babel/preset-react

# 5. congifure babel and webpack 

add configuration files for both webpack and babel in root directory.

```diff

+ babel.config.json
+ webpack.config.js
```

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
    ],
  },
};
```

add babel presets to the config.json

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "esmodules": true
        }
      }
    ],
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ]
}
```

`the `@babel/preset-env` target `esmodules` in order to use the latest node modules.

`@babel/preset-react` defines the JSX runtime to automatic since React 18 adopted JSX transform functionality.

`babel-loader` can also be configured inside `webpack.config.js` but separating preset configurations allow other tools to use these settings.

# 6. render a react project

edit `index.js`

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

edit `index.html` 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using a custom webpack/babel build" />
    <!-- <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /> -->
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
```

# 7. render react component

extend webpack so that it adds the minified bundle code to the body tags as scripts when running.

`npm install --save-dev html-webpack-plugin`

extend `webpack.config.js`

```diff
+ const HtmlWebpackPlugin = require('html-webpack-plugin');

+ plugins: [
  new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: './index.html',
  }),
],
```

`npm start` will add `index.html` to `dist` directory.

inside this file a script tag has been inserted (`main.js`)

`node dist/main.js`

# 8. development server

editing source files will require to rerun `npm start` in development mode.

`npm install --save-dev webpack-dev-server`

edit start script in `package.json`

```diff
- "start": "webpack –-mode development",
+ "start": "webpack serve –-mode development"
```

this makes webpack-dev-server to run webpack in development mode creating a local dev server that runs the application.

webpack is restarted everytime an update is made to a project file

local development server becomes active at `http://localhost:8080/`

`dist` is a directory where the bundle (from webpack) is found.

`src` includes source code to the aplication.

# 9. enable webpack to compile css

`npm install --save-dev css-loader style-loader`

add packages as a rule to webpack

```js
{
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
},
```

css-loader handles compilation of css file
style-loader adds the compiled css files to the react DOM 

webpack read these settings from right to left

the css needs to compile before its attached to the DOM.

# 10. adding ESLint

`npm install --save-dev eslint eslint-webpack-plugin eslint-plugin-react`

eslint core package identifies problematic patterns in javascript code.

eslint-webpack-plugin is a package used by webpack to run ESLint everytime we update code.

eslint-plugin-react adds specific rules to ESLint for react applications.

configure eslint `.eslintrc`

```json
{
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "plugins": ["react"],
  "extends": ["eslint:recommended",
  "plugin:react/recommended"],
  "rules": {
    "react/react-in-jsx-scope": "off"
  }
}
```

`env` is the environment where the code will run
- browser
- node
- es6 functions enabled

`parserOptions` adds extra configutarion for using JSX and es6 syntax.

`plugins` uses the react framework

`extends` will add recommended settings for eslint as well as framework specific settings

`rules` field disables notifications about React not being imported as is no longer required in react 18

add `eslint-webpack-plugin` package to webpack configuration

```diff
+ const ESLintPlugin = require('eslint-webpack-plugin');

+ new ESLintPlugin(),
```

# 11. supporting favicons

`npm install --save-dev favicons favicons-webpack-plugin`

configure webpack.config.js

