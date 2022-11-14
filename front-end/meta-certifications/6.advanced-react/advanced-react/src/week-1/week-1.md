# **week 1**

## **<center>rendering lists</center>**

### **setting up a react project in vs code**

- set local development environment

- run create-react-app npm package without installing it

```cmd
npm init react-app exampleName
```

- build a starter app on local machine
- served the app in the browser

### **transforming lists in javascript with array methods**

**list**  

simple collection of elements, representing an array  
can contain any type of data  
most common is an object  

external service to query a list 

when fetching data from a third party, the data is provided in a format determined by that third party

often that object contains more data than needed
  
map method ignores everything that you don't want displayed and extracts only useful data

in javascript, arrays handle lists of elements (arrays)

javascript offers methods to perform transforming operations on the array

**map()**  

useful for handling third-party data  
returns a new array with manipulated results 

### **rendering a simple list component**

JSX syntax extension

***components are functions***  

when working with lists in JSX, you can return a react component.

the purpose of curly braces is to access the content of the variable that represents a list item.

returing null in a component will render nothing in the app.

***filter()***  

creates a copy of the array, filtering elements based in a condition

***sort()***  
sorting can be done in ascending order or descending order.  

fn(a, b) return value  
\> 0 sort a after b  
< 0 sort a before b   
=== 0 keep original order of a and b  
a - b ascending order  
  
**map()**  
return a `<li>` with `dessert.name` and `dessert.calories`

### **what are keys**  

***diffing algorithm***  
state change
compute diff
re-render
  
***keys***  
identifiers that identify changed added or removed list items
  
keys instruct react about whether a specific elements internal state should be preserved or not.

keys help react determine which items have changed are added or are removed.

keys instruct react how to treat a specific element when an update occurs.

although indexes can be used as keys, this can create problems if the order of a list is prone to change and can negatively affect performance.

 using unique stable identifiers is recommended

## **<center>forms</center>** 

### **controlled components**

DOM logical tree-like structure representing the HTML document

uses nodes to describe parts of the document.

traditional forms keep internal state inside the DOM and have a default behavior when submitting them.

action attribute points to the endpoint that will hanlde the request.

controlled components are functions that can handle the submission of a form and access the data that the user input.

offer a declarative application programming interface (API) to enable control of the state of form elements using react state.

rather than relying on the native state of DOM elements, the react state has full control of the displayed value in form elements.

state delegation is via value prop.

**value**   
special property to determine input content.
  
controlled components use a combination of local state and value prop.

***onChange callback***  
receives an event parameter an event object representing an action

in order to get the new value from every keystroke, access the target property from the event and grab the value from the object (event.target.value).

```jsx
handleChange(event) {
  setValue(event.target.value);
}
```
  
***onSubmit callback***

validate input and prevent default behavior of form submission.

value is a prop is used to perform state delegation.

```jsx
<form onSubmit={handleSubmit}>
</form>

  handleSubmit(event) {
    validate(value);
    event.preventDefault();
  }
```

### ***controlled vs uncontrolled components***

react recommends using controlled components to implement forms

uncontrolled form fields are still valid

***uncontrolled***

```jsx
const Form = () => {
  return (
    <div>
      <input type="text" />
    </div>
  );
};
```

DOM itself maintains internal state.  
their value is extracted using react ref

```jsx
const Form = () => {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    const.inputValue = inputRef.current.value;
  }
  return (
    <form onSubmit={handleSubmit}>
    <input ref={inputRef} type="text" />
    </form>
  );
};
```
  
***controlled inputs***

accept current value as prop.  
callback changes value.  

the value of input has to live in react state.

```jsx
const Form = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value)
  }
}

return (
  <form>
    <input 
      value ={value}
      onChange={handleChange}
      type="text"
    />
  </form>
)
```

this flow pushes value changes to the form component not pull them like when using ref.

the component always has the input's current value.

react state and input tags are always sync 

responding to changes can be done immediately
- instant validation per field
- disabling the submit button unless all requirements are met
- enforcing a specific input format
    
file input type is always uncontrolled  
its value is read-only, can't be set programmatically

how to create a ref to the DOM node to access any files selected in the form submit handler

```jsx
const Form = () => {
  const fileInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const files = fileInput.current.files;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        ref={fileInput}
        type="file"
      />
    </form>
  )
}
```

in traditional forms, calling the root of the server and refreshing the page is default behavior

to prevent submit default behavior you need to return false from onsubmit attribute

in react, the event property

***labels***  
to improve accessibility labels are meant to be linked with inputs.

for is a reserved word in react so htmlFor is used.

### ***create a controlled form component***

two props required when creating a controlled component

**value**  
prop used to hook local state up

**onChange**    
prop used to receive the changes and update state accordingly
  
## **<center>context</center>**

### **what you know about props and state**  

props and state are plain javascript objects.

react uses props and state to hold information.

they have similarities and differences.

both influenced the rendered output.

props get passed to the component.

state is managed within the component.

both represent raw data the html will be injected with.

components always generate the same output given the  same input (props and state, deterministic plain objects).

if a component needs to alter one of its attribute, then the attribute should be part of state.

**props (properties)**  
- component's configuration
- receive from parents in the tree
- immutable from within the component

a component is in charge in putting together child component's props.

**state**     
determines what a component should render.  

its a serializable representation of one point in time.

state is a snapshot.

a component manages its own state internally.

state is private.

state is optional (stateless components).

best practice is to have minimal stateful components to not complicate the app.

**stateless**  
- components only have props, no state
- all logic revolves around props
- easy to follow and test

**stateful**  
- have both props and state
- in charge of client server communication
- processing data
- responding to user events

### **what is context and why is it used?**

data is passed from parents to children via props in a top-down model.

some data might be needed by many components within an app, using props to pass this data is not always effective.

context is an alternative way to pass data to multiple components.

the problem with react props is that in order to reach nested children, you need to pass it down through unnecessary levels acting as proxy, this is prop drilling.

context API solves the prop drilling problem. 

doesn't need to pass down data manually on every level to reach a nested children.

context API is the right tool to share global data that can be consumed by a tree of components.

### **re-rendering with context**  

when a component consumes context and the context value changes, a component re-renders

if a component renders, react will recursively re-render all children regardless of props or context

`React.memo()` addresses this issue

if a component renders the same result given the same props, wrap it in a call to React.memo by memorizing the result.

memoization accelerates performance by caching return values of expensive function calls.

react skips rendering a component if the last rendered result is the same.

memo takes the component definition as first argument.

second argument optional if custom logic should define when to re-render based on previous/current props.

```jsx
const App = () => {
  return (
    <AppContext.Provider>
      <ComponentA />
    </AppContext.Provider>
  );
};

const ComponentA = React.memo(() => <ComponentB />);
const ComponentB = () => <ComponentC />;
const ComponentC = () => null;
```

all consumers that are descendants of a provider will re-render when the provider value prop changes

context consumers should re-render not descendants that are in between a provider and a consumer component

```js
const App = () => {
  const a = "hi";
  const b = "bye";
  const value = useMemo(() => ({a, b}, [a, b]);

  return (
    <AppContext.Provider>
      <ComponentA />
    </AppContextProvider>
  );
};

const ComponentA = React.memo(() => <ComponentB />);
const ComponentB = () => <ComponentC />;
const ComponentC = () => {
  const contextValue = useContext(AppContext);
  return null;
}
```

### **module summary**

render lists in react using the map() method

stable identifiers keys  
indexes are a last resort identifier

controlled components

convert forms to controlled components

props is passed to the component

state is managed within the component

a stateless component is preferred to keep state and logic simple

context API is a fix to prop drilling, viable alternative to local state

  















   



