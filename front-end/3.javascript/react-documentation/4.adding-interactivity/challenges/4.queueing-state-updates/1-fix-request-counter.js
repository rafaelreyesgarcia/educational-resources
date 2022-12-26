import { useState } from 'react';

/* 
challenge

art marketplace app lets user submit multiple orders at the same time
each time the user presses BUY the pending counter should increase by one

after 3 seconds, pending should decrease and completed counter should increase


*/

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  // problem
  /*
  async function handleClick() {
    setPending(pending + 1);
    await delay(3000);
    setPending(pending - 1);
    setCompleted(completed + 1);
  }
  */
  
  // solution
  async function handleClick() {
    setPending(pending => pending +1);
    await delay(3000);
    setPending(pending => pending - 1);
    setCompleted(completed => completed + 1);
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy     
      </button>
    </>
  );
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
