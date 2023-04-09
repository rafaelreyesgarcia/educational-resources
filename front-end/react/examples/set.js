import React from "react";

function App() {
  const items = ["apple", "banana", "orange", "banana", "peach", "apple"];
  const uniqueItems = [...new Set(items)];

  const mySet = new Set([1, 2, 3, 4, 5]);
  const filteredArray = Array.from(mySet).filter(num => num % 2 !== 0);

  return (
    <div>
      <h1>Unique Items:</h1>
      <ul>
        {uniqueItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
