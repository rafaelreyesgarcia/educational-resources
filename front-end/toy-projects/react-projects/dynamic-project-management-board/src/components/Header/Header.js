import './Header.css'
import {Link as RouterLink} from 'react-router-dom';

function Header() {
  return (
    <div className="Header-wrapper">
      <h1>Frontend Developer Roadmap</h1>
      <nav>
        <RouterLink 
          to='/'
          className='App-link'
        >
          Board
        </RouterLink>
        <RouterLink
          to='/individual-tasks'
          className='App-link'
        >
          backlog
        </RouterLink>
      </nav>
    </div>
  )
}

export default Header;