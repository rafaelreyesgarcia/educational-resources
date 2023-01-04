import * as React from 'react';
import {Box, Paper} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function GridTemplateAreas() {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} md={5} lg={4}>
        <Item>Navigation</Item>
      </Grid>
      <Grid container xs={12} md={7} lg={8} spacing={4}>
        <Grid xs={8} lg={3}>
          <Item>
            <Box
              id="category-a"
              sx={{ fontSize: '12px', textTransform: 'uppercase' }}
            >
              Main
            </Box>
            <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
              <article>1</article>
              <article>2</article>
              <article>3</article>
            </Box>
          </Item>
        </Grid>
        <Grid xs={4} lg={3}>
          <Item>
            <Box
              id="category-b"
              sx={{ fontSize: '12px', textTransform: 'uppercase' }}
            >
              sidebar
            </Box>
            <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2, display:'flex', flexDirection: 'column' }}>
              <button>ad</button>
              <button>ad</button>
              <button>ad</button>
            </Box>
          </Item>
        </Grid>
      </Grid>
      <Grid
        xs={12}
        container
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: 'column', sm: 'row' }}
        sx={{ fontSize: '12px' }}
      >
        <Grid sx={{ order: { xs: 2, sm: 1 } }}>
          <Item>© Copyright</Item>
        </Grid>
        <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
          <Grid>
            <Item>Link A</Item>
          </Grid>
          <Grid>
            <Item>Link B</Item>
          </Grid>
          <Grid>
            <Item>Link C</Item>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}