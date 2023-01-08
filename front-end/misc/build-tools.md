# modern front end tools

steps
- transpiling
- bundling
- minifying
- packaging

## transpiling

browser compatibility issues with modern javascript and css

transpiling converts newer syntax and features to old syntax all browsers support.

many javascript flavors all transpile back to vanilla javascript for backwards compatibility.

SCSS extension has to be transpiled to vanilla CSS.

## bundling

importinv via script tags isn't scalable or managable

new packages (modules) become available all the time

new patterns and frameworks rely on modularizing javascript.

the script tag region of an html file became unmanagable as scripts need to be updated to latest versions, and those new updates could introduce cross dependencies issues, ordering and versioning got messy before npm.

package managers ensure dependencies are included (installed) and up to date.

bundling is the process of taking all `import` and `require` statements, finding matching snippets/packages/libraries, adding them to the appropiate scope and packaging all into one big js file.

then the script tag region gets injected with only one or a few script tags instead of hundreds.

## minifying (obfuscation)

source files grew larger and load time slower.

the script tag would take too long to load and it was completely human readable, so low-effort exploits can happen.

minifiying reduces final file size by removing white-space and comments.

an obfuscate step is added to change variable names, method names so is less readable, more secure, and also more compact than human readable variables.

## packaging

the build tool handling the coordination of each step above, will take the final result and place it where you define it.

the specification is done in a config file something like `./dist/app.js` `./dist/index.js`

the bundler coordinates these steps and will have a config available to specify the desired, transpiler, minifier and destination of output files.

package manager `npm`

transpiler - babel

minifier uglifyJS

bundler - webpack

save tools as dev dependencies

```js
// the path plugin helps resolve the root our of front end directory
const path = require('path')
// we need to import uglify to specify our minifier
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// this is our webpack.config.js definition
module.exports = {
  entry: './src/index.jsx', // notes #1 & 2
  output: {
    path: path.resolve(__dirname, 'dist'), // note #3
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // note #2
        exclude: /node_modules/, // note #4
        use: {
          loader: "babel-loader" // note #4
        }
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin() // note #5
  ],
  resolve: {
    extensions: ['.js', '.jsx'] // note #2
  }
};
```
1. entry point is specified. Find import or require statements, navigate into them and resolve dependencies. 

2. babel (rules declaration) and webpack (resolve declaration) have to be instructed to accept `jsx` files as if they are `js`

3. the output specifies that the result of the build process should land in a file name `app.bundle.js` into a directory named `dist`.

4. defines the loader should be babel-loader, the files defined in the entry point pass through the babel transpiler. `node_modules` should be excluded so we don't transpile everything including packages.

5. the minifier is specified as a plugin.

this would configure the bundler.

configure babel to define what its transpiling from

```json
{
  "presets": ["react", "env"]
}
```
- tells babel to use predefined configurations of `react` and `env` to transpile the input.
- presets should also be included in dev dependencies in `package.json`

npm functions as a package manager and task runner.

`npm init` created `package.json` 

in a section called `scripts` we can define a script to kick start the build process

```json
{
  "name": "AppName",
  "version": "1.0.0",
  "description": "Short description of your app",
  "main": "app.js",
  "scripts": { // note #1
    "dev": "webpack-dev-server --mode development --open",
    "build": "webpack --mode production",
    "start": "webpack-dev-server --open"
  },
  "author": "Trevor Poppen",
  "license": "MIT",
  "devDependencies": {
    "babel-core": "^6.26.0", // note #2
    "babel-loader": "^7.1.4",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "webpack": "^4.4.1", // note #3
    "webpack-cli": "^2.0.13",
    "webpack-dev-server": "^3.1.1", // note #4
    "uglifyjs-webpack-plugin": "^0.4.6"
  },
  "dependencies": {
    "lodash": "^4.17.5",
    "react": "^16.3.0",
    "react-dom": "^16.3.0",
    "react-redux": "^5.0.7",
    "redux": "^3.7.2"
  }
}
```

1. scripts let us run commands in a shell like `npm run dev` or `npm run start`
2. babel dependencies are required for babel to take in and transpile js `babel-preset-*` dependencies will vary depending on what flavor of js we use.
3. `webpack` and `webpack-cli` should be included for running our build steps.
4. `webpack-dev-server` hosts site locally on localhost:8080 
