# week 3

## **JSX DEEP DIVE**

### **JSX, components and elements**

- how react uses JSX
- components and elements
- react declarative model

**JSX**  
syntax extension to javascript     
react uses JSX to describe UI appearance  
combines both markup and business logic into an entity called component  

JSX tree of components

1. react analyzes rendering methods from components.
2. takes the whole JSX tree, starting from the root creating an intermediary representation.
3. representation is another tree but each node instead of being JSX is a plain object describing a node.
4. an element is a way to represent the final HTML output as a plain object.

JSX
```jsx
const buttonTitle = 'submit';

return (
  <button className="button button-blue">
    <span>
    {buttonTitle}
    </span>
  </button>
);
```

Element (intermediary representation)
```js
{
  type: 'button',
  props: {
    className: 'button button-blue',
    children: {
      type: 'span',
      children: 'submit'
    }
  }
}
```

an element consist of two properties
- type
- props

**type** represents the type of node.  

**props** represent all the properties the component receives in a single object.

**children** elements can be nested via this property.

in a tree structure, both parents and children are just descriptions not actual instances.They don't refer to anything on the screen, they're just objects.

objects are easy to traverse and simpler than DOM elements.

JSX logout component

```jsx
const Logout = () => {
  <div>
    <p>are you sure?</p>
    <submitButton color="blue"> 
    yes
    </SubmitButton>
  </div>
}
```

with the type property react will ask the component what element it renders.

type: DeleteButton  
DeleteButton is a react component, react will identify it as a function and ask the component what element it renders to with given props.

type: "button"  
type: "div"

react repeats this process until it knows all underlying DOM tag elements for every component in the page.

this is the **virtual DOM**. 

1. react takes all JSX and makes a new UI representation (virtual DOM)
2. compares it with the representation kept in memory.
3. it will calculate the difference in a tree, because every node in a tree is a javascript object, the diffing algorithm is performant.
4. based on that difference, it will apply it to the DOM

---

### **component composition with children**

the children prop is a property all components have, is the foundation for react's composition model.

features that enable component composition
- containment
- specialization

**containment**  

refers to the fact that components don't know their children ahead of time. common for sidebars or dialogs

dialog component

```jsx
function Dialog(props) {
  return (
    <div className="modal">
      {props.children}
    </div>
  );
}

function ConfirmationDialog() {
  return (
    <Dialog color="blue">
      <h1 className="dialog__title">thanks!</h1>
      <p className="dialog__message">we'll process your order in less than 24 hours</p>
    </Dialog>
  )
}
```

**specialization**  

defines components as being special cases for other components.

### **types of children**

the content between an opening and closing tag is passed as a prop called children.

several ways to render children  
- string literals
- JSX elements and javascript expressions

some javascript values are ignored as children and don't render anything.

**string literals**

```jsx
<MyComponent> Little Lemon</MyComponent>
```

the children prop is the string little lemon.

**JSX whitespaces and blank lines rules**

1. JSX removes whitespaces at the beginning and end of a line, as well as blank lines
```jsx
<div>    little lemon   </div>
<div>
  little lemon
</div>

```
2. new lines adjacent to tags are removed
```jsx
<div>

  little lemon
</div>
```

3. JSX condenses new lines in the middle of string literals into a single space
```jsx
<div>
  little
  lemon
</div>
```

**JSX elements**

JSX elements can be children to display nested components

```jsx
<Alert>
  <Title />
  <Body />
</Alert>
```

JSX allows mix and match different types of children, string literals and JSX elements

a react component can return a  bunch of elements without wrapping them in an extra tag with the help of ***fragments*** `<> </>` or `<React.Fragment>`

**javascript expressions**

any expression can be passed as children by enclosing it with curly braces `{}`

```jsx
<MyComponent>{'little lemon'}</MyComponent>
```

rendering a list with javascript expressions

```jsx
function Dessert(props) {
  return <li>{props.title}</li>;
}

function List() {
  const desserts = ['tiramisu', 'ice cream', 'cake'];

  return (
    <ul>
      {desserts.map(dessert) => <Item key={dessert} title={dessert} />}
    </ul>
  );
}
```
**functions** 

javascript expressions inside JSX are evaluated by react as strings, react element or a combination of two

the children prop can be used to pass any type of data.

functions as children is a react pattern used to abstract shared functionality

**booleans, null, undefined**

- false
- null
- undefined
- true

are valid children, yet don't render anything.

```jsx
<div />

<div></div>

<div>{false}</div>

<div>{null}</div>

<div>{undefined}</div>

<div>{true}</div>
```

booleans are useful to conditionally render react elements

```jsx
<div>
  {showModal && <Modal />}
</div>
```

react renders false values like the number 0

`{props.desserts.length && <DessertList />`  
an array of 0 elements will still render

to fix this, always make sure that the expression before && is always a boolean

`{props.desserts.length} > 0`    
`{!!props.desserts.length}`  
double exclamation operator converts any object to a boolean

### **manipulating children dynamically**

react APIs that manipulate the render dynamically.

top-level APIs refer to the way you would import those functions from the react package.

**import react as a global object**

```jsx
// top-level import
import react from 'react';

React.cloneElement();
React.children();

//named import
import { cloneElement } from 'react';

cloneElement();
```

**React.cloneElement**

`React.cloneElement(element, [props])`

effectively clones and returns a new copy of a given element

element is the element you would like to clone.

[props] that will be added and merged with the original given element

allows parents to perform  
- modify children properties
- add to children properties
- extend functionality of children components

dynamically add props

```jsx
const buttonElement = () => {
  type: SubmitButton,
  props: {
    color: 'green',
    children: 'Submit!'
  },
};

const output = React.cloneElement(buttonElement, {disabled: false});

```

**React.children**

provide utilites to deal with props.children data structure

`React.Children.map(children.callback)`

runs a callback function for every child contained within its children prop, performing a transofmration and returning a new element

### **spread attributes**

- use the spread operator in objects
- spread native properties to DOM components
- design flexible components

spread operator can be applied to different data types like 
- arrays
- objects
- strings

copy an object

```js
const order = {
  id: 1,
  username: 'rafael reyes',
  item: 'pizza margarita',
  price: '$30.00'
};

const orderCopy = {...order};

const orderAmend = {
  ...order,
  item: 'pizza prosciutto';
};
```

orderList

```jsx
// simple hardcoded props
function OrderList() {
  return (
    <Order 
      id="1"
      username="rafael reyes"
      item="pizza margarita"
      price="$30.00"
    />
  );
}

// storing props in an object

function OrderList() {
  const order = {
    id: 1,
    username: 'rafael reyes',
    item: 'pizza margarita',
    price: '$30.00'
  };
  
  return <Order {...order} />
}
```

### knowledge check: JSX

1. equivalent object representation (element) of a react component

```jsx
// react component

<button className="button-primary">
  <div>
    submit
  </div>
</button>

// react element

{
  type: 'button',
  props {
    className:'button-primary',
    children: {
      type: 'div',
      props: {
        children: 'submit';
      }
    }
  }
}
```

2. component specialization is when a component is defined as a special case of another more generic component. `SubmitButton` is a more specialized version of `Button`

3. cloning a react element by using React.cloneElement
```jsx
// react element
const buttonElement = {
  type: SubmitButton,
  props: {
    color: 'green',
    children: 'submit!'
  }
};

// cloning 
const output = React.cloneElement(buttonElement, {disabled: true, color: 'blue'});

// react clone
{
  type: SubmitButton,
  props {
    color: 'blue',
    children: 'submit!',
    disabled: true
  }
}
```

4. using the spread operator 
```jsx
const props { title: 'tiramisu', cal: 400};
const element = <Component title='cake' {...props} cal={500} />;

//value of element.props
{title: 'tiramisu', cal: 500}
```

5. all will not render anything on the screeen

```jsx
<div>{false}</div>
<div>{(() => true)()}</div>
<div>{undefined}</div>
<div>{null}</div>
```

## **REUSING BEHAVIOR**

## **INTEGRATION TESTING**