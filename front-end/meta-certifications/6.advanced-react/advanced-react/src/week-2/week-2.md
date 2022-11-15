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

### **managing state within a component**

valid useState hook invocation and destructuring

```jsx
const [car, setCar] = useState({color: 'blue', mileage: 0})
```

updating a single property of a state object

```jsx
const [person, setPerson] = useState({ name:'rafael', age:29})

setPerson(prev => { ...prev, age:22 });
```

### **what are side effects?**

side effects within a react component.

pure and impure functions

useEffect is used to produce side effects within functional components.

a side effect is something that makes a function impure

**pure functions**  
should receive specific input

```jsx
function EstablishedYear(props) {
  return <h1>Established Year: {props.year}</h1>
}

function App() {
  return <EstablishedYear year={2003} />
}

export default App;
```

**impure functions**  
performs a side effect  
invokes browser APIs (console, fetch, etc)

```jsx
function ShoppingCart(props) {
  const total = props.count * props.price;
  console.log(total);
  return <h1> Total: {total} </h1>
}

export default function App() {
  return (
    <ShoppingCart items={5} pricePerItem={10} />
  );
}
```

the trick is to contain impure functions inside their own special areas. (useEffect)

**useEffect example**   

```jsx
import { useEffect } from 'react';

function ShoppingCart(props) {
  const total = props.count * props.price;

  /* 
  use effect has two parameters

  callback function
  common to use an arrow function

  array
  the array can be kept valid
  */

  useEffect(function () {
    console.log(total);
  }, []);

  // useEffect(() => console.log(total), []);

  return <h1>total: {total}</h1>
}
```

### **useEffect hook**

useEffect always runs after the component is mounted (react has updated the DOM).

passing an array as a second argument to the useEffect function, is a way to instruct react to skip applying an effect

```jsx
useEffect(() => {
  document.title = `little lemon, v${version}`;
}, [version]); // only re-run the effect if version changes
```

**multiple effects to separate concerns**

group related logic together in the same effect.

break up unrelated logic into different effects.

```jsx
function MenuPage(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = `little lemon`;
  }, []);

  useEffect(() => {
    fetch(`https://littlelemon/menu/${id}`)
      .then(response => response.json())
      .then(json => setData(json));
  }, [props.id]);
}
```

**effects with cleanup**

some side effects may need to cleanup resources or memory that is not required anymore to avoid memory leaks.

```jsx
function LittleLemonChat(props) {
  const [status, chatStatus] = useState('offline');

  useEffect(() => {
    LemonChat.subscribeToMessages(props.chatId, () => setStatus('online'))

    return () => {
      setStatus('offline');
      LemonChat.unsubscribeFromMessages(props.chatId);
    };
  }, []);
}

```

returning a functiion is optional

### **knowledge check - hooks basics**

1. all side effects should be inside the useEffect hook.

2. the useEffect hook accepts a callback function and an array.

3. a pure react component doesn't have any side effects.

4. the second argument of useEffect is the dependency array

5. 
```js
React.useEffect(() => {
  console.log('the value of the toggle variable is :');
}, [toggle]);
```

## **rules of hooks**

only call hooks 
1. from a react component function
2. at the top level outside of loops, conditionals and nested functions

3. you're allowed to call multiple state or effect hooks inside a component.

4. make multiple hook calls in the same sequence

pick up a new name for a pet
```jsx
import { useState } from 'react';

function App() {
  const [petName, setPetName] = useState('fluffy');

  function nameLooper() {
    if (petName === 'fluffy') {
      setPetName('rexy');
    } else if (petName ==='rexy') {
      setPetName('gizmo');
    } else if (petName === 'gizmo') {
      setPateName('flluffy');
    }
  }

  return (
    <div>
      <h1>I'm thinking to name my pet {petName}</h1>
      <button onClick={nameLooper}>
      pick a new name
      </button>
    </div>
  )
}
```

only use hooks at top level, don't do this: 

```js
if (data !== '') {
  useEffect( () => {
    setData('test data');
  });
}
```

### **what you need to know before fetching data**

overview of how javascript delegates duties

`fetch` is used to make a server request to retrieve some JSON data from it

the fetch API is a set of functionalities to make server requests.

javascript execution is single-threaded, it cannot do two tasks at the same time.

**asyncrhonous javascript**  
delegation of duties, splitting up a task that will take unknown amount of time

fetch function is known as a facade function

its a function that looks like its part of javascript but is just an interface to a browser functionality (API)

when javascript uses the fetch function it is delegating duties to an external API so that it continue its process. 

this is known as asynchronous javascript

### **data fetching using hooks**

fetching data from a third-party API is considered a side-effect that requires the use of the useEffect hook

fetching third-party data might fail or be delayed so conditional rendering can be useful depending on if the data has been received or not.

component fetching data from an external API to display information about a cryptocurrency

```jsx
import { useState, useEffect } from 'react';

export default function App() {
  const [btcData, setBtcData] = useState({});

  /* 
  alternative to declare the anonymous function as a separate expression or declaration and then just reference it

  const fetchData = () => {
    fetch(...)
      .then(...)
      .then(...)
      .catch(...);
  };

  useEffect(() => {
    fetchData();
  }, []);
  */

  useEffect(() => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((response) => response.json())
      .then((jsonData) => setBtcData(jsonData.bpi.USD))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>current BTC/USD data</h1>
      <p>Code: {btcData.code}</p>
      <p>Symbol: {btcData.symbol}</p>
      <p>Rate: {btcData.rate}</p>
      <p>Description: {btcData.description}</p>
      <p>Rate Float: {btcData.rate_float}</p>
    </>
  );

  // conditional rendering
  /* 
  return someStateVariable.length > 0 ? (
    <div>
      <h1>Data returned:</h1>
      <h2>{someStateVariable.results[0].price}</h2>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
  */
}
```

### **self review: fetching data**

1. when invoking the `fetch()` function you should pass it a URL
2. after invoking the fetch, you need to add a call to then() after invooking fetch()
3. correct way of handling a fetch call 
```js
then( response => response.json());
```

### knowledge check: rules of hooks and fetching data 

1. you should not call hooks inside loops.
2. you should not call hooks inside if statements.
3. you should not call hooks inside nested functions.
4. you are allowed to call multiple state and effect hooks inside a component
5. you always need to call multiple hooks in the same sequence. Always make multiple hook calls in the same sequence.

## **advanced hooks**

### **useReducer hook**

useState hook has limitations
- complex logic involving multiple sub-values
- next state depends on the previous one

useState begins with an initial state

useReducer begins with initial state and reducer function

### **when to choose useReducer vs useState**

useState accepts any kind of data structure but is better to use it with primitive data types

useReducer is best used on complex data structures like arrays or objects

simple objects can still be used with useState

there's a spectrum between raw primitives and complex data structures so there's no defined specific threshold when to use one or the other.

useState gets more hard to maintain as the state gets more complex.

useReducer requires more prep work to begin with

### **useRef to access underlying DOM**

coding the cursor to focus on a search input element

the returned value from the useRef hook invocation is an object.

useRef hook hooks into the DOM

### **custom hooks**

you can write your own react hooks

hooks give you a repeatable, streamlined way to deal with requirements.

a custom hook is simply a way to extract a piece of reusable functionality.

### **self review: create own custom hooks**

1. custom hooks are useful to avoid duplication
2. custom hook should use at least one built-in react hook

### **popular external libraries**

**chakra UI**

provide pre-built components to create applications.

simple, modular accesible component library that provides components for react applications.

different components by category

**layout**  
set virtual delimiters for content.  
manage how children are laid out (rows, columns).  
***HStak and VStack*** 
display children using flex properties  
***box***      
allows to create a box with background color, border, shadow, etc  

**typography**  
***heading***  
renders a DOM header tag  
takes a size prop that allows to set the size of the heading  
```jsx
<Heading as='h2' size='2x1'>
  little lemon
</Heading>
```
***text***  
offers a fontSize prop and renders text within an interface

```jsx
<Text fontSize='lg>best restaurant in town</Text>
```
- **forms**
- **data display**
- **feedback**

**style props**  

style props provide css directives as props to different components

camelCase versions of css styles are valid style props.

bg is shorthand for backgroundColor

full example:

```jsx
/* 
3 boxes stacked in a row
vertical space of 16px between boxes
each box has a height of 40px
*/
<HStack spacing='16px'>
  <Box h='40px' bg='yellow.200'>1</Box>
  <Box h='40px' bg='tomato'>2</Box>
  <Box h='40px' bg='pink.100'>3</Box>
</HStack>
```

**formik and yup**  

***formik*** is an open-source library to create forms in react.

library manages state, validation and submission of the form.

comes with built-in support for schema based form-level validation.

useFormik hook handles state of a form

needs a configuration object as argument

***yup*** is a javascript library to validate form data before submitting to sever.

***useFormik hook***  

```jsx
import * as Yup from 'yup';
import { useFormik } from 'formik';

const {
  values,
  errors,
  touched,
getFieldProps,
handleSubmit,
} = useFormik({
intialValues: {
    comment: "",
  },
onSubmit: (values) => {
    // Handle form submission
  },
validationSchema: Yup.object({
    comment: Yup.string().required("Required"),
  }),
});
```

useFormik takes an object as argument with following properties

- **initialValues** an object with the initial values of the form fields.
- **onSubmit** function that will be called when the form is submitted, form values become its arguments.
- **validationSchema** Yup schema to validate the fields.

hook returns an object with following properties
- **values** object with current values of fields.
- **errors** object with current errors of the fields.
- **touched** object with current touched state of the fields
- **handleSubmit** function to be called when submitting the form.
- **getFieldProps** function takes a field name as arguments and returns an object with
  - **name**
  field name.
  - **value**
  current value of the field.
  - **onChange**
  handleChange function
  - **onBlur**
  funcgtion that will be called when the field is blurred.

### **knowledge check: advanced hooks**

1. the useReducer second argument is a reducer function that takes the previous state and an action and returns the new state.
2. useReducer hook is better suited for complex state logic.
3. useRef common use is to focus the cursor into an input field.
4. building your own hooks lets you extract component logic into reusable functions.
5. useState hook gives us a reliable way to deal with state updates in react components.

### **module summary: reack and custom hooks**

useSate()    
array destructuring    
declare read and use state  
side effects   
useEffect()  
controlled with dependency array (determines when the useEffect hook will be invoked)  
rules of hooks in react  
- call hooks from a react component function
- call hooks at the top level of a react component
- possible to call multiple state or effect hooks inside a - component
- multiple hook calls in the same sequence

fetch API    
asynchronous javascript    
fetching data with state and effect hooks  
useRef that access underlying DOM elements  
custom hooks  
useReducer  

### **module quiz: react hooks and custo hooks**

1. array destructuring is a way to get individual items from an array and save those as separate variables. (components)
2. array destructuring, free to give any variable name to items, but object destructuring, variable name needs to be the same as property name.
3. useEffect hook is a way to handle a side effect.
4. using an if statement inside a top level useEffect is valid.
5. run a fetch API would need useEffect to handle this side effect of making a server request.
6. useState starts with an initial state but useReducer gets a reducer function in addition to initial state.
7. useRef is a built-in hook
8. javascript is a single-threaded language.
9. custom hook example
```js
import { useEffect } from 'react';

function useConsoleLog(varName) {
  useEffect(() => {
    console.log(varName);
  });
}

export default useConsoleLog;
```













