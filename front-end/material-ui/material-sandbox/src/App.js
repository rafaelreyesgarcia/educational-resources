import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


function App() {
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
}

export default App;

/* 
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