# properties

custom system properties

- are linked with the theme
- compute CSS properties
- traditional css properties and selectors are supported

## legend

- `mb` `marginBottom` - system key
- `margin-bottom` - css
- `spacing` - system style function
- `theme.spacing(value)` - theme mapping

**system key**

column lists keys by which you can use this property with `sx` prop or system function.

```jsx
<Button sx={{ mb: 3 }}>
// or
<Box mb={3}>
// or
<Box marginBottom={3}>
```

**css properties**

```css
.my-class {
  margin-bottom: Xpx;
}
```

**system style function**

lists function that generates properties. 

**theme mapping**

how the property is wired with the theme.

```jsx
<Button sx={{ mb: 3 }} />

// is equivalent to
<Button sx={{ marginBottom: theme => theme.spacing(3)}} />
```

- default theme spacing is 8px

```css
/* generated css */
.my-class {
  margin-bottom: 24px;
}

```

# borders

border utilities quickly style `border` and `border-radius` of an element.

## borders

```jsx
import * as React from 'react';
import Box from '@mui/material/Box';

const commonStyles = {
  bgcolor: 'background.paper',
  m: 1,
  borderColor: 'text.primary',
  width: '5rem',
  height: '5rem',
};

export default function BorderAdditive() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ ...commonStyles, border: 1 }} />
      <Box sx={{ ...commonStyles, borderTop: 1 }} />
      <Box sx={{ ...commonStyles, borderRight: 1 }} />
      <Box sx={{ ...commonStyles, borderBottom: 1 }} />
      <Box sx={{ ...commonStyles, borderLeft: 1 }} />
    </Box>
  );
}

```

# display

display utilities allow to toggle display values of components responsively.

## display property of components

```jsx
// making a block element, inline
<Box component="div" sx={{ display: 'inline' }}>inline</Box>

<Box component="div" sx={{ display: 'inline' }}>inline</Box>

// making an inline element, block
<Box component="span" sx={{ display: 'block' }}>block</Box>
<Box component="span" sx={{ display: 'block' }}>block</Box>
```

## hiding elements

responsive display classes show and hide elements by device.

```jsx
<Box 
  component="span" 
  sx={{ 
    display: { xs: 'none', sm: 'block', md: 'inline', lg: 'none'} 
  }}
>
  block
</Box>
```

## display medium

```jsx
<Box sx={{ display: 'block', displayPrint: 'none' }}>
  Screen Only (Hide on print only)
</Box>
<Box sx={{ display: 'none', displayPrint: 'block' }}>
  Print Only (Hide on screen only)
</Box>
```

## overflow

```jsx
<Box component="div" sx={{ overflow: 'hidden' }}>
  Not scrollable, overflow is hidden
</Box>
<Box component="div" sx={{ overflow: 'auto' }}>
  Try scrolling this overflow auto box
</Box>
```

## text overflow

```jsx
<Box component="div" sx={{ textOverflow: 'clip' }}>
  Lorem Ipsum is simply dummy text
</Box>
<Box component="div" sx={{ textOverflow: 'ellipsis' }}>
  Lorem Ipsum is simply dummy text
</Box>

```

## visibility

```jsx
<Box component="div" sx={{ visibility: 'visible' }}>
  Visible container
</Box>
<Box component="div" sx={{ visibility: 'hidden' }}>
  Invisible container
</Box>
```

## whitespace

```jsx
<Box component="div" sx={{ whiteSpace: 'nowrap' }}>
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
</Box>
<Box component="div" sx={{ whiteSpace: 'normal' }}>
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
</Box>
```

# flexbox

## parent properties

### display

```jsx
<Box sx={{ display: 'flex' }}>…
<Box sx={{ display: 'inline-flex' }}>…
```

### flex-direction

```jsx
<Box sx={{ flexDirection: 'row' }}>…
<Box sx={{ flexDirection: 'row-reverse' }}>…
<Box sx={{ flexDirection: 'column' }}>…
<Box sx={{ flexDirection: 'column-reverse' }}>…
```

### flex-wrap

```jsx
<Box sx={{ flexWrap: 'nowrap' }}>…
<Box sx={{ flexWrap: 'wrap' }}>…
<Box sx={{ flexWrap: 'wrap-reverse' }}>…
```

### justify-content

```jsx
<Box sx={{ justifyContent: 'flex-start' }}>…
<Box sx={{ justifyContent: 'flex-end' }}>…
<Box sx={{ justifyContent: 'center' }}>…
<Box sx={{ justifyContent: 'space-between' }}>…
<Box sx={{ justifyContent: 'space-around' }}>…
<Box sx={{ justifyContent: 'space-evenly' }}>…
```

### align-content

```jsx
<Box sx={{ alignContent: 'flex-start' }}>…
<Box sx={{ alignContent: 'flex-end' }}>…
<Box sx={{ alignContent: 'center' }}>…
<Box sx={{ alignContent: 'space-between' }}>…
<Box sx={{ alignContent: 'space-around' }}>…
<Box sx={{ alignContent: 'stretch' }}>…
```

## children properties

### order

```jsx
<Box sx={{ order: 2 }}>Item 1</Box>
<Box sx={{ order: 3 }}>Item 2</Box>
<Box sx={{ order: 1 }}>Item 3</Box>
```

### flex-grow

```jsx
<Box sx={{ flexGrow: 1 }}>Item 1</Box>
<Box>Item 2</Box>
<Box>Item 3</Box>
```

### flex-shrink

```jsx
<Box sx={{ width: '100%' }}>Item 1</Box>
<Box sx={{ flexShrink: 1 }}>Item 2</Box>
<Box sx={{ flexShrink: 0 }}>Item 3</Box>
```

### align-self

```jsx
<Box>Item 1</Box>
<Box sx={{ alignSelf: 'flex-end' }}>Item 2</Box>
<Box>Item 3</Box>

```

# grid

## parent properties

### display

```jsx
<Box sx={{ display: 'grid' }}>…</Box>
<Box sx={{ display: 'inline-grid' }}>…</Box>
```

### grid-template-rows

```jsx
<Box sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }}>
  <Item>1</Item>
  <Item>2</Item>
  <Item>3</Item>
</Box>
```

### grid-template-columns

```jsx
<Box
  sx={{
    display: 'grid',
    gap: 1,
    gridTemplateColumns: 'repeat(2, 1fr)',
  }}
>
  <Item>1</Item>
  <Item>2</Item>
  <Item>3</Item>
  <Item>4</Item>
</Box>
```

### row-gap and column-gap

define gaps for rows and columns independently

```jsx
<Box
  sx={{
    display: 'grid',
    columnGap: 3,
    rowGap: 1,
    gridTemplateColumns: 'repeat(2, 1fr)',
  }}
>
  <Item>1</Item>
  <Item>2</Item>
  <Item>3</Item>
  <Item>4</Item>
</Box>
```

### grid-template-areas

```jsx
<Box
  sx={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 1,
    gridTemplateRows: 'auto',
    gridTemplateAreas: `"header header header header"
  "main main . sidebar"
  "footer footer footer footer"`,
  }}
>
  <Box sx={{ gridArea: 'header', bgcolor: 'primary.main' }}>Header</Box>
  <Box sx={{ gridArea: 'main', bgcolor: 'secondary.main' }}>Main</Box>
  <Box sx={{ gridArea: 'sidebar', bgcolor: 'error.main' }}>Sidebar</Box>
  <Box sx={{ gridArea: 'footer', bgcolor: 'warning.dark' }}>Footer</Box>
</Box>
```

### grid-auto-columns

```jsx
<Box
  sx={{
    display: 'grid',
    gridAutoColumns: '1fr',
    gap: 1,
  }}
>
  <Item sx={{ gridRow: '1', gridColumn: 'span 2' }}>span 2</Item>
  {/* The second non-visible column has width of 1/4 */}
  <Item sx={{ gridRow: '1', gridColumn: '4 / 5' }}>4 / 5</Item>
</Box>
```

### grid-auto-rows

```jsx
<Box
  sx={{
    display: 'grid',
    gridAutoRows: '40px',
    gap: 1,
  }}
>
  <Item sx={{ gridColumn: '1', gridRow: 'span 2' }}>span 2</Item>
  {/* The second non-visible row has height of 40px */}
  <Item sx={{ gridColumn: '1', gridRow: '4 / 5' }}>4 / 5</Item>
</Box>
```

### grid-auto-flow

controls auto-placement algorithm.

```jsx
<Box
  sx={{
    display: 'grid',
    gridAutoFlow: 'row',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(2, 50px)',
    gap: 1,
  }}
>
  <Item sx={{ gridColumn: '1', gridRow: '1 / 3' }}>1</Item>
  <Item>2</Item>
  <Item>3</Item>
  <Item>4</Item>
  <Item sx={{ gridColumn: '5', gridRow: '1 / 3' }}>5</Item>
</Box>
```

## children properties

### grid-column

short hand for `grid-column-start` and `grid-column-end`

set the start and end line at the same time

```jsx
<Box sx={{ gridColumn: '1 / 3' }}>…

// or set number of columns to span
<Box sx={{ gridColumn: 'span 2' }}>…
```

### grid-area

allows to give an item a name so that it can be referenced by a template with `grid-template-areas`

```jsx
<Box sx={{ gridArea: 'header' }}>…
```

# palette

## color

```jsx
<Box sx={{ color: 'primary.main' }}>…
<Box sx={{ color: 'secondary.main' }}>…
<Box sx={{ color: 'error.main' }}>…
<Box sx={{ color: 'warning.main' }}>…
<Box sx={{ color: 'info.main' }}>…
<Box sx={{ color: 'success.main' }}>…
<Box sx={{ color: 'text.primary' }}>…
<Box sx={{ color: 'text.secondary' }}>…
<Box sx={{ color: 'text.disabled' }}>…

```

# positions

## z-index

```jsx
<Box sx={{ zIndex: 'tooltip' }}>
<Box sx={{ zIndex: 'modal' }}>
```

# shadows

```jsx
<Box sx={{ boxShadow: 0 }}>…
<Box sx={{ boxShadow: 1 }}>…
<Box sx={{ boxShadow: 2 }}>…
<Box sx={{ boxShadow: 3 }}>…

```

# sizing

make an element as wide or tall relative to its parent with `width` and `height` utilities

supported values
- `width`
- `height`
- `minHeight`
- `maxHeight`
- `minWidth`

```jsx
function transform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
// if value is between 0 (exclusive) and 1, the value is converted to percent, otherwise directly set on the css property

<Box sx={{ width: 1/4 }}> // Equivalent to width: '25%'
<Box sx={{ width: 300 }}> // Numbers are converted to pixel values.
<Box sx={{ width: '75%' }}> // String values are used as raw CSS.
<Box sx={{ width: 1 }}> // 100%

```

## width

```jsx
<Box sx={{ width: '25%' }}>…
<Box sx={{ width: '50%' }}>…
<Box sx={{ width: '75%' }}>…
<Box sx={{ width: '100%' }}>…
<Box sx={{ width: 'auto' }}>…
```

## max-width

```jsx
<Box sx={{ maxWidth: 'md' }}>…
```

## height 

```jsx
<Box sx={{ height: '25%' }}>…
<Box sx={{ height: '50%' }}>…
<Box sx={{ height: '75%' }}>…
<Box sx={{ height: '100%' }}>…
```

# spacing

## notation

space utility converts shorthand margin and padding props to margin and padding css declarations.

format

`{property}{sides}`

properties
- `m` margin
- `p` padding

sides
- `t` top
- `b` bottom
- `l` left
- `r` right
- `x` sets x axis (margin-inline in normal writing mode)
- `y` sets y axis (margin-block in normal writing mode)
- blank for classes that set margins or paddings on all sides.

## transformation

input is a `number` and theme a `number` prop value is multiplied by theme value

```jsx
const theme = {
  spacing: 8, // set in px
}

<Box sx={{ m: -2 }} /> // margin: -16px;
<Box sx={{ m: 0 }} /> // margin: 0px;
<Box sx={{ m: 0.5 }} /> // margin: 4px;
<Box sx={{ m: 2 }} /> // margin: 16px;

```

input `number` and theme `array` prop value is used as the array index

```jsx
const theme = {
  spacing: [0, 2, 3, 5, 8], // 
}

<Box sx={{ m: -2 }} /> // margin: -3px;
<Box sx={{ m: 0 }} /> // margin: 0px;
<Box sx={{ m: 2 }} /> // margin: 3px;
```

input `number` and theme `function` function is called with the prop value

```jsx
const theme = {
  spacing: value => value * 2,
}

<Box sx={{ m: 0 }} /> // margin: 0px;
<Box sx={{ m: 2 }} /> // margin: 4px;
```

input `string` prop value is passed as raw css value

```jsx
<Box sx={{ m: '2rem' }} /> // margin: 2rem;
<Box sx={{ mx: 'auto' }} /> // margin-left: auto; margin-right: auto;
```

## horizontal centering

flex and grid display properties can be used to align elements at the center

`margin-inline: auto` with a width can be used for horizontally centering elements.



# screen readers

utilities to improve accessibility with screen readers

visually hidden style utility provides a common mechanism to hide elements but makes them available for assistive technology.

```jsx
<Link href="#foo">
  Read more
  {/* always visually hidden because the parent is focusable element */}
  <Box sx={visuallyHidden}>about how to visually hide elements</Box>
</Link>

// if no strict CSP policy in place
import { visuallyHidden } from '@mui/utils';

<div style={visuallyHidden}>about how to visually hide elements</div>;
```

# typography

## variant

```jsx
<Box sx={{ typography: 'subtitle2' }}>… // theme.typography.subtitle2
<Box sx={{ typography: 'body1' }}>…
<Box sx={{ typography: 'body2' }}>…

// text align
<Box sx={{ textAlign: 'left' }}>…
<Box sx={{ textAlign: 'center' }}>…
<Box sx={{ textAlign: 'right' }}>…

// text transformation
<Box sx={{ textTransform: 'capitalize' }}>…
<Box sx={{ textTransform: 'lowercase' }}>…
<Box sx={{ textTransform: 'uppercase' }}>…

// font weight
<Box sx={{ fontWeight: 'light' }}>… // theme.typography.fontWeightLight
<Box sx={{ fontWeight: 'regular' }}>…
<Box sx={{ fontWeight: 'medium' }}>…
<Box sx={{ fontWeight: 500 }}>…
<Box sx={{ fontWeight: 'bold' }}>…

// font style
<Box sx={{ fontStyle: 'normal' }}>…
<Box sx={{ fontStyle: 'italic' }}>…
<Box sx={{ fontStyle: 'oblique' }}>…

// font size
<Box sx={{ fontSize: 'default' }}>…  // theme.typography.fontSize
<Box sx={{ fontSize: 'h6.fontSize' }}>…
<Box sx={{ fontSize: 16 }}>…

// font family
<Box sx={{ fontFamily: 'default' }}>…
<Box sx={{ fontFamily: 'Monospace' }}>…

// letter spacing
<Box sx={{ letterSpacing: 6 }}>…
<Box sx={{ letterSpacing: 10 }}>…

// line height
<Box sx={{ lineHeight: 'normal' }}>…
<Box sx={{ lineHeight: 10 }}>…
```

# styled

MUI components are styled with `styled()`

built on top of the `styled()` module of `@mui/styled-engine`

use utility from `@mui/system` package or import it from `@mui/material/styles`

can be used as a replacement for emotion's or styled-components styled() utility.

- uses MUI default `theme` if no theme is available in react context
- supports theme's `styleOverrides` and `variants` 
- support for the `sx` prop
- adds by default `shouldForwardProp`

## API

`styled(component, [options])(styles) => Component`

### arguments

- `component` component that will be wrapped
- `options` optional object indicates whether `prop` should be forwarded to the component `options.shouldForwardProp`
- `options.label` string  suffix of the style sheet, useful for debuggin.
- `options.name` string the key used under `theme.components` to specify `styleOverrides` and `variants`, also generates `options.label`
- `options.slot` string if `Root`, automatically applies theme's `variants`
- `options.overrideResolver` function that returns styles based on the props and `theme.components[name].styleOverrides`

```jsx
import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/system';

const customTheme = createTheme({
  components: {
    MyThemeComponent: {
      styleOverrides: {
        root: {
          color: 'darkslategray',
        },
        primary: {
          color: 'darkblue',
        },
        secondary: {
          color: 'darkred',
          backgroundColor: 'pink',
        },
      },
      variants: [
        {
          props: { variant: 'dashed', color: 'primary' },
          style: {
            border: '1px dashed darkblue',
          },
        },
        {
          props: { variant: 'dashed', color: 'secondary' },
          style: {
            border: '1px dashed darkred',
          },
        },
      ],
    },
  },
});

const MyThemeComponent = styled('div', {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) =>
    prop !== 'color' && prop !== 'variant' && prop !== 'sx',
  name: 'MyThemeComponent',
  slot: 'Root',
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === 'primary' && styles.primary,
    props.color === 'secondary' && styles.secondary,
  ],
})(({ theme }) => ({
  backgroundColor: 'aliceblue',
  padding: theme.spacing(1),
}));

export default function UsingOptions() {
  return (
    <ThemeProvider theme={customTheme}>
      <MyThemeComponent sx={{ m: 1 }} color="primary" variant="dashed">
        Primary
      </MyThemeComponent>
      <MyThemeComponent sx={{ m: 1 }} color="secondary">
        Secondary
      </MyThemeComponent>
    </ThemeProvider>
  );
}
```

## removing features

```diff
 const StyledComponent = styled('div', {}, {
   name: 'MuiStyled',
   slot: 'Root',
-  overridesResolver: (props, styles) => styles.root, // disables theme.components[name].styleOverrides
+  skipVariantsResolver: true, // disables theme.components[name].variants
+  skipSx: true, // disables the sx prop
 });

```

### creating custom styled() utility

suitable when we want a different default theme for `styled()`

```jsx
import { createStyled, createTheme } from '@mui/system';

const defaultTheme = createTheme({
  // your custom theme values
});

const styled = createStyled({ defaultTheme });

export default styled;

```

## difference with sx prop

`styled` function is an extension of the `styled` utility provided by either **emotion** or **styled-components**

guaranteed to produce the same output as the `styled` function coming from the style library. (deterministic extension)

`sx` prop is a new way of styling components focused in fast customization.

`styled` is a function and `sx` is a prop of MUI components

`sx` shortcuts more than `styled`

```jsx
const MyStyledButton = styled('button')({
  mx: 1, // ❌ don't use this! This shortcut is only provided by the `sx` prop
});

import Button from '@mui/material/Button';

const MyStyledButton = (props) => (
  <Button
    sx={{
      mx: 1, // ✔️ this shortcut is specific to the `sx` prop,
    }}
  >
    {props.children}
  </Button>
);
```

style definition

```jsx
// styled
const MyStyledButton = styled('button')({
  padding: 1, // means "1px", NOT "theme.spacing(1)"
});

// sx
import Button from '@mui/material/Button';

const MyStyledButton = (props) => (
  <Button
    sx={{
      padding: 1, // means "theme.spacing(1)", NOT "1px"
    }}
  >
    {props.children}
  </Button>
);

```

**patterns for how to use props differ**

```jsx
// styled
const MyStyledButton = styled('button')((props) => ({
  backgroundColor: props.myBackgroundColor,
}));

// sx
import Button from '@mui/material/Button';

const MyStyledButton = (props) => (
  <Button sx={{ backgroundColor: props.myCustomColor }}>{props.children}</Button>
);

```

**parameter when using function are different for each field**

```jsx
// You may find this syntax in the wild, but for code readability
// we recommend using only one top-level function
const MyStyledButtonPropsPerField = styled('button')({
  backgroundColor: (props) => props.myBackgroundColor,
});

// sx
import Button from '@mui/material/Button';
import { lighten } from 'polished';

const MyStyledButton = (props) => (
  <Button
    sx={{ backgroundColor: (theme) => lighten(0.2, theme.palette.primary.main) }}
  >
    {props.children}
  </Button>
);
// Note: for direct theme access without modification, you can also use a shortcut by providing the key as a string
const MyStyledButton = (props) => (
  <Button sx={{ backgroundColor: 'primary.main' }}>{props.children}</Button>
);

```

## component selector API

using the `styled()` API of emotion or styled-components, components can be set as selectors

```jsx
import styled from '@emotion/styled';

const Child = styled.div`
  color: red;
`;

const Parent = styled.div`
  ${Child} {
    color: green;
  }
`;

render(
  <div>
    <Parent>
      <Child>Green because I am inside a Parent</Child>
    </Parent>
    <Child>Red because I am not inside a Parent</Child>
  </div>,
);

```