import React from "react";

function App() {
  const [toggle, setToggle] = React.useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  }

  React.useEffect(() => {
    console.log(`the value of the toggle variable is ${toggle}`);
  }, [toggle]); // the dependency array stops the effect to be invoked more than once


  return (
    <div>
      <h1>using the useEffect hook</h1>
      <button onClick={clickHandler}>
        toggle message
      </button>
      {toggle && <h2>hello!</h2>}
    </div>
  )
}

export default App;