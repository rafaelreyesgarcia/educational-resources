import './App.css';
import React from 'react';


function GoalForm(props) {
  const [formData, setFormData] = React.useState(
    {
      goal: '',
      by: ''
    }
    // state object with multiple properties as initial values
  );

  function changeHandler(e) {
    setFormData(
      {
        ...formData,
        [e.target.name]: e.target.value
      }
    );
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData(
      {
        goal: '',
        by: ''
      }
    );
  }

  return (
    <>
      <h1>my little lemon goals</h1>
      <form onSubmit={submitHandler}>
        <input 
        type="text"
        name="goal"
        placeholder="goal"
        value={formData.goal}
        onChange={changeHandler}
        />
        <input 
        type="text"
        name="by"
        placeholder="by..."
        value={formData.by}
        onChange={changeHandler}
        />
        <button>submit goal</button>
      </form>
    </>
  )


}

function ListOfGoals(props) {
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li>
          <span>my goal is to {g.goal}, by {g.by}</span>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [allGoals, updateAllGoals] = React.useState([]);

  function addGoal(goal) {updateAllGoals([...allGoals, goal])};

  return (
    <div>
      <GoalForm onAdd={addGoal}/>
      <ListOfGoals allGoals={allGoals}/>
    </div>
  )
}

export default App;
