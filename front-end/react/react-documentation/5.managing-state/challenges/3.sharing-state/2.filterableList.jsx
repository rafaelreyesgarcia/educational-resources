import { useState } from 'react';
import { foods, filterItems } from './2.data'

// PARENT
export default function FilterableList() {
  // adding state to the parent
  const [query, setQuery] = useState('');
  // filter foods by user's query
  const results = filterItems(foods, query);

  // sets the query value
  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar
        query={query}
        onChange={handleChange}
      />
      <hr />
      <List items={results} />
    </>
  );
}

// child component uses shared query state value and onChange passed as props.
function SearchBar({ query, onChange }) {
  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={onChange}
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}