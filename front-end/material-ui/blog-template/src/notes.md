in order to load markdown in jsx the value of the variable imported from a file is going to depend on the loader used.

if using webpack, raw-loader is recommended, if using CRA, fetch request to the URL to obtain the data to render can be used.

https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f

https://github.com/facebook/create-react-app/issues/2961#issuecomment-322916352

https://github.com/probablyup/markdown-to-jsx#usage

- raw-loader using webpack build

`$ npm install raw-loader --save-dev`

```jsx
import txt from './file.txt';
```

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.txt$/i,
        use: 'raw-loader',
      },
    ],
  },
};
```