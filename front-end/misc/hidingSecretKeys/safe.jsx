import React,{useState, useEffect } from 'react';

/* 
create .env file at the root of the project

API key should be added to .env file

create-react-app reads keys that begin with REACT_APP 

defines them on process.env

CRA (create-react-app) embeds the keys at build time

restart the development server if it's running

adding secret key to .env doesn't prevent key from being public in production.

one way to solve this is to make app request data through a backend (node + express)

avoid storing API keys on frontend

*/


const API_KEY = process.env.REACT_APP_API_KEY  
const API_URL = `https://newsapi.org/v2/everything?q=usa&apiKey=${API_KEY}`

function App(){
  
  const [newsList, setNewsList] = useState([]);
  
  useEffect(() => {
    getNews();
  }, []);
   
 const getNews = () => {
    fetch(API_URL)
      .then(response => response.json())    
      .then(data => setNewsList([...data]));
  };
 
  return (
    <div>
      { newsList.map( item => <p key={Math.random()}>{item.headline.title}</p> )}
    </div>
  );
}