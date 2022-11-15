import { useReducer } from "react";

// reducer function takes previous state and an action, and returns new state
// the action.type determines the action of the reducer
// actions can have any form
const reducer = (state, action) => {
  if (action.type === 'buy_ingredients') return {money: state.money - 10};
  if (action.type === 'sell_a_meal') return {money: state.money + 10};
  if (action.type === 'celebrity_visit') return {money: state.money + 5000};
  return state;
}

function App() {
  const initializeState = {money: 100};
  // instead of using setState, useReducer uses dispatch method
  // the dispatch method accepts an object literal with a single property called type
  // the type matches an action.type defined inside the reducer function
  const [state, dispatch] = useReducer(reducer, initializeState);

  return (
    <div>
      <h1>Wallet: {state.money}</h1>
      <div>
        <button 
          onClick={() => dispatch({type: 'buy_ingredients'})}
        >
          shopping for veggies!
        </button>
        <button
          onClick={() => dispatch({type: 'sell_a_meal'})}
        >
          serve a meal to the customer
        </button>
        <button
          onClick={() => dispatch({type: 'celebrity_visit'})}
        >
          celebrity visit!
        </button>
      </div>
    </div>
  );
}

export default App;
