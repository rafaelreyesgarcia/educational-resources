import "./App.css";
import {useEffect, useState} from 'react';

const DataFetcher = ({render, url}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes('desserts')) {
      setData(['cake', 'ice cream', 'pie', 'brownie']);
    } else {
      setData(['water', 'soda', 'juice']);
    }
  }, []);

  return render(data);
};

const DessertsCount = () => {
  return (
    <DataFetcher 
      url="https://littlelemon/desserts"
      render={(data) => <p>{data.length} desserts</p>}
    />
  );
};

const DrinksCount = () => {
  return (
    <DataFetcher 
      url="https://littlelemon/drinks"
      render={(data) => <h3>{data.length} drinks</h3>}
    />
  );
};

function App() {
  return (
    <div>
      <header className="Header">little lemon restaurant </header>
      <DessertsCount />
      <DrinksCount />
    </div>
  );
}

export default App;
