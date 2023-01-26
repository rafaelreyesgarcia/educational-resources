import { useState } from 'react';

export default function MyComponent() {
  const [counter, setCounter] = useState(0);
  {/*

  everytime MyComponent renders, when state changes,
  a different MyTextField is created,
  so a different component in the same position would reset state of the nested component.

*/}

  function MyTextField() {
    const [text, setText] = useState('');

    return (
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
    );
  }

  return (
    <>
      <MyTextField />
      <button onClick={() => {
        setCounter(counter + 1)
      }}>Clicked {counter} times</button>
    </>
  );
}