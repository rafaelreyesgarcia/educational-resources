import "./App.css";
import {Link, Outlet} from 'react-router-dom';


function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/week1">Week 1</Link>
          </li>
          <li>
            <Link to="/week2">Week 2</Link>
          </li>
          <li>
            <Link to="/week3">Week 3</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default App;
