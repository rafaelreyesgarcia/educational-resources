import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import profile from './profile.jpg';

export default function CenteredElementGrid() {
  return (
    <Box>
      <Grid container spacing={2} mingHeight={160}>
        <Grid xs display='flex' justifyContent='center' alignItems='center'>
          <Avatar src={profile}/>
        </Grid>
        <Grid display='flex' justifyContent='center' alignItems='center'>
          <Avatar src='/images/profile.jpg'/>
        </Grid>
        <Grid xs display='flex' justifyContent='center' alignItems='center'>
          <Avatar src='/images/profile3.jpg'/>
        </Grid>
      </Grid>
    </Box>
  )
}