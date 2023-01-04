import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material'; // more info
// import App from './App';
// import Grid from '../src/grid/Grid';
import PricingPage from './sandbox/PricingPage';
// import Blog from './templates/blog-template/Blog';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      {/* <App /> */}
      {/* <Grid /> */}
      <PricingPage />
      {/* <Blog /> */}
    </StyledEngineProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
