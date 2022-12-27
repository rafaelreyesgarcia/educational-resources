import { useState } from 'react';

// the button once clicked should ask for user's name and then display an alert
// unnecessary use of useState

export default function FeedbackForm() {
  const [name, setName] = useState('');

  function handleClick() {
    setName(prompt('What is your name?'));
    alert(`Hello, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}

// solution
// use a regular variable


function FeedbackForm() {
  function handleClick() {
    const name = prompt('What is your name?');
    alert(`Hello, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}

/* 
state variable is only necessary to keep information between re-renders. 

within a single event handler, a regular variable works fine

don't introduce useState unnecessarily
*/
