# week 2

## **react hooks**

### **revising useState hook**
 
**array destructuring**  

```js
let veggies = [parsley, onion, carrot];
const [v1, v2, v3] = veggies;
```

**object destructuring**  

have to destructure a property using the exact name as the name of the destructured variable.

object destructuring is more strict.

```js
let hasVeggies = {
  carrots: true,
  lettuce: true,
  raddish: false
};

const {carrots, lettuce, raddish} = hasVeggies;
```

- the useState hook's return value is the array data structure.
- the useStatehook allows to work with state components.
- invoking this hook returns a two-member array.
- when using the useState hook, the state-updating function should be used to update state.

### **working with complex data in useState**

bad practice, updating the object holding the initial state

state objects have more than one property so its costly to update the entire update just to update one property.

```jsx
// bad practice
import { useState } from 'react';

export default function App() {
  const [greeting, setGreeting] = useState({ greet: "hello!"});

  function updateGreeting() {
    setGreeting( {greet: "hello world!"});
  }

  return (
    <div>
      <h1>{greeting.greet}</h1>
      <button onclick={updateGreeting}>
      update greeting
      </button>
    </div>
  );
}
```

you can't reassign a variable declared using const, so updating greeting would not be possible directly.

changing a property value through dot notation doesn't update the value passed to a component

the only best practice to working with a state object is copying the state object and updating the copy, usually with the spread operator (shallow copy)

```jsx
import { useState } from 'react';

export default function App() {
  const [greeting, setGreeting] = useState({greeting: 'initial greeting'});

  function updateGreeting() {
    const newGreeting = {...greeting};
    newGreeting.greet = 'updated greeting';
    setGreeting(newGreeting);
  }

  return (
    <div>
      <h1>{greeting.greet}</h1>
      <button onClick={updateGreeting}>
      update greeting
      </button>
    </div>
  );
}
```

updating a single property of a state object with multiple properties

```jsx
const [greeting, setGreeting] = useState(
  {
    greet: "Hello",
    place: "world"
  }
);

function updateGreeting() {
  setGreeting(prevState => {
    return {...prevState, place: "updated greeting"}
  });
}
```






