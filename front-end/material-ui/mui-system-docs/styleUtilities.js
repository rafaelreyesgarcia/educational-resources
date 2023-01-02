import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange, green, cyan, purple } from '@mui/material/colors'; 

// 1. PROPERTIES

// using the theme and sx objects

const CustomCheckbox = styled(Checkbox)(({theme}) => ({
  color: theme.status.danger,
  '&.Mui-checked': {
    color: theme.status.danger,
  },
}));

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box 
        sx={{
          width: 300,
          height: 300,
          backgroundColor: 'primary.light',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
      <CustomCheckbox defaultChecked />
    </ThemeProvider>
  )
}

// nesting theme providers

const outerTheme = createTheme({
  palette: {
    primary: {
      main: cyan[500],
    },
  },
});

const innerTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={outerTheme}>
      <Box 
        sx={{
          width: 300,
          height: 300,
          backgroundColor: 'primary.light',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
      <Checkbox defaultChecked />
      <ThemeProvider theme={innerTheme}>
        <Checkbox defaultChecked />
      </ThemeProvider>
    </ThemeProvider>
  )
}

// extending outer theme 

const outerTheme2 = createTheme({
  palette: {
    secondary: {
      main: cyan[500],
    },
  },
});

return (
  <ThemeProvider theme={outerTheme2}>
    <Checkbox defaultChecked color='secondary'/>
    {/* extending a nested outer theme */}
    <ThemeProvider
      theme={(theme) => createTheme({
        ...theme,
        palette: {
          ...theme.palette,
          primary: {
            main: purple[500],
          },
        },
      })}
    >
      <Checkbox defaultChecked />
      <Checkbox defaultChecked color='secondary'/>
    </ThemeProvider>
  </ThemeProvider>
)

// sx prop styles in each box
return (
  <>
    <Box 
      sx={{
        bgcolor: 'background.paper',
        m: 1,
        borderColor: 'text.primary',
        width: '5rem',
        height: '5rem',
        border: 1,
      }}
    />
    <Box 
      sx={{
        bgcolor: 'background.paper',
        m: 1,
        borderColor: 'text.primary',
        width: '5rem',
        height: '5rem',
        borderTop: 1,
      }}
    />
  </>
)

// 2. BORDERS

// sharing common styles

const commonStyles = {
  bgColor: 'background.paper',
  m: 1,
  borderColor: 'text.primary',
  // borderColor: 'secondary.main',
  // borderColor: 'error.main',
  // borderColor: 'cyan.500',
  width: '5rem',
  height: '5rem',
};

// border, borderColor, borderRadius
return (
<>
  <Box
    sx={{display: 'flex', justifyContent: 'center', }}
  >
    <Box sx={{...commonStyles, border: 2, borderColor: 'error.main',}} />
    <Box sx={{...commonStyles, borderTop: 3, borderColor: 'primary.main'}} />
    <Box sx={{...commonStyles, borderBottom: 4, borderColor: 'grey.500'}} />
    {/* substractive  style */}
    <Box sx={{...commonStyles, border: 3, borderRight: 0, borderRadius: '16px', }} />
    <Box sx={{...commonStyles, border: 2, borderColor: 'error.main', borderRadius: '50%', }} />
  </Box>
</>
)

// bgcolor

return (
  <>
    <Box sx={{bgcolor: 'primary.main'}}/>
    <Box sx={{bgcolor: 'primary.main'}}/>
  </>
)

// 3. DISPLAY

return (
  <>
    {/* display */}
    <Box component="span" sx={{ display: 'block' }}>block</Box>
    <Box component="div" sx={{ display: 'inline' }}>inline</Box>

    {/* hiding */}
    <Box sx={{ display: { xs: 'block', md: 'none' }}}>
      hide on screens wider than md
    </Box>
    <Box sx={{ display: { xs: 'none', md: 'block' }}}>
      hide on screens smaller than md
    </Box>
    {/* display media */}
    <Box sx={{ display: 'block', displayPrint: 'none' }}>
      Screen Only (Hide on print only)
    </Box>
    <Box sx={{ display: 'none', displayPrint: 'block' }}>
      Print Only (Hide on screen only)
    </Box>

    {/* overflow */}

    <Box component="div" sx={{ overflow: 'hidden' }}>
      Not scrollable, overflow is hidden
    </Box>
    <Box component="div" sx={{ overflow: 'auto' }}>
      Try scrolling this overflow auto box
    </Box>

    {/* text overflow */}
    <Box component="div" sx={{ textOverflow: 'clip' }}>
      Lorem Ipsum is simply dummy text
    </Box>
    <Box component="div" sx={{ textOverflow: 'ellipsis' }}>
      Lorem Ipsum is simply dummy text
    </Box>

    {/* visibility  */}
    <Box component="div" sx={{ visibility: 'visible' }}>
      Visible container
    </Box>
    <Box component="div" sx={{ visibility: 'hidden' }}>
      Invisible container
    </Box>

    {/* white space */}
    <Box component="div" sx={{ whiteSpace: 'nowrap' }}>
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
    </Box>
    <Box component="div" sx={{ whiteSpace: 'normal' }}>
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
    </Box>
  </>
)

// 4. FLEXBOX



