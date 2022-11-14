import "./App.css";


function App() {
  return (
    <div>
      <form>
        <fieldset>
          <div>
            <label for="name">name:</label>
            <input type="text" placeholder="your name here" name="name" />
          </div>
          <button type="submit">submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
