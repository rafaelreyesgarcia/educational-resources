# theming 

customize MUI with a custom theme to change colors, typography, etc.

theme specifies the color, shadows, opacity, size, all the design aspects of an interface.

light and dark themes are available to choose from

components use light theme by default.

in order to customize the theme, `ThemeProvider` component will inject a theme into the app.

MUI components come with a default theme.

`ThemeProdiver` relies on react's context to pass them down to components so `ThemeProvider` has to be the parent of all components to be customized.

## theme configuration variables

- `.palette`
- `.typography`
- `.spacing`
- `.breakpoints`
- `.zIndex`
- `.transitions`
- `.components`

add additional variables to the theme

```jsx
const theme = createTheme({
  status: {
    danger: orange[500],
  },
});
```

access the theme in a component

```jsx
import { useTheme } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import { green, orange } from '@mui/material/colors';

// the theme object
function DeepChild() {
  const theme = useTheme();
  return <span>{`spacing ${theme.spacing}`}</span>
}

// nest theme providers

const outerTheme = createTheme({
  palete: {
    primary: {
      main: orange[500],
    },
  },
});

const innerTheme = createTheme({
  palette: {
    primary: {
      main: green[500];
    }
  }
})

<ThemeProvider
  theme={outerTheme}
>
  <Checkbox 
    defaultChecked
  />
  <ThemeProvider>
    <Checkbox
      defaultChecked
    >
  </ThemeProvider>
</ThemeProvider>
```

inner theme overrides the outer theme.

extend outer theme by providing a function

```jsx
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import { green, orange } from '@mui/material/colors';

const outerTheme = createTheme({
  palette: {
    secondary: {
      main: orange[500],
    },
  },
});

export default function ThemeNestingExtend() {
  return (
    <ThemeProvider theme={outerTheme}>
      <Checkbox defaultChecked color="secondary" />
      <ThemeProvider
        theme={(theme) =>
          createTheme({
            ...theme,
            palette: {
              ...theme.palette,
              primary: {
                main: green[500],
              },
            },
          })
        }
      >
        <Checkbox defaultChecked />
        <Checkbox defaultChecked color="secondary" />
      </ThemeProvider>
    </ThemeProvider>
  );
}
```

## APIs

**1. createTheme**

`createTheme(options, ...args) => theme`

generates a theme base on the options given.

`options` object 

`...args` object array deep merge arguments 

only options is processed by createTheme.

deepmerge should be used if two theme's options want to be merged.

```jsx
import { deepmerge } from '@mui/utils';
import { createTheme } from '@mui/material/styles';

const theme = createTheme(deepmerge(options1, options2));
```

`createTheme` returns `theme` an object 

```jsx
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});
```

theme composition, using theme options to define other options

```jsx
import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

let theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    }
  }
})
```

**2. responsiveFontSizes**

`responsiveFontSizes(theme, options) => theme`

`theme` is the object to enhance.

`options` array

`breakpoints` array of strings default to `['sm', 'md', 'lg']`

`disableAlign` bool default to `false`, if line heights are preserved. requires a unitless line height in theme styles.

`factor` number default to 2. Determines the strength of font size resizing.

`variants` array of strings default to all, typography variants to handle.

returns enhanced `theme` object with responsive typography.

**3. unstable_createMuiStrictModeTheme**

**4. ThemeProvider**

component takes a `theme` prop and applies it to entire react tree wrapping around.

> should be used at the root of the component tree.

props
- children
- theme


# palette

modifies the color of components to suit custom styles for brands.

## palette colors

`theme.palette`

- primary : represents primary nterface.
- secondary: represents secondary elements, accents, etc.
- error : represents interface elements the user should be aware of.
- warning ; represents potentially dangerous actions or important messages.
- info : represents neutral information to the user.
- success : indicates successful actions the user triggered.

`window.theme.palette` in dev tools console.

each property has a `light` `dark` `main` version.

overriding the default palette values is done by including a palette object as part of the theme, if palette.properties are provided, will replace default ones.

```jsx
import { createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';

const theme = createTheme({
  palette: {
    primary: blue,
  },
});


// providing colors directly
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // (For TypeScript, you need to add module augmentation for the `custom` value)
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

```

if `dark` and `light` keys are omitted, values will be calculated from `main`, according to the `tonalOffset` value.

if `contrastText` is ommited, value is calculated to contrast with `main` according to `contrastThreshold` value.

`tonalOffset` can be from 0 to 1.

> accessibility minimum contrast is at least of 4.1:1 as defined in WCAG 2.1 Rule 1.4.3

**example of custom primary and secondary colors**

```jsx
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

export default function Palette() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
    </ThemeProvider>
  );
} 
```

**adding new colors**

```jsx
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

// another example
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

export default function CustomColor() {
  return (
    <ThemeProvider theme={theme}>
      <Button color="neutral" variant="contained">
        neutral
      </Button>
    </ThemeProvider>
  );
}



```



# dark mode

## dark mode with default palette

add `mode: 'dark'` to the `createTheme` helper

```jsx
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>This app is using the dark mode</main>
    </ThemeProvider>
  );
}

export default App;

```

> adding `<CssBaseline />` inside `<ThemeProvider>` enables dark mode for app's background.

`mode: dark` only works if using the default palette.

## dark mode with custom palette

create function that returns correct palette depending on the selected mode

```jsx
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
});

export default function App() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Page />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
```

## toggling color mode

add react's context to a button's `onClick` event.

```jsx
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
```

## system preference

users might have a theme preference set through the operating system. (systemwide or single user agent)

`useMediaQuery` hook and `prefers-color-scheme` css media query

```jsx
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

```

# typography

theme provides a set of type sizes.

change font family with `theme.typography.fontFamily`

using system font instead of default roboto font

```jsx
const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

```

to self-host fonts `ttf` and `woff` or `woff2` formats need to be imported.

a plugin or loader in the build process is required to handle loading these files.

```jsx
import RalewayWoff2 from './fonts/Raleway-Regular.woff2';

const theme = createTheme({
  typography: {
    fontFamily: 'Raleway, Arial',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Raleway'), local('Raleway-Regular'), url(${RalewayWoff2}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

// ...
return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box
      sx={{
        fontFamily: 'Raleway',
      }}
    >
      Raleway
    </Box>
  </ThemeProvider>
);

```

**font size**

MUI uses `rem` units for font size.

browser `<html>` default font size is 16px

change font-size in MUI

```jsx
const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 12,
  },
});

// responsive font sizes

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

<ThemeProvider theme={theme}>
  <Typography variant="h3">Responsive h3</Typography>
</ThemeProvider>
```

**html font size**

`theme.typography.htmlFontSize` tells MUI what the font-size on the `<html>` attribute is.


# spacing

`theme.spacing()` helper creates consistent spacing between elements.

8px scaling factor is default in MUI

```jsx
const theme = createTheme({
  spacing: 4,
});

theme.spacing(2); // `${4 * 2}px` = '8px'

const theme = createTheme({
  spacing: (factor) => `${0.25 * factor}rem`, // (Bootstrap strategy)
});

theme.spacing(2); // = 0.25 * 2rem = 0.5rem = 8px

const theme = createTheme({
  spacing: [0, 4, 8, 16, 32, 64],
});

theme.spacing(2); // = '8px'

```

# breakpoints

interfaces need to adapt layout at various breakpoints.

**default breakpoints**

- xs - extrasmall - 0px
- sm - small - 600px
- md - medium - 900px
- lg - large - 1200px
- xl extralarge - 1536px

**CSS media queries**

- `theme.breakpoints.up(key)`
- `theme.breakpoints.down(key)`
- `theme.breakpoints.only(key)`
- `theme.breakpoints.not(key)`
- `theme.breakpoints.between(start, end)`

```jsx
<Root>
  <Typography>down(md): red</Typography>
  <Typography>up(md): blue</Typography>
  <Typography>up(lg): green</Typography>
</Root>
```

to change the react rendering tree based on the breakpoint value can be used with `useMediaQuery` hook

- `theme.breakpoints.values` defaults to above values.

keys are screen names, values are min-widths where the breakpoint should start.

- `theme.breakpoints.unit` defaults to `px`, unit to set breakpoint values.

- `theme.breakpoints.step` defaults to 5. increment divided by 100 implements an exclusive breakpoint.

`{ step: 5 }` means that `down(500)` results in `(max-width: 499.95px)`

changing default values requires providing all values

```jsx
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});
```

## API 

`theme.breakpoints.up(key) => media query`

`key` string or number representing a breakpoint name or screen width in px.

returns `media query` a string ready to be used that matches screen widths greater than screen size given in breakpoint.

```jsx
const styles = (theme) => ({
  root: {
    backgroundColor: 'blue',
    // Match [md, ∞)
    //       [900px, ∞)
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'red',
    },
  },
});

```

`theme.breakpoints.down(key) => media query`

returns a media query that matches screen widths less than screen size. 

```jsx
const styles = (theme) => ({
  root: {
    backgroundColor: 'blue',
    // Match [0, md)
    //       [0, 900px)
    [theme.breakpoints.down('md')]: {
      backgroundColor: 'red',
    },
  },
});

```

`theme.breakpoints.only(key) => media query`

returns a media query that matches screen size given by breakpoint key, and stopping at next breakpoint.

```jsx
const styles = (theme) => ({
  root: {
    backgroundColor: 'blue',
    // Match [md, md + 1)
    //       [md, lg)
    //       [900px, 1200px)
    [theme.breakpoints.only('md')]: {
      backgroundColor: 'red',
    },
  },
});

```

`theme.breakpoints.not(key) => media query`

matches screen widths stopping at the screen size and starting at the next breakpoint.

```jsx
const styles = (theme) => ({
  root: {
    backgroundColor: 'blue',
    // Match [xs, md) and [md + 1, ∞)
    //       [xs, md) and [lg, ∞)
    //       [0px, 900px) and [1200px, ∞)
    [theme.breakpoints.not('md')]: {
      backgroundColor: 'red',
    },
  },
});

```

`theme.breakpoints.between(start, end) => media query`

returns media query matches screen widths greater than screen size given in first argument, and less than screen size in second argument.

```jsx
const styles = (theme) => ({
  root: {
    backgroundColor: 'blue',
    // Match [sm, md)
    //       [600px, 900px)
    [theme.breakpoints.between('sm', 'md')]: {
      backgroundColor: 'red',
    },
  },
});

```


# density

# z-index

# transitions

theme enables to customize duration and easings of transitions used across components.

`theme.transitions.create(props, options) => transition`

props defaults to `['all']` contains a list of css properties that should be transitioned.

`options` is an optional object

`options.duration` string or number provides duration of transition, default `theme.transitions.duration.standard`

`options.easing` string or number provides easing. default to `easeInOut`

`options.dealy` string or number, defaults to 0.

a transition value is returned 

`theme.transitions.create(['background-color', 'transform']);`

**durations**

```jsx
// default values
// only provide the keys to be modified
const theme = createTheme({
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
  },
});

// easings
const theme = createTheme({
  transitions: {
    easing: {
      // This is the most common easing curve.
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
});

```

# components

customize component's styles, default props by using keys inside the theme.

**default props**

every MUI component has default preset values.

`defaultProps` key exposed in theme's `components` key

```jsx
const theme = createTheme({
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
});

<ThemeProvider theme={theme}>
  <Button>This button has disabled ripples.</Button>
</ThemeProvider>
```

**global styles override**

`styleOverrides` key allows to change every single style injected into the DOM, useful to apply a full custom design system to MUI components.

```jsx
const theme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
        },
      },
    },
  },
});

<ThemeProvider theme={theme}>
  <Button>font-size: 1rem</Button>
</ThemeProvider>
```

pass a callback as value in each slot of the `styleOverrides` to applt styles based on props.

`ownerState` is a combination of public props passed to component + internal state of the component

`sx` prop acts as a shortcut for defining custom styles.

use `sx` prop inside `styleOverrides` key to modify styles using shorthand css notation.

still considered experimental when used directly inside the theme object.

`sx` prop is a stable feature in MUI v5

```jsx
const finalTheme = createTheme({
  components: {
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            px: 1,
            py: 0.25,
            borderRadius: 1,
          }),
        label: {
          padding: 'initial',
        },
        icon: ({ theme }) =>
          theme.unstable_sx({
            mr: 0.5,
            ml: '-2px',
          }),
      },
    },
  },
});

```

**component variants**

`variants` key in theme's components section creates new variants. Can specify style depending if a variant prop value is applied. 

definitions are specified in an array.

order is important as styles that win should be last.

```jsx
const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'dashed' },
          style: {
            textTransform: 'none',
            border: `2px dashed ${blue[500]}`,
          },
        },
        {
          props: { variant: 'dashed', color: 'secondary' },
          style: {
            border: `4px dashed ${red[500]}`,
          },
        },
      ],
    },
  },
});

<ThemeProvider theme={theme}>
  <Button variant="dashed" sx={{ m: 1 }}>
    Dashed
  </Button>
  <Button variant="dashed" color="secondary" sx={{ m: 1 }}>
    Secondary
  </Button>
  <Button variant="dashed" size="large" sx={{ m: 1 }}>
    Large
  </Button>
  <Button variant="dashed" color="secondary" size="large" sx={{ m: 1 }}>
    Secondary large
  </Button>
</ThemeProvider>
```

# default theme

[how the theme is assembled](https://github.com/mui/material-ui/blob/master/packages/mui-material/src/styles/createTheme.js)

# customizing

**one-off customization**

change styles of one single instance of a component

best practice is to use `sx` prop

```jsx
<Slider
  defaultValue={30}
  sx={{
    width: 300,
    color: 'success.main',
  }}
/>
```

**overriding nested component styles**

customizing a specific part of a component can be done with a class name provided inside the `sx` prop

standard MUI class name injected into DOM 

`[hash]-Mui[Component name]-[name of the slot]`

**overriding styles with class names**

`className` prop available on each component.

**state classes**

states like hover, focus disabled and selected are styled with higher specificity.

to customize them, increase specificity.

```css
.Button {
  color: black;
}

/* Increase the specificity */
.Button:disabled {
  color: white;
}
```

```jsx
<Button disabled className="Button">
```

material UI state classes act like CSS pseudo-classes `.Mui-selected`

```css
.MenuItem {
  color: black;
}

/* Increase the specificity */
.MenuItem.Mui-selected {
  color: blue;
}
```

```jsx
<MenuItem selected className="MenuItem">
```

CSS pseudo-classes have a high level of specificity. Material UI's state classes have the same level of specificity as CSS pseudo-classes

MUI global class names

`.Mui-className`

- active
- checked
- completed
- disabled
- error
- expanded
- focusVisible
- focused
- required
- selected

> never apply styles directly to state class names, target a state class together with a component

```css
/* ❌ NOT OK */
.Mui-error {
  color: red;
}

/* ✅ OK */
.MuiOutlinedInput-root.Mui-error {
  color: red;
}

```

**reusable component**

apply same override in different locations using `styled()` utility

```jsx
import * as React from 'react';
import Slider from '@mui/material/Slider';
import { alpha, styled } from '@mui/material/styles';

const SuccessSlider = styled(Slider)(({ theme }) => ({
  width: 300,
  color: theme.palette.success.main,
  '& .MuiSlider-thumb': {
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
    },
    '&.Mui-active': {
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
    },
  },
}));

export default function StyledCustomization() {
  return <SuccessSlider defaultValue={30} />;
}

<React.Fragment>
  <FormControlLabel
    control={
      <Switch
        checked={vars === successVars}
        onChange={handleChange}
        color="primary"
        value="dynamic-class-name"
      />
    }
    label="Success"
  />
  <CustomSlider style={vars} defaultValue={30} sx={{ mt: 1 }} />
</React.Fragment>
```

**global theme overrides**

add global baseline styles for some HTML elements with `GlobalStyles` component.

```jsx
<React.Fragment>
  <GlobalStyles styles={{ h1: { color: 'grey' } }} />
  <h1>Grey h1 element</h1>
</React.Fragment>
```

**dynamic overrides**

`styled()` lets you add dynamic styles based on component's props.

```jsx
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Slider, { SliderProps } from '@mui/material/Slider';

interface StyledSliderProps extends SliderProps {
  success?: boolean;
}

const StyledSlider = styled(Slider, {
  shouldForwardProp: (prop) => prop !== 'success',
})<StyledSliderProps>(({ success, theme }) => ({
  ...(success &&
    {
      // the overrides added when the new prop is used
    }),
}));

```

global override using `GlobalStyles` component

```jsx
import * as React from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';

export default function GlobalCssOverride() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ h1: { color: 'grey' } }} />
      <h1>Grey h1 element</h1>
    </React.Fragment>
  );
}
```


if already using `CssBaseline` component, adding global styles overrides.

```jsx
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        h1 {
          color: grey;
        }
      `,
    },
  },
});

export default function OverrideCssBaseline() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1>Grey h1 element</h1>
    </ThemeProvider>
  );
}
```

`styleOverrides` key in `MuiCssBaseline` component slot supports callback from which the theme can be accessed.

```jsx
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    success: {
      main: '#ff0000',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => `
        h1 {
          color: ${themeParam.palette.success.main};
        }
      `,
    },
  },
});

export default function OverrideCssBaseline() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1>h1 element</h1>
    </ThemeProvider>
  );
}
```

good practice to hoist `<GlobalStyles />` to a static constant to avoid rerendering

```diff
 import * as React from 'react';
 import GlobalStyles from '@mui/material/GlobalStyles';

+const inputGlobalStyles = <GlobalStyles styles={...} />;

 function Input(props) {
   return (
     <React.Fragment>
-      <GlobalStyles styles={...} />
+      {inputGlobalStyles}
       <input {...props} />
     </React.Fragment>
   )
 }

```

# color

[palette configuration tool](https://m2.material.io/resources/color/)

feed the output of the tool into `createTheme()`

```jsx
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

```

**palette**

collection of colors hues and shades.

**hue and shade**

single color within the palette. shade such as 500

50 is lightest shade

900 is the darkest

most hues come with accest shades prefixed with `A`

hue (red, pink, etc)

shade (500, 600, etc)

import color

```jsx
import { red } from '@mui/material/colors';

const color = red[500];

/* */

import { purple, red } from '@mui/material/colors';

const primary = red[500]; // #f44336
const accent = purple['A200']; // #e040fb
const accent = purple.A200; // #e040fb (alternative method)

```

**WCAG 2.1 rule 1.4.3** recommends minimum of 4.5:1 contrast ratio for visual presentation of text and image text.



