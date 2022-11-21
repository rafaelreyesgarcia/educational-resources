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

### **cross-cutting concerns in react**

generic business logic not related to a certain app can be reused when its needed.

- permission roles
- handling errors 
- logging

cross-cutting concerns deals with this generic business logic.

components are not always suitable for this kind of logic.

live orders list

```jsx
function LiveOrdersList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const handleNewOrders = () => {
      const newOrders = Data.Source.getOrders();
      setOrders(newOrders);
    }
    DataSource.addListener(handleNewOrders)

    return () => {
      DataSource.removeListener(handleNewOrders);
    };
  }, []);

  return <LiveOrders orders={orders} />
}

```

newsletter list

```jsx
function NewsletterList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const handleNewUsers = () => {
      const newUsers = DataSource.getSubscribers();
      setUsers(newUsers)
    }
    
    DataSource.addListener(handleNewUsers);
    
    return () => {
      Data.Source.removeListener(handleNewUsers);
    };
  }, []);

  return <UserList users={users} />
}
```

suscribing to data source and setting local state with new data is an ocurring pattern.

**high-order components**  

`const EnhancedComponent = higherOrderComponent(WrappedComponent);`

function that takes a component and returns a new component.

a component transforms props into UI

a higher-order component transforms a component into another component, enhances and extends capabilities of the given component.

**HOC implementation**

```jsx
const withSubscription = (WrappedComponent, selectData) => {
  return (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const handleChange = () => {
        const newData = selectData(DataSource, props);
        setData(newData)
      }

      DataSource.addListener(handleChange)

      return () => {
        DataSource.removeListener(handleChange)
      };
    }, []);

    return <WrappedComponent data={data} {...props} />
  }
}
```

benefits of using HOC in a solution

- define logic in a single place, share it across components and keep them unchanged and stateless.

- enhances or extends capabilities of the given component.

**HOC usage**

```jsx
const LiveOrdersListWithSubscription = withSubscription(
  LiveOrders,
  () => DataSource.getOrders()
);

const UsersSubscribeWithSubscription = withSubscription(
  UserList,
  () => DataSource.getSubscribers()
);
```

### **higher-order components**

**don't mutate the original component**

turn the HOC into a pure function that doesn't alter the argument it receives and always return a new component

```jsx
const HOC = (WrappedComponent) => {
  // this would mutate the original component
  WrappedComponent = () => {

  };
}
```

**should pass unrelated props through to the wrapped component**

HOCs should spread and pass through all the props unrelated to their concern.

```jsx
const withMousePosition = (WrappedComponent) => {
  const injectedProp = {mousePosition: {x: 10, y:10}};

  return (originalProps) => {
    return <WrappedComponent injectedProp={injectedProp} {...originalProps} />;
  };
};
```

**maximize composability**

sometimes HOCs can accept additional arguments that act as extra configuration determining type of enhancement

```jsx
const EnhancedComponent = HOC(WrappedComponent, config)

```

> HOCs use **currying**, a functional programming pattern to maximize function composition

```jsx
const EnhancedComponent = connect(selector, actions)(WrappedComponent);

const HOC = connect(selector, actions);
const EhancedComponent = HOC(WrappedComponent);

// connect is a function that returns a HOC 
```

functions whose output type is the same as its input type `Component => Component` are easy to compose

```jsx
const enhance = compose(
  withMousePosition,
  withURULLocation,
  connect(selector)
);

const EnhancedComponent = enhance(WrappedComponent);
```

**caveats**

- don't use HOCS inside other components, this forces React to remount it instead of just updating it, the comonent and its children would lose their previous state.

- refs aren't passed through.  
refs are not props.  
React.forwardRef can solve the issue where the ref refers to an instance of the outermost container component, not the wrapped component.

### **render props**

powerful technique to reuse common code.

use a prop called render with an attribute its a function

take functions that return react elements and call them inside their render logic

```jsx
<MealProvider render={data => {
  <p>Ingredients: {data.ingredients}</p>
}}>
```

the new props are injected dynamicallyas the new parameter of the function

### self-review: render props and HOCs

1. `return render({mousePosition});`
2. 
```jsx
return ( 
  <MousePosition 
    render={({mousePosition}) => (
      <p>
        ({mousePosition.x}, {mousePosition.y})
      </p>
    )}
  />
);
```
3. the app component shouldn't be altered.

### knowledge check: reusing behavior

1. cross-cutting data in react applications are difficult to address using a custom hook because:
- you would have to alter the implementation of each component that needs the specific data.
- turns a stateless component into a stateful one/

2. not valid signature that doesn't follow the convention of HOCs
`withSubscription(() => getData(), Component)`

3. best practices when implementing HOCs
- passed unrelated props through to the Wrapped Component.
- maximize composability.

4. differences between HOCs and render props
- they inject new props in the component to be enhanced in a different way
- render props provide the new data as a function parameter.
- HOcs get the new data as a new prop.

5. a component with a render prop as renderer can do anything a HOC can do


## **INTEGRATION TESTING**

### **why react testing library**

manual testing is time consuming, tedious and error prone as the app grows in complexity.

- testing importance
- testing best practices
- introduction to jest and react testing library
- example of component testing

**testing importance**  
- involves discovering bugs or errors before deploying an app.
- ensures software quality
- saves time and money

**testing best practices**  
- avoid including implementation details
- test should work with real DOM nodes.
- resemble software usage
- maintainability 

**jest**  
- javascript test runner
- lets you access an artificial DOM called JSDOM 
- jest provides good iteration speed 
- provide mocking modules

mocking refers to an imitation.  
enables you to replace complex functions with other simpler ones that simulate the same behavior.  
mocking can be used to make sure unit testing is standalone.

**react testing library**  
set of utilities that fulfils testing best practices without relying on component implementation details

**App.test.js**  

import both render and screen from react testing library

render function is used to render the component to test and perform assertions against.

react testing library exports the screen object, a reference to document.body, it has every query prebound to it.

**test global function**  

text description is first argument

second argument is a function to compose all the steps a test needs to go through

**test steps**

1. render app component in artificial DOM environment

```jsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('render react App component in artificial DOM', () => {
  render(<App />);
});
```

2. screen object is used to create a query against document.body. `getByText` utility asks the document body tag if it can find an element inside with a string called little lemon restaurant. if there isn't one, it returns null.

```jsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('render react App component, query element containing little lemon restaurant string', () => {
  render(<App />);
  const linkElement = screen.getByText(/little lemon restaurant/i);
});
```

3. perform an assertion with global expect function asking whether the link element from the query above is present in the document `toBeInTheDocument`.  

built in utility that jest incorporates globally without needing an explicit export.

expect function receives result of a query and appends specific matcher.

the matcher refers to an element visible in the whole document.

```jsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('full test, to assert if a component containing little lemon restaurant string is present in the document.body', () => {
  render(<App />);
  const linkElement = screen.getByText(/little lemon restaurant/i);
  expect(linkElement).toBeInTheDocument();
});
```
### **self-review: writing more test scenarios**

1. what's the correct call to fire an onChange event on an input with react testing library fireEvent API?

```jsx
fireEvent.change(input, {target: {value: 'myValue'}});
```

2. how would you fire a click event on a submit button with react testing library fire event API?

```jsx
fireEvent.click(button);
```

3. when locating an element by using a screen querying method from react testing library, what is the returned value of the call if the element is not found?  
`null`

### **introduction to continuous integration**

**introduction** 

CI continuous integration is a software development technique

developers use version control system like git to push code changes daily multiple times a day.

instead of building features in isolation and integrating them at the end, CI follows a more iterative approach.

each merge triggers an automated set of scripts to automatically build and test your application.

script automation ensures to minimize error introduction

if some scripts fail the CI system stops further stages and issues a report

**why CI is important**

taking smaller steps helps estimate and validate more often

shorter feedback loops involve more iterations.

number of iterations drives the process forward

working with long feedback loops increases the chances of introducing errors

automating continuous integration steps avoid repetitive work and minimize human errors

CI tools monitor central code repository and prevents people from deciding when and how to run tests.

**CI pipeline**

continuous delivery  
developer writes code pushes to code repository

continuous integration  
app build process  
tests (code analysis, unit tests, integration tests, security scanning)

**development workflow**

1. developer creates a new branch in github performs changes in the code and commits them.
2. developer pushes work to github, CI system builds the code on its servers and runs automated test suite.
3. if CI system detects error, developer who pushed code gets notified and the status changes to red. That same developer is responsible to fix the problem.
4. if status is green and all is well pipeline moves to its next stage, deploying a new version of the application to a staging server. this version can be used by quality assurance (QA) team to verify changes in production-like environment.

**benefits of continous integration**

- improved developer productivity
manual tasks are automated  

- deliver working software more often  
CI feedback loop delivers more value to customers 

- find bugs earlier and fix them faster  
verifies code correctness  
validates application behavior  
makes sure coding style follows conventions  

### **style guides**

- code is much more easier to read and debug
- make sure code is self-documenting

### knowledge check: automated testing

1. why is automated testing important
- It offers a faster feedback cycle, bringing faster validation and helping the development team to detect problems or bugs early.
- It saves time to development teams.
- It reduces human error.

2. What are some of the best practices when writing your automated tests? Select all that apply
- They should resemble the way your software is used.
- They should be maintainable in the long run.

3. Imagine you have a component that renders both an input tag and a label tag with the exact text Comments:. Inside your test, you have the below piece of code:

```jsx
const element = screen.getByLabelText(/Comments:/);
```
- the input element

4. What kind of data would the handleSubmit variable represent?

```jsx
const handleSubmit = jest.fn();
render(<FeedbackForm onSubmit={handleSubmit} />);
```
- A mock function to track how is called by external code and thus explore the arguments passed in.

5. What are some of the benefits of Continuous Integration (CI)? Select all that apply.
- Deliver working software more often.
- Improved developer productivity.
- Find bugs earlier and fix them faster.

### **module summary**

- JSX in depth

- difference between components (functions) and elements (plain javascript objects)

- component composition and the use of children props

- containment (components that don't know their children beforehand) and specialization (define components as special cases), two main properties of component composition

- React.cloneElement (clones and returns a new element) and React.Children.map (manipulates children)

- spread operator in react enables copying and merging

- cross-cutting concerns refers to generic functionality that is not related to the application business logic. react components are not always suitable for generic functionality

- cross-cutting higher-order component (enables abstraction)

- cross-cutting technique render props (special prop with a particular attribute of being a function that returns a react element)

### **module quiz: JSX and testing**

1. What are some of the features of component containment? 
- A component that uses the children prop to pass children elements directly as their content.
- The fact that some components don’t know their children ahead of time. 
- A component that acts as a generic box. 

2. What are the props that all components have by default?
- children

3. What is a React Element? 
- A JavaScript object that represents the final HTML output.
- An intermediary representation that describes a component instance. 

4. what are all the features implemented from component composition with children?

```jsx
function ConfirmationDialog() {
  return (
    <Dialog color="blue">
      <h1 className="Dialog-title">
        Thanks!
      </h1>
      <p className="Dialog-message">
        We’ll process your order in less than 24 hours.
      </p>
    </Dialog>
  );
}
```

- component specialization and containment

5. What are some of the use cases that the React.cloneElement API allows you to achieve?
- Modify children's properties. 
- Add to children properties. 
- Extend the functionality of children components. 

6. what’s wrong about its implementation?

```jsx
const Row = ({ children, spacing }) => {
  const childStyle = {
    marginLeft: `${spacing}px`,
  };

  return(
    <div className="Row">
      {React.Children.map(children, (child, index) => {
        child.props.style = {
          ...child.props.style,
          ...(index > 0 ? childStyle : {}),
        };
        
        return child;
      })}
    </div>
  );
};
```
- Each child is being mutated. 

7. what would be logged into the console when clicking the Submit button that gets rendered on the screen?

```jsx
const Button = ({ children, ...rest }) => (
  <button onClick={() => console.log("ButtonClick")} {...rest}>
    {children}
  </button>
);

const withClick = (Component) => {
  const handleClick = () => {
    console.log("WithClick");
  };

  return (props) => {
    return <Component onClick={handleClick} {...props} />;
  };
};

const MyButton = withClick(Button);

export default function App() {
  return <MyButton onClick={() => console.log("AppClick")}>Submit</MyButton>;
}
```

- "AppClick"

8. what are valid solutions to encapsulate cross-cutting concerns?
- Higher order components. 
- Render props pattern. 
- custom hooks??

9. What does the screen utility object from react-testing-library represent when performing queries against it?
- whole page or root document

10. When writing tests with Jest and react-testing-library, what matcher would you have to use to assert that a button is disabled?
- toHaveAttribute

