import "./App.css";
import { useState } from 'react'; 


function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log("form submitted!");
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
            <label htmlFor="name">name:</label>
            <input 
              id="name"
              type="text" 
              placeholder="your name here" 
              name="name" 
              value={name} 
              onChange={e => setName(e.target.value)}
            />
          </div>
          <button disabled={!name} type="submit">
            submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
