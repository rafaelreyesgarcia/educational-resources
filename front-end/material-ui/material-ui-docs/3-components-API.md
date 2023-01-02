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

## container

## grid

## grid v2

## stack

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

