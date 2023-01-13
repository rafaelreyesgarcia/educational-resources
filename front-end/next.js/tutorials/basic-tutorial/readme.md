# overview

## building blocks of a web application

- user interface (users consuming and interacting)
- routing (navigation to different parts of application)
- data fetching (where data lives and how is accessed)
- rendering (static or dynamic content rendering)
- integrations (CMS, authorization, payments)
- infrastructure (deploy, store and  run the app)
- performance (optimizations)
- scalability (adaptability to growing demand)
- developer experience (building and maintaining)

**react** javascript library for building interactive user interfaces

**next.js** framework that addresses building blocks of web applications.

handle tooling and configuration for react.

additional features improving on building blocks of web apps.

# from javascript to react

## rendering UI

- user visits web page
- server returns HTML file
- browser parses it constructing the DOM and displays it

## DOM

DOM object representation of HTML elements.

tree structure with parent and child relationships connecting business logic with user interface.

DOM methods and javascript can 'listen' to events and manipulate the DOM according to triggered code.

DOM methods select, add, update and delete elements from the DOM.

source HTML document represents initial page content state

DOM represents updated page content changed by arbitrary javascript.

> updating node elements with javascript is too verbose.

## imperative and declarative programming

describing **what** (declarative) to do instead of writing **how** to do a task (imperative).

react is declarative.

traditional javascript is imperative.

## react

unpkg.com loads the *react* core library and *reac-dom* that enables using the library with the DOM.

### jsx 

syntax expression to describe UI in HTML like syntax.

- can only return a single root
- close all tags
- camelCase naming

a javascript compiler (babel) transforms jsx to regular javascript

### components

building blocks of reusable code.

allow to build composable larger structures.

easier to maintain code as the update can be isolated to a component level instead of app level.

**component** is a function that returns UI elements.

- the return statement of a component can hold JSX.
- should be capitalized to differentiate html and js.
- are used wrapping them in HTML tags.
- can nest other components.

nesting components deep creates component trees.

### props

regular HTML elements use attributes to pass information to them.

`src`, `href`

react component properties (props) behave like regular html attributes.

> data flows down the component tree (one-way data flow from parent to children)

children components accept props passed from parent components as their function parameters.

props is an object, with properties attached to it defined in the parent.

destructuring works in props to name values of props.

`{}` curly braces allow to write javascript expressions inside JSX.

```jsx
// regular javascript function
function Header(props) {
  return <h1>{props.title}</h1>;
}
// destructuring the argument and using a template literal
function Header({ title }) {
  return <h1>{`cool ${title}`}</h1>;
}

// using the returned value of a function

function createTitle(title) {
  if (title) {
    return title;
  } else {
    return 'Default title';
  }
}

function Header({title}) {
  return <h1>{createTitle(title)}</h1>;
}

// ternary operator

function Header({ title }) {
  return <h1>{title ? title : 'Default Title'}</h1>;
}
```
react is unopinionated for data fetching.

arrays can represent data in the most simple way

iterating through an array to generate a list is a common task in react.

each array element should have a unique id to properly identify it. 

> If the array gets manipulated and elements change order, not having an id becomes an issue.

### state

adding event listeners to components 

```jsx
<button onclick={handleClick}></button>
<input onChange={handleChange}/>
<form onSubmit={handleSubmit}></form>
```

event names are camelCased in react unlike native html events.

a function event handler has to be defined inside the component that attaches event listeners in their return statements.

**hooks** are react functions that allow to add logic to components such as **state**.

**state** is information in the UI mostly changing over time due to user interaction.

```jsx
function HomePage() {
  React.useState(); //returns an array

  const [state, setState] = React.useState(arg); // array destructuring

  const [likes, setLikes] = React.useState(0);
}
```
first item in the returned array from invoking the `useState` hook is the state `value`

the second item is the function to update the value.

adding an initial state value can be done by passing it as an argument to the hook invocation.

state is initiated and stored within a component. 

> you can pass state information to children components as props but state logic is kept within the component where it was initialized.

props is read-only information passed to components.

state is information that can changed due to user interactions.

next.js allows to transform the UI into a fully functional scalable application.
