# MUI System

# overview

set of css utilities to build custom designs more efficiently with MUI component libraries (material ui, joy ui, MUI base)

system gives flexible, generic wrapper components
- box
- container

customizable components using `sx` prop

define styles directly within the component rather than using bulky and redundant `const` definitions with `styled-components`.

`sx` is a superset of css so it's intuitive to pick up knowing normal css.

MUI Base is a library of *unstyled* components, standalone library.

MUI system is a set of utilities to apply styles to MUI Base components as well as for MUI component libraries (material ui and joy io)

# installation

using emotion 

`npm install @mui/system @emotion/react @emotion/styled`

using styled-components

`npm install @mui/system @mui/styled-engine-sc styled-component`

# usage

`sx` prop avoids uneccesary styled-component code by defining styles directly within the component.

using styled-components 

```js
const StatWrapper = styled('div')(
  ({ theme }) => `
  background-color: ${theme.palette.background.paper};
  box-shadow: ${theme.shadows[1]};
  border-radius: ${theme.shape.borderRadius}px;
  padding: ${theme.spacing(2)};
  min-width: 300px;
`,
);

const StatHeader = styled('div')(
  ({ theme }) => `
  color: ${theme.palette.text.secondary};
`,
);

const StyledTrend = styled(TrendingUpIcon)(
  ({ theme }) => `
  color: ${theme.palette.success.dark};
  font-size: 16px;
  vertical-alignment: sub;
`,
);

const StatValue = styled('div')(
  ({ theme }) => `
  color: ${theme.palette.text.primary};
  font-size: 34px;
  font-weight: ${theme.typography.fontWeightMedium};
`,
);

const StatDiff = styled('div')(
  ({ theme }) => `
  color: ${theme.palette.success.dark};
  display: inline;
  font-weight: ${theme.typography.fontWeightMedium};
  margin-left: ${theme.spacing(0.5)};
  margin-right: ${theme.spacing(0.5)};
`,
);

const StatPrevious = styled('div')(
  ({ theme }) => `
  color: ${theme.palette.text.secondary};
  display: inline;
  font-size: 12px;
`,
);

return (
  <StatWrapper>
    <StatHeader>Sessions</StatHeader>
    <StatValue>98.3 K</StatValue>
    <StyledTrend />
    <StatDiff>18.77%</StatDiff>
    <StatPrevious>vs last week</StatPrevious>
  </StatWrapper>
);

// using MUI system
<Box
  sx={{
    bgcolor: 'background.paper',
    boxShadow: 1,
    borderRadius: 1,
    p: 2,
    minWidth: 300,
  }}
>
  <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
  <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
    98.3 K
  </Box>
  <Box
    component={TrendingUpIcon}
    sx={{ color: 'success.dark', fontSize: 16, verticalAlign: 'sub' }}
  />
  <Box
    sx={{
      color: 'success.dark',
      display: 'inline',
      fontWeight: 'medium',
      mx: 0.5,
    }}
  >
    18.77%
  </Box>
  <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 12 }}>
    vs. last week
  </Box>
</Box>

```

**when to use MUI system**

`sx` prop is best when applying one-off styles to custom components.

styled-components is ideal for bilding components that need to support a wide variety of contexts.

MUI system works with both **motion** and **styled-components**.

runtime is less performant than rendering primitives, components or styled components

**when to use MUI system**

- core components
- box component
- custom components
- any element with babel plugin

**how to use MUI system**

shorthands

```jsx
<Box
  sx={{
    boxShadow: 1, // theme.shadows[1]
    color: 'primary.main', // theme.palette.primary.main
    m: 1, // margin: theme.spacing(1)
    p: {
      xs: 1, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
    },
    zIndex: 'tooltip', // theme.zIndex.tooltip
  }}
>

// pseudo-selectors
<Box
  sx={{
    // some styles
    ":hover": {
      boxShadow: 6,
    },
  }}
>
// using media queries
<Box
  sx={{
    // some styles
    '@media print': {
      width: 300,
    },
  }}
>

// nested selector
<Box
  sx={{
    // some styles
    '& .ChildSelector': {
      bgcolor: 'primary.main',
    },
  }}
>
```

responsive breakpoints can be defined as objects or as arrays

```jsx
// object syntax
<Box
  sx={{
    width: {
      xs: 100, // theme.breakpoints.up('xs')
      sm: 200, // theme.breakpoints.up('sm')
      md: 300, // theme.breakpoints.up('md')
      lg: 400, // theme.breakpoints.up('lg')
      xl: 500, // theme.breakpoints.up('xl')
    },
  }}
>
  This box has a responsive width.
</Box>

// should be considered if the theme has a limited number of breakpoints

// breakpoint as an array
<Box sx={{ width: [100, 200, 300] }}>This box has a responsive width.</Box>

// skip breakpoints
<Box sx={{ width: [null, null, 300] }}>This box has a responsive width.</Box>

// custom breakpoints to use them as keys when defining the breakpoints object
import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
});

export default function CustomBreakpoints() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: {
            mobile: 100,
            laptop: 300,
          },
        }}
      >
        This box has a responsive width
      </Box>
    </ThemeProvider>
  );
}
```

# sx prop

core utility is the `sx` prop. Quick efficient way to apply correct design tokens to a react element.

`sx` prop is a superset of CSS (all CSS properties and selectors in addition to custom) 

maps values directly from the theme depending on the CSS property used.

```jsx
import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function Demo() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 1,
        fontWeight: 'bold',
      }}
    >
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          m: 3,
          minWidth: { md: 350 },
        }}
      >
        <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
          123 Main St, Phoenix AZ
        </Box>
        <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
          $280,000 — $310,000
        </Box>
        <Box
          sx={{
            mt: 1.5,
            p: 0.5,
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
            borderRadius: '5px',
            color: 'primary.main',
            fontWeight: 'medium',
            display: 'flex',
            fontSize: 12,
            alignItems: 'center',
            '& svg': {
              fontSize: 21,
              mr: 0.5,
            },
          }}
        >
          <ErrorOutlineIcon />
          CONFIDENCE SCORE 85%
        </Box>
      </Box>
    </Box>
  );
}
```

## theme-aware properties

### borders

`border` only receives number as value.

a solid black border is defined in pixels with the number

```jsx
<Box 
  sx={{
    border: 1
  }}
/>
// equivalent to border: '1px solid black'
```

`borderColor` receives a string, that represents the path in `theme.palette`

```jsx
<Box 
  sx={{
    borderColor: 'primary.main'
  }}
/>
// equivalent to borderColor: theme => theme.palette.primary.main
```



# custom components

