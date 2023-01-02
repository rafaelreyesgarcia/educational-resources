import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
// import { common, cyan, purple } from '@mui/material/colors';
// import { useTheme } from '@mui/material/styles'; // acess theme variables inside functional react components

// accordion component imports
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// why the components won't work if imported individually like
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails'; 

import PropTypes from 'prop-types'; // typechecking on the props for a component

const theme = createTheme();

// share styles across multiple components
const commonStyles = {
  bgcolor: 'background.paper',
  m: 1,
  // borderColor: 'text.primary',
  width: '5rem',
  height: '5rem',
};

// styled
const Title = styled('h1')({
  textAlign: 'center',
  textTransform: 'capitalize',
  margin: '1px',
  marginBottom: '10px'
});

const InlineDiv = styled('div')({
  display: 'inline',
  padding: '0.5rem',
  margin: '1rem',
  backgroundColor: theme.palette.primary.light,
  color: '#424242',
  border: '3px solid',
  borderColor: theme.palette.secondary.light,
  borderRadius: '4px',
  fontSize: '0.875rem',
  fontWeight: '700',
  textAlign: 'center',
});

// flexbox items
function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box 
      sx={{
        // custom child sx prop 
        p: 1,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx, // the sx prop passed down from the parent box
      }} 
      {...other} // the rest of props passed
    />
  )
}

// typechecking on the props for the Item component
Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
}

// App
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* PROPERTIES */}
        <Accordion>
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon/>}
          >
            <Title>properties</Title>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{display: 'flex', flexDirection: 'column', }}>
              <Box
                sx={{display: 'flex', justifyContent: 'space-around',}}
              >
                <Button sx={{p: 3, backgroundColor: 'azure'}}>using sx prop</Button>
                {/* above equivalent to below */}
                {/* theme mapping */}
                <Button
                  sx={{
                    marginBottom: theme => theme.spacing(3),
                    bgcolor: theme.palette.secondary.light,
                    // bgcolor: 'secondary.light',
                  }}
                >
                  theme mapping
                </Button>
                <Box p={1} bgcolor={'azure'}>component prop</Box>
                <Box paddingTop={2} bgcolor={'ButtonFace'}>component prop</Box>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
        
        {/* BORDER */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Title>border properties</Title>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{display: 'flex', flexDirection: 'column', }}>
          
              <Box
                sx={{display: 'flex', justifyContent: 'space-between', }}
              >
                <Box sx={{...commonStyles, border: 2, borderColor: 'error.main', borderRadius: theme.shape}} />
                <Box sx={{...commonStyles, borderTop: 3, borderColor: 'primary.main'}} />
                <Box sx={{...commonStyles, borderBottom: 4, borderColor: 'grey.500'}} />
                {/* substractive  style */}
                <Box sx={{...commonStyles, border: 3, borderRight: 0, borderRadius: '16px', }} />
                <Box sx={{...commonStyles, border: 5, borderColor: 'error.main', borderRadius: '50%',}} />
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
        
        {/* DISPLAY */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Title>display</Title>
          </AccordionSummary>
          <AccordionDetails>
            <Box style={{width:'100%'}}>
              <Box 
            component='div'
            sx={{
              p: 1,
              m: 3,
              bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'primary.light'),
              color: (theme) => theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
              border: '3px solid',
              borderColor: (theme) => theme.palette.mode === 'dark' ? 'grey.800' : 'secondary.light',
              borderRadius: theme.shape,
              fontSize: '0.875rem',
              fontWeight: '700',
              textAlign: 'center',
            }}
          >
            block
              </Box>
              <InlineDiv>inline</InlineDiv>
              <Box 
            component='div'
            sx={{
              display: 'inline',
              p: 1,
              m: 1,
              bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'primary.light'),
              color: (theme) => theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
              border: '3px solid',
              borderColor: (theme) => theme.palette.mode === 'dark' ? 'grey.800' : 'secondary.light',
              borderRadius: theme.shape,
              fontSize: '0.875rem',
              fontWeight: '700',
              textAlign: 'center',
            }}
          >
            inline
              </Box>
              <Box 
            component='span'
            sx={{
              p: 1,
              m: 3,
              bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'primary.light'),
              color: (theme) => theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
              border: '3px solid',
              borderColor: (theme) => theme.palette.mode === 'dark' ? 'grey.800' : 'secondary.light',
              borderRadius: theme.shape,
              fontSize: '0.875rem',
              fontWeight: '700',
              textAlign: 'center',
              // display properties mixed with media queries and breakpoints
              display: {sm: 'block', md: 'inline', lg: 'none', displayPrint: 'none'}
            }}
          >
            small block, medium inline, large none, won't print
              </Box>
            </Box>
            {/* 2nd part of display */}
            <div 
          style={{
            width: 'auto', 
            display: 'flex', 
            whiteSpace: 'nowrap',
            justifyContent: 'center',
          }}
        >
          <Box
            component='div'
            sx={{
              overflow: 'hidden',
              my: 2,
              mx: 2,
              p: 1,
              bgcolor: 'grey.100',
              color: 'grey.800',
              borderColor: 'grey.300',
              borderRadius: 2,
              textOverflow: 'clip', // default
              flexBasis: '100px',
            }}
          >
            not scrollable, overflow hidden using the sx prop.
          </Box>
          <Box
            component='div'
            sx={{
              overflow: 'auto',
              my: 2,
              mx: 2,
              p: 1,
              bgcolor: 'grey.100',
              color: 'grey.800',
              borderColor: 'grey.300',
              borderRadius: 2,
              width: '100px',
            }}
          >
            try scrolling this overflow autobox
          </Box>
          <Box
            component="div"
            sx={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              m: 2,
              p: 1,
              bgcolor: (theme) =>
                theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
              color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
              border: '1px solid',
              borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
              borderRadius: 2,
              fontSize: '0.875rem',
              fontWeight: '700',
              width: '100px',
            }}
          >
            Lorem Ipsum is simply dummy text
          </Box>
          <Box 
            component="div" 
            sx={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              m: 2,
              p: 1,
              bgcolor: (theme) =>
                theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
              color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
              border: '1px solid',
              borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
              borderRadius: 2,
              fontSize: '0.875rem',
              fontWeight: '700',
              width: '100px',
              whiteSpace: 'normal'
            }}
          >
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </Box>
            </div>
            {/* after grey divs 3rd part of display*/}
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <InlineDiv sx={{visibility: 'visible'}}>visible container</InlineDiv>
          <InlineDiv sx={{visibility: 'hidden'}}>invisible container</InlineDiv>
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* FLEXBOX */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Title>flexbox</Title>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                display: 'flex',
                m: 1,
                p: 1,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                color: (theme) =>
                  theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                border: '1px solid',
                borderColor: (theme) =>
                  theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
              }}
            >
              {"I'm a flexbox container that uses flex!"}
            </Box>
            <Box
              sx={{
                display: 'inline-flex',
                m: 1,
                p: 1,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                color: (theme) =>
                  theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                border: '1px solid',
                borderColor: (theme) =>
                  theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
              }}
            >
              {"I'm a flexbox container that uses inline-flex!"}
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
              }}
            >
              <Item>Item 1</Item>
              <Item>Item 2</Item>
              <Item>Item 3</Item>
            </Box>
          </AccordionDetails>
        </Accordion>
        
      </ThemeProvider>
    </>
    
  )
}

/* 

save button transparent dashed outline
return (
  <Box
    component='span'
    sx={{
      p: 2,
      border: '1px dashed grey'
    }}
  >
    <Button>save</Button>
  </Box>
)
*/


/* 
common box
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
*/



/* BASIC FLEXBOX */

<div style={{display: 'flex', justifyContent: 'space-between', }}>
  <Box 
    sx={{
      bgcolor: theme.palette.primary.main,
      p: 1,
      width: '200px'
    }}
  >
    hey
  </Box>
  <Box 
    sx={{
      bgcolor: theme.palette.primary.main,
      p: 1,
      width: '200px'
    }}
  >
    hey
  </Box>
  <Box 
    sx={{
      bgcolor: theme.palette.primary.main,
      p: 1,
      width: '200px'
    }}
  >
    hey
  </Box>
</div>