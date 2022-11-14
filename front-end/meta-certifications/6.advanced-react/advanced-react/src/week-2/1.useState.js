import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [restaurantName, setRestaurantName] = useState('lemon');
  
  function updateRestaurantName() {
    setRestaurantName('little lemon');
  };

  return (
    <div>
      <h1>{restaurantName}</h1>
      <button onClick={updateRestaurantName}>
        update restaurant name
      </button>
    </div>
  )
}

export default App;
