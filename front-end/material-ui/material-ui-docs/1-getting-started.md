# getting started

## overview

library of react UI components implementing google's material design.

prebuilt components.

**material UI** and **MUI base** share components, but MUI Base comes without default styles and styling solutions.

MUI Base is skeletal or headless counterpart to material UI.

## installation

`npm install @mui/material @emotion/react @emotion/styled`

**styled components**

[emotion](https://emotion.sh/docs/introduction) is material UI default styling engine

to use styled components

`npm install @mui/material @mui/styled-engine-sc styled-components`

**peer dependencies**

`react >= 17.0.0`

`react-dom >= 17.0.0`

roboto font is used by default.

can be added with npm via **fontsource**

`npm install @fontsource/roboto`

```jsx
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
```

**google web fonts alternative**

```html
<head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  />
</head>
```

to use **font icon component** **material icons** have to be installed

`npm install @mui/icons-material`

**google web fonts alternative**

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
```

using material UI can be done using a CDN, not recommended for production.

**universal module definition**

`https://unpkg.com/@mui/material@latest/umd/material-ui.development.js`

`https://unpkg.com/@mui/material@latest/umd/material-ui.production.min.js`

## usage

simple app using a `Button` component

```jsx
import * as React from 'react';
import Button from '@mui/material/Button';

export default function MyApp() {
  return (
    <div>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}
```

material UI components don't require any globally scoped style.

best practice is to add some globals to the app.

**responsive meta tag**

```html
<meta name="viewport" content="initial-scale=1, width=device-width" />
```

**CssBaseline** component fixes inconsistencies across browsers and devices tailored to fit material UI better than global stylesheets like `normalize.css`

## learning resources

