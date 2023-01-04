import * as React from 'react';

import StarIcon from '@mui/icons-material/StarBorder';
import CheckIcon from '@mui/icons-material/Check';

import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
  Link,
  GlobalStyles,
  Container
} from '@mui/material';


const tiers = [
  {
    title: 'Express',
    price: '15',
    description: [
      '15 MINUTES',
      'QUICK LET OUT',
      'ONE ON ONE CARE',
      'FEEDINGS IF NEEDED',
    ],
    buttonText: 'book a visit',
    buttonVariant: 'outlined',
  },
  {
    title: 'Basic',
    subheader: 'Most popular',
    price: '20',
    description: [
      '30 MINUTES',
      'ONE ON ONE CARE',
      'FULL GPS TRACKING',
      'FEEDINGS IF NEEDED',
    ],
    buttonText: 'book a visit',
    buttonVariant: 'contained',
  },
  {
    title: 'Extended',
    price: '30',
    description: [
      '50 MINUTES',
      'ONE ON ONE CARE',
      'FULL GPS TRACKING',
      'FEEDINGS IF NEEDED',
    ],
    buttonText: 'Book a visit',
    buttonVariant: 'outlined',
  },
  
  
];

const footers = [
  {
    title: 'GetPet',
    description: ['Team', 'History', 'Contact us', 'Neighborhoods'],
  },
  {
    title: 'Social',
    description: [
      'Facebook',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={1}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1}}>
            GETPET
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              services
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              pricing
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              contact
            </Link>
          </nav>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{textTransform:'capitalize'}}
        >
          dog walking services
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          I strieve to provide a service that focuses in the wellbeing of the animals I take care of. 
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Basic' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /visit
                    </Typography>
                  </Box>
                  <ul style={{display: 'flex', flexDirection:'column'}}>
                    {tier.description.map((line) => (
                      <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <CheckIcon />
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          key={line}
                          mx={1}
                        >
                          {line}
                        </Typography>
                      </Box>
                      
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}