import React from 'react';

function App() {
  const formInputRef = React.useRef(null);

  const focusInput = () => {
    formInputRef.current.focus();
  }

  return (
    <>
      <h1>using useRef to access underlying DOM</h1>
      <input ref={formInputRef} type="text"/>
      <button onClick={focusInput}>
        focus on input
      </button>
    </>
  );
}

export default App;
