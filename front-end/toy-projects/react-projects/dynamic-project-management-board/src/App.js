
import Board from './pages/Board/Board';
import Header from './components/Header/Header';
import Backlog from './pages/Backlog/Backlog';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import './App.css';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont,
      'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route 
              path='/'
              element={<Board />}
            />
            <Route 
              path='/individual-tasks'
              element={<Backlog />}
            />
          </Routes>
        </BrowserRouter>
      </AppWrapper>
    </>
  );
}

// return without styled components

/* 
return (
  <div className='App'>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route 
          path='/'
          element={<Board />}
        />
        <Route 
          path='/individual-tasks'
          element={<Backlog />}
        />
      </Routes>
    </BrowserRouter>
  
  </div>
);
*/

export default App;