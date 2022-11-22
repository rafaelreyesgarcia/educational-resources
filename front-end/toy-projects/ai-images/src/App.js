import { Link, Outlet } from 'react-router-dom';

import './App.css';

import AIImages from './AIImages';
import StableDiffusion from './StableDiffusion';

function App() {
  return (
      <>
        <nav>
          <ul className='navbar'>
            <li>
              <Link to="/" className='link'>OpenAI Images</Link>
            </li>
            <li>
              <Link to="/stableDiffusion" className='link'>Lexica.art Stable Diffusion</Link>
            </li>
          </ul>
        </nav>
        <div className='container'>
          <Outlet />
        </div>
        
      </>
  );
}

export default App;