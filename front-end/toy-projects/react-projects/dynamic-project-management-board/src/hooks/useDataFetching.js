import { useState, useEffect } from 'react';

function useDataFetching(dataSource) {
  
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  // generic names instead of tasks setTasks
  const [error, setError] = useState('');
  
  useEffect(() => {
    async function fetchData() {
      try {
        // fetches the REST api
        const data = await fetch(dataSource);
        // 
        const result = await data.json();

        if (result) {
          setData(result);
          setLoading(false);
        }
      } catch (e) {
        setLoading(false); 
        setError(e.message);
      }
    }

    fetchData();
  }, [dataSource]); // if dataSource changes, it triggers a new useEffect function and a re-render

  return [loading, error, data];
}

export default useDataFetching;

