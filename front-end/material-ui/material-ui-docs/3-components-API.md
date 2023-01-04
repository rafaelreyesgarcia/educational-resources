# inputs

## autocomplete

## button

## button group

## checkbox

## floating action button

## radio group

## rating 

## select

## slider

## switch

## text field

## transfer list

## toggle button


## navigation

## bottom navigation

bar that allows movement between destinations in an app

if there's only 3 actions, display both icons and text.

if there's more than 4 actions, display inactive views as icons only.

fixed positioning keeps bottom navigation fixed to the bottom

perform navigation on the client only without an HTTP round-trip to the server.

`BottomNavigationAction` provides the `component` prop to handle this.

# data display

## avatar

## badge

## chip

## divider

## icons

## material icons

## list

## table

## tooltip

## typography



# feedback

## alert

## backdrop

## dialog

## progress

## skeleton

## snackbar


# surfaces

## accordion

## app bar

## card

## paper

# navigation

## bottom navigation

## breadcrumbs

## drawer

## link

## menu

## pagination

## speed dial

## stepper

## tabs

# layout

## box

`Box` component packages style functions exposed in `@mui/system`

`sx` prop makes available all system properties. 

a simple box

```jsx
import * as React from 'react';
import Box from '@mui/material/Box';

export default function BoxSx() {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
  );
}
```

`Box` wraps a component.

creates a new DOM element `<div>` that can be changed with `component` prop.

if a `<span>` is used instead of a `<div>`

```jsx
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function BoxComponent() {
  return (
    <Box 
      component="span" 
      sx={{ p: 2, border: '1px dashed grey' }}
    >
      <Button>Save</Button>
    </Box>
  );
}
```

a `Button` component defines its own styles. using `sx` prop directly on the child allows to target the underlying DOM element.

```diff
-<Box sx={{ border: '1px dashed grey' }}>
-  <Button>Save</Button>
-</Box>
+<Button sx={{ border: '1px dashed grey' }}>Save</Button>

# non-MUI component using component prop
-<Box sx={{ border: '1px dashed grey' }}>
-  <button>Save</button>
-</Box>
+<Box component="button" sx={{ border: '1px dashed grey' }}>Save</Box>
```

`Box` supports all MUI system properties.

`<Box mt={2}></Box>`

**create own Box component**

different default theme for the component

```jsx
import { createBox, createTheme } from '@mui/system';

const defaultTheme = createTheme({
  // your custom theme values
});

const Box = createBox({ defaultTheme });

export default Box;

```

## container

container centers content horizontally

containers can be nested, but most layouts don't require a nested container.

### fluid 

fluid container width bound by `maxWidth` prop value

```jsx
import CssBaseline from '@mui/material/CssBaseline';

// return 
<CssBaseline />
<Container maxWidth="sm">
  <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
</Container>
```

### fixed

`max-width` matches `min-width` of current breakpoint.

```jsx
<Container fixed>
  <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
</Container>
```

## grid

grid works best for a layout with known columns.

columns can be configured in multiple breakpoints and each child column span will be specified.

- grid system uses CSS flexible box module.
- grid is always a flex item.
- use `container` prop to add flex container to it.
- item widths are set in percentages so they're always fluid and relative to the parent.
- default breakpoints: xs, sm, md, lg, xl
- integer values can be given to each breakpoint, indicating how many of the 12 columns are occupied by the component.
- uses negative margin and padding to create gap-like
- doesn't have the concept of rows. CSS Grid should be used.
- doesn't offer auto-placement children feature.

### fluid grids

use columns that scale and resize content.

`container` prop creates a grid container that graps the grid items. `Grid` is always an item.

column widths are values between 1 to 12.

a value given to a breakpoint applies to all other wider breakpoints unless overriden.

```jsx
import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
```

### multiple breakpoints

```jsx
<Grid container spacing={2}>
  <Grid xs={6} md={8}>
    <Item>xs=6 md=8</Item>
  </Grid>
  <Grid xs={6} md={4}>
    <Item>xs=6 md=4</Item>
  </Grid>
  <Grid xs={6} md={4}>
    <Item>xs=6 md=4</Item>
  </Grid>
  <Grid xs={6} md={8}>
    <Item>xs=6 md=8</Item>
  </Grid>
</Grid>
```

### spacing

control space between children with `spacing`

any positive integer, decimal or any string.

prop is converted to CSS using `theme.spacing()` helper

```jsx
<Grid container spacing={0}>
<Grid container spacing={1}>
<Grid container spacing={4}>
```

### row and column spacing

`rowSpacing` and `columnSpacing` props allow to define row and column gaps independently.

```jsx
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid xs={6}>
    <Item>1</Item>
  </Grid>
  <Grid xs={6}>
    <Item>2</Item>
  </Grid>
  <Grid xs={6}>
    <Item>3</Item>
  </Grid>
  <Grid xs={6}>
    <Item>4</Item>
  </Grid>
</Grid>
```

### responsive values

switch props value based on the active breakpoint.

```jsx
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {Array.from(Array(6)).map((_, index) => (
    <Grid xs={2} sm={4} key={index}>
      <Item>{index + 1}</Item>
    </Grid>
  ))}
</Grid>
```

### auto-layout

makes items equitably share the available space.

set width of one item and others will automatically resize around it.

```jsx
<Grid container spacing={3}>
  <Grid xs>
    <Item>xs</Item>
  </Grid>
  <Grid xs={6}>
    <Item>xs=6</Item>
  </Grid>
  <Grid xs>
    <Item>xs</Item>
  </Grid>
</Grid>
```

### variable width content

set size breakpoint prop to `auto`

```jsx
<Grid container spacing={3}>
  <Grid xs="auto">
    <Item>Variable width item</Item>
  </Grid>
  <Grid xs={6}>
    <Item>xs=6</Item>
  </Grid>
  <Grid xs>
    <Item>xs</Item>
  </Grid>
</Grid>
```

### nested grid

grid container that renders inside another grid container, inherits the `columns` and `spacing` from the parent grid.

deep nested grid will inherit props from upper nested grid if props are passed.

### columns

```jsx
<Grid container spacing={2} columns={16}>
  <Grid xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid>
```

### offset

move the item to the right.

`mdOffset={2}` moved to the right by 2 columns starts from `md` breakpoint and up.

`auto` item is moved to the right edge of the grid container.


```jsx
<Grid container spacing={3} sx={{ flexGrow: 1 }}>
  <Grid xs={6} xsOffset={3} md={2} mdOffset={0}>
    <Item>1</Item>
  </Grid>
  <Grid xs={4} md={2} mdOffset="auto">
    <Item>2</Item>
  </Grid>
  <Grid xs={4} xsOffset={4} md={2} mdOffset={0}>
    <Item>3</Item>
  </Grid>
  <Grid xs md={6} mdOffset={2}>
    <Item>4</Item>
  </Grid>
</Grid>
```

### custom breakpoints

```diff
-<Grid xs={6} xsOffset={2}>
+<Grid mobile={6} mobileOffset={2}>
``` 

```jsx
return (
  <ThemeProvider
    theme={createTheme({
      breakpoints: {
        values: {
          laptop: 1024,
          tablet: 640,
          mobile: 0,
          desktop: 1280,
        },
      },
    })}
  >
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ mobile: 1, tablet: 2, laptop: 3 }}>
        {Array.from(Array(4)).map((_, index) => (
          <Grid mobile={6} tablet={4} laptop={3} key={index}>
            <Item>{index + 1}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  </ThemeProvider>
);
```

### prevent scrollbar

using grid as a container in a small viewport reveals a horizontal scrollbar because of negative margin applied to all sides of the container.

set `disableEqualOverflow` prop to `true`

avoid adding borders or background to the grid when `disableEqualOverflow: true`

```jsx
<Grid container spacing={3} disableEqualOverflow>
  <Grid xs={12}>
    <Item>`disableEqualOverflow` prevents scrollbar</Item>
  </Grid>
</Grid>
```

`xs` and `xl` offset props are not supported within `direction='column'` and `direction='column-reverse'`

## grid v2

changes from grid v1

- fix known issues
- simplify logic with CSS variables removing unncessary `item` prop.
- proper fix for preventing a scrollbar, by switching between negative margins.
- set negative margins of equal size on all sides of the grid by default.

new implementation introduces breaking changes so to use grid v2 has to be used as `Unstable_Grid2` until next release.

```jsx
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
```

### customization

centered elements can be achieved with `display='flex'` directly on the item. 

`justifyContent` and/or `alignItems` adjusts the position of the content.

```jsx
<Grid container spacing={2} minHeight={160}>
  <Grid xs display="flex" justifyContent="center" alignItems="center">
    <Avatar src="/static/images/avatar/1.jpg" />
  </Grid>
  <Grid display="flex" justifyContent="center" alignItems="center">
    <Avatar src="/static/images/avatar/2.jpg" />
  </Grid>
  <Grid xs display="flex" justifyContent="center" alignItems="center">
    <Avatar src="/static/images/avatar/3.jpg" />
  </Grid>
</Grid>
```

using `container` prop doesn't work because the grid container is designed exclusively to wrap grid items, it can't wrap other elements.

## stack

manages layout of immediate children along vertical or horizontal axis.

optional spacing and/or dividers between each child.

one-dimensional layouts, while grid handles two-dimensional layouts

default direction is `column` which stacks children vertically.

```jsx
<Stack spacing={2}>
  <Item>Item 1</Item>
  <Item>Item 2</Item>
  <Item>Item 3</Item>
</Stack>
```

control space between children using `spacing` prop.

can be any integer, decimal or string.

prop is converted into CSS using `theme.spacing()` helper

### direction

`direction` prop can be used to position items horizontally in a `row` or vertically in a `column`

```jsx
<Stack direction="row" spacing={2}>
  <Item>Item 1</Item>
  <Item>Item 2</Item>
  <Item>Item 3</Item>
</Stack>
```

### dividers

`divider` prop inserts al element between each child.

works well with `Divider` component.

```jsx
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { styled, Stack } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
}));

export default function DividerStack() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </div>
  );
}
```

### responsive values

switch `direction` or `spacing` values based on the active breakpoint.

```jsx
<Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
>
  <Item>Item 1</Item>
  <Item>Item 2</Item>
  <Item>Item 3</Item>
</Stack>
```

### interactive

```jsx

<Stack
  direction="row"
  // direction='row-reverse'
  // direction='column'
  // direction='column-reverse'
  justifyContent="center"
  // justifyContent='flex-start' 'flex-end' 'space-between' 'space-around' 'space-evenly'
  alignItems="center"
  // alignItems='flex-start' 'flex-end' 'stretch' 'baseline'
  spacing={2}
>
```

`Stack` component supports all system properties.

system properties being used as props directly on component
```jsx
<Stack mt={2}>
```


## image list

## hidden

# utils

## click-away listener

## css bassline

## modal

## no ssr

## popover

## popper

## portal

## textarea autosize

## transitions

## useMediaQuery

#

