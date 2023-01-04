import * as React from 'react';
import Box from '@mui/material/Box';

export default function GridTemplateAreas() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateAreas: `'header header header header'
        'main main main sidebar'
        'footer footer footer footer'`,
        gridTemplateRows: '25vh 25vh 25vh 25vh'
      }}
    >
      <Box sx={{bgcolor: 'primary.main', gridArea: 'header'}}>navigation</Box>
      <Box sx={{bgcolor: 'success.light', gridArea: 'main'}}>main</Box>
      <Box sx={{bgcolor: 'warning.light', gridArea: 'sidebar'}}>sidebar</Box>
      <Box sx={{bgcolor: 'error.main', gridArea: 'footer'}}>footer</Box>
    </Box>
  );
}