import {useState, useEffect} from 'react';

const API_URL = `https://newsapi.org/v2/everything?q=usa&apiKey=
OW09823D03ASE48F34RUNF83`; // <- API_KEY inlined in the url

function App(){   

  const [newsList, setNewsList] = useState([]);    
    
  useEffect(() => {          
    getNews(); 
  }, []); 

  const getNews = () => {      
    fetch(API_URL)          
      .then(response => response.json())              
      .then(data => setNewsList([...data]))
    ;} 

  return (  
   <div>    
      { newsList.map( item => <p key={Math.random()}>{item.headline.title}</p>)} 
   </div>)
}

export default App;