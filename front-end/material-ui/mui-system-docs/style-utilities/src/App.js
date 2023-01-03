import * as React from 'react';
import { 
  Box,
  Button,
  Grid,
  Link,
} from '@mui/material';

// import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
// import { common, cyan, purple } from '@mui/material/colors';
// import { useTheme } from '@mui/material/styles'; // acess theme variables inside functional react components

// accordion component imports
import { 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography 
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// why the components won't work if imported individually like
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails'; 

import PropTypes from 'prop-types'; // typechecking on the props for a component

// screen reader utility
import { visuallyHidden } from '@mui/utils';

// const theme = createTheme(); 

// create custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: 'white',
    }
  },
  components: {
    CustomComponent: {
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
          props: { variant: 'dashed', color: 'primary'},
          style: {
            border: '1px dashed darkblue',
          }
        }, 
        {
          props: { variant: 'dashed', color: 'secondary'},
          style: {
            border: '1px dashed darkred',
          },
        },
      ],
    },
  },
});

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

const MyComponent = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,
  textAlign: 'center',
});

const MyThemeComponent = styled('div')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

const CustomComponent = styled('div', {
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'variant' && prop !== 'sx',
  name: 'CustomComponent',
  slot: 'Root',
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === 'primary' && styles.primary,
    props.color === 'secondary' && styles.secondary,
  ],
})(({theme}) => ({
  backgroundColor: 'aliceblue',
  padding: theme.spacing(1),
}));

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

// components as selectors
/*
const Child = emotion.div`
  color: red;
`;

const Parent = emotion.div`
  ${Child} {
    color: green;
  }
`;
*/

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
                flexDirection: 'row-reverse',
                // flexDirection: 'row',
                // flexDirection: 'column',
                // flexDirection: 'column-reverse'
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
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'nowrap',
                p: 1,
                m: 1,
                bgcolor: 'text.secondary',
                maxWidth: 200,
              }}
            >
              <Item>item 1</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
              <Item>item 4</Item>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                p: 1,
                m: 1,
                bgcolor: 'text.secondary',
                maxWidth: 200,
              }}
            >
              <Item>item 1</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
              <Item>item 4</Item>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap-reverse',
                justifyContent: 'center',
                p: 1,
                m: 1,
                bgcolor: 'text.secondary',
                maxWidth: 200,
              }}
            >
              <Item>item 1</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
              <Item>item 4</Item>
            </Box>
            <Box
              sx={{
                display: 'flex',
                // flexWrap: 'nowrap',
                justifyContent: 'center',
                alignItems: 'flex-start',
                // alignItems: 'strech', default
                // alignItems: 'flex-end',
                // alignItems: 'center',
                // alignItems: 'baseline',
                p: 1,
                m: 1,
                bgcolor: 'text.secondary',
                maxWidth: 300,
                height: 100,
              }}
            >
              <Item>item 1</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
              <Item>item 4</Item>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                // justifyContent: 'center',
                // alignContent: 'flex-end',
                // alignContent: 'flex-start',
                alignContent: 'space-between',
                // alignContent: 'space-around',
                // alignContent: 'stretch',
                p: 1,
                m: 1,
                bgcolor: 'text.secondary',
                maxWidth: 200,
                height: 200,
              }}
            >
              {/* order flex item property */}
              <Item sx={{order: 2}}>item 1</Item>
              <Item sx={{order: 4}}>item 2</Item>
              <Item sx={{order: 1}}>item 3</Item>
              <Item sx={{order: 3}}>item 4</Item>
            </Box>
            <Box
              sx={{ 
                display: 'flex', 
                alignItems: 'flex-start',
                p: 1, 
                bgcolor: 'text.secondary', 
                borderRadius: 1,
                height: 100,
              }}
            >
              <Item sx={{ flexGrow: 1 }}>Item 1</Item>
              <Item sx={{width: 100, alignSelf: 'flex-end'}}>Item 2</Item>
              <Item sx={{flexShrink: 1}}>Item 3</Item>
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* GRID */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Title>grid</Title>
          </AccordionSummary>
          <AccordionSummary>
            <Box 
              sx={{ 
                display: 'grid', 
                gridTemplateRows: 'repeat(3, 1fr)', 
                gridTemplateColumns: 'repeat(3, 1fr)',
                // gap: 2,
                rowGap: 3,
                columnGap: 1,
                m: 2,
              }}
            >
              <Item>1</Item>
              <Item>2</Item>
              <Item>3</Item>
              <Item>4</Item>
              <Item>5</Item>
              <Item>6</Item>
              <Item>7</Item>
              <Item>8</Item>
              <Item>9</Item>
            </Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 1,
                gridTemplateRows: 'auto',
                gridTemplateAreas: `'header header header header'
                  'main main . sidebar'
                  'footer footer footer footer'`,
              }}
            >
              <Box
                sx={{
                  gridArea: 'header',
                  bgcolor: 'primary.main',
                }}
              >header</Box>
              <Box
                sx={{
                  gridArea: 'main',
                  bgcolor: 'secondary.main',
                }}
              >main</Box>
              <Box
                sx={{
                  gridArea: 'sidebar',
                  bgcolor: 'error.main',
                }}
              >sidebar</Box>
              <Box
                sx={{
                  gridArea: 'footer',
                  bgcolor: 'warning.dark',
                }}
              >footer</Box>
            </Box>
            <Box
              sx={{
                display: 'grid',
                gridAutoRows: '1fr',
                gap: 1,
              }}
            >
              <Item sx={{gridRow: '1', gridColumn: 'span 2', bgcolor: 'primary.light'}}>spans 2</Item>
              {/* The second non-visible column has width of 1/4 */}
              <Item sx={{gridRow: '1', gridColumn: '4 / 5', bgcolor: 'error.light'}}>4/5</Item>
            </Box>
            <Box
              sx={{
                display: 'grid',
                gridAutoRows: '40px',
                gap: 1,
              }}
            >
              <Item sx={{ gridColumn: '1', gridRow: 'span 2', bgcolor: 'success.light' }}>span 2</Item>
              {/* The second non-visible row has height of 40px */}
              <Item sx={{ gridColumn: '1', gridRow: '4 / 5' }}>4 / 5</Item>
            </Box>
          </AccordionSummary>
        </Accordion>

        {/* PALETTE */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Title>palette</Title>
          </AccordionSummary>
          <AccordionDetails sx={{display: 'flex', justifyContent: 'center'}}>
          <Typography component="div" variant="body1">
            <Box sx={{ color: 'primary.main' }}>primary.main</Box>
            <Box sx={{ color: 'secondary.main' }}>secondary.main</Box>
            <Box sx={{ color: 'error.main' }}>error.main</Box>
            <Box sx={{ color: 'warning.main' }}>warning.main</Box>
            <Box sx={{ color: 'info.main' }}>info.main</Box>
            <Box sx={{ color: 'success.main' }}>success.main</Box>
            <Box sx={{ color: 'text.primary' }}>text.primary</Box>
            <Box sx={{ color: 'text.secondary' }}>text.secondary</Box>
            <Box sx={{ color: 'text.disabled' }}>text.disabled</Box>
          </Typography>
          </AccordionDetails>
        </Accordion>

        {/* POSITIONS */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Title>positions</Title>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              component="div"
              variant="body1"
              style={{
                height: 100,
                width: '100%',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  bgcolor: (theme) =>
                    theme.palette.mode === 'dark' ? '#101010' : 'grey.600',
                  color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.50'),
                  border: '1px solid',
                  borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                  p: 2,
                  borderRadius: 2,
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  position: 'absolute',
                  top: 40,
                  left: '40%',
                  zIndex: 'tooltip',
                }}
              >
                z-index tooltip
              </Box>
              <Box
                sx={{
                  bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : '#fff'),
                  color: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                  border: '1px solid',
                  borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                  p: 2,
                  borderRadius: 2,
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  position: 'absolute',
                  top: 0,
                  left: '43%',
                  zIndex: 'modal',
                }}
              >
                z-index modal
              </Box>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* SHADOWS */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Title>shadows</Title>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              <Box
                sx={{
                  boxShadow: 0,
                  width: '8rem',
                  height: '5rem',
                  bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                  color: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                  p: 1,
                  m: 1,
                  borderRadius: 2,
                  textAlign: 'center',
                  fontSize: '0.875rem',
                  fontWeight: '700',
                }}
              >
                boxShadow: 0
              </Box>
              <Box
                sx={{
                  boxShadow: 1,
                  width: '8rem',
                  height: '5rem',
                  bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                  color: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                  p: 1,
                  m: 1,
                  borderRadius: 2,
                  textAlign: 'center',
                  fontSize: '0.875rem',
                  fontWeight: '700',
                }}
              >
                boxShadow: 1
              </Box>
              <Box
                sx={{
                  boxShadow: 2,
                  width: '8rem',
                  height: '5rem',
                  bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                  color: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                  p: 1,
                  m: 1,
                  borderRadius: 2,
                  textAlign: 'center',
                  fontSize: '0.875rem',
                  fontWeight: '700',
                }}
              >
                boxShadow: 2
              </Box>
              <Box
                sx={{
                  boxShadow: 5,
                  width: '8rem',
                  height: '5rem',
                  bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                  color: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                  p: 1,
                  m: 1,
                  borderRadius: 2,
                  textAlign: 'center',
                  fontSize: '0.875rem',
                  fontWeight: '700',
                }}
              >
                boxShadow: 5
              </Box>
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* SIZING */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Title>sizing</Title>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ width: '100%' }}>
              <Box
                sx={{
                  width: 1 / 4,
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
                  textAlign: 'center',
                }}
              >
                Width 1/4
              </Box>
              <Box
                sx={{
                  width: 300,
                  p: 1,
                  my: 1,
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
                  textAlign: 'center',
                }}
              >
                Width 300
              </Box>
              <Box
                sx={{
                  width: '75%',
                  p: 1,
                  my: 1,
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
                  textAlign: 'center',
                }}
              >
                Width 75%
              </Box>
              <Box
                sx={{
                  width: 1,
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
                  textAlign: 'center',
                }}
              >
                Width 1
              </Box>
            </Box>
            <Box sx={{ height: 100, width: '100%', m: 1, }}>
              <Box
                sx={{
                  height: '25%',
                  width: 120,
                  display: 'inline-block',
                  p: 1,
                  mx: 1,
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
                  textAlign: 'center',
                }}
              >
                Height 25%
              </Box>
              <Box
                sx={{
                  height: '50%',
                  width: 120,
                  display: 'inline-block',
                  p: 1,
                  mx: 1,
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
                  textAlign: 'center',
                }}
              >
                Height 50%
              </Box>
              <Box
                sx={{
                  height: '75%',
                  width: 120,
                  display: 'inline-block',
                  p: 1,
                  mx: 1,
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
                  textAlign: 'center',
                }}
              >
                Height 75%
              </Box>
              <Box
                sx={{
                  height: '100%',
                  width: 120,
                  display: 'inline-block',
                  p: 1,
                  mx: 1,
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
                  textAlign: 'center',
                }}
              >
                Height 100%
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* SPACING */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Title>spacing</Title>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Box
                sx={{
                  mx: 'auto',
                  width: 200,
                  p: 1,
                  bgcolor: (theme) =>
                    theme.palette.mode === 'dark' ? '#101010' : 'grey.50',
                  color: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                  border: '1px solid',
                  borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                  borderRadius: 2,
                  textAlign: 'center',
                  fontSize: '0.875rem',
                  fontWeight: '700',
                }}
              >
                Centered element
              </Box>
            </div>
          </AccordionDetails>
        </Accordion>

        {/* SCREEN READERS */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Title>screen readers</Title>
          </AccordionSummary>
          <AccordionDetails>
            <Link href="#foo">
              Read more
              {/* always visually hidden because the parent is focusable element */}
              <Box sx={visuallyHidden}>about how to visually hide elements</Box>
            </Link>
          </AccordionDetails>
        </Accordion>
        {/* TYPOGRAPHY */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Title>typography</Title>
          </AccordionSummary>
          <AccordionDetails sx={{display: 'flex', gap: 5, flexWrap: 'wrap'}}>
            <div>
              <Box sx={{ typography: 'subtitle2' }}>subtitle2</Box> 
              <Box sx={{ typography: 'body1' }}>body1</Box>
              <Box sx={{ typography: 'body2' }}>body2</Box>
            </div>
            <Typography component="div">
              <Box sx={{ fontWeight: 'light', m: 1 }}>Light</Box>
              <Box sx={{ fontWeight: 'regular', m: 1 }}>Regular</Box>
              <Box sx={{ fontWeight: 'medium', m: 1 }}>Medium</Box>
              <Box sx={{ fontWeight: 500, m: 1 }}>500</Box>
              <Box sx={{ fontWeight: 'bold', m: 1 }}>Bold</Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ textTransform: 'capitalize', m: 1 }}>capitalized text.</Box>
              <Box sx={{ textTransform: 'lowercase', m: 1 }}>Lowercase Text.</Box>
              <Box sx={{ textTransform: 'uppercase', m: 1 }}>Uppercase Text.</Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ fontSize: 'default', m: 1 }}>Default</Box>
              <Box sx={{ fontSize: 'h6.fontSize', m: 1 }}>h6.fontSize</Box>
              <Box sx={{ fontSize: 16, m: 1 }}>16px</Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ fontFamily: 'default', m: 1 }}>Default</Box>
              <Box sx={{ fontFamily: 'Monospace', fontSize: 'h6.fontSize', m: 1 }}>
                Monospace
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ letterSpacing: 6, m: 1 }}>Letter Spacing 6px.</Box>
              <Box sx={{ letterSpacing: 10, m: 1 }}>Letter Spacing 10px.</Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ lineHeight: 'normal', m: 1 }}>Normal height.</Box>
              <Box sx={{ lineHeight: 2, m: 1 }}>line-height: 2</Box>
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* STYLED */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Title>styled</Title>
          </AccordionSummary>
          <AccordionDetails>
            <MyComponent>Styled div</MyComponent>
            <MyThemeComponent>Styled div with theme</MyThemeComponent>
            <CustomComponent sx={{m: 1}} color='primary' variant='dashed'>primary</CustomComponent>
            <CustomComponent sx={{m: 1}} color='secondary'>secondary</CustomComponent>
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