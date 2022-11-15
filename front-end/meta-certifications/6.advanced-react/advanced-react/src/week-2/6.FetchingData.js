import React from 'react';

function App() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch('https://randomuser.me/api/?results=1')
      .then(response => response.json())
      .then(data => setUser(data));
  };

  /* 
  fetchData is initially fetching data from the API
  retrieves a response from the API in JSON format
  updates the state variable with the returned data
  */

  React.useEffect(() => {
    fetchData();
  }, []);

  /* 
  conditional logic to render different outputs based on the response from fetch
  Object.keys(user) puts all keys of the user object into an array
  if the length of this array is greater than 0 it means that the contents of the state array have changed

  on the first render, if the API is slow, the false condition might be triggered in the ternary operator render
  once the API returns a response and the state object is changed, this causes a re-render and then the true condition will render
  */
 
  return Object.keys(user).length > 0 ? (
    <div>
      <h1>data returned</h1>
      <h2>first name: {user.results[0].name.first}</h2>
      <h2>last name: {user.results[0].name.last}</h2>
    </div>
  ) : (
    <h1>data pending...</h1>
  );
}

export default App;