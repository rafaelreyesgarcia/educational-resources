## **DESCRIBING THE UI**

user interfaces are built for small units
- buttons
- text
- images

```jsx
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt ="Katherine Johnson"      
    />
  );
}


export default function Gallery() {
  return (
    <section>
      <h1>amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  )
}
```

## **importing/exporting components**

export component into its own file then import component from another file

import Profile from './Profile.js';
  
## **markup with JSX**

each react component is a js function that can contain markup that react renders into the browser

jsx syntax represents a hybrid markup/javascript syntax

jsx similar to xtm 

jsx lets you write xtm-like markup inside javascript

javascript logic can use curly braces to evaluate logic inside for dynamic properties

react components use props to communicate with each other

parents pass information with props

any value can be passed ( objects, arrays, functions, jsx)

## **conditional rendering**

display different data depending on conditions

js syntax if statements, && and ? : operators
  
## **rendering a list**

js filter() and map() can filter and transform an array of data into an array of components

for each array item, a key is needed

an ID from the database can be used as key

key's keep track of each item's place in the list

## **keeping components pure**

it doesn't change any objects or variables that existed before it was called

same inputs same output

## **first component**

components are the foundation upon to build user interfaces

react combines markup, css and javascript into custom components, reusable UI elements for an app

as design grows, many designs can be composed by reusing components

**steps to build a component**

- export the component  
export default marks the main function in a file

- define the function
```js 
function Profile() {}
```

- add markup  
jsx syntax

> components can render other components, but you must never nest their definitions

```jsx
export default function Gallery() {
  function Profile() {}
}
```
  
## **importing and exporting components**

root component file
`App.js`
    
to export components out of the root component file

- make a new js file for the component
- export function component from that file, default or named export
- import default or named
    
a file can have one default export but many numerous named exports

```js
export default function Button() {}
import Button from './button.js';

export function Button() {}
import { button } from './button.js';
```  
## **writing JSX**

logic increasingly determines content

- structure is held in HTML
- design is held in CSS
- logic is held in JS

JSX allows to combine js and html to logically determine the structure and styles of a website

rendering logic and markup together ensures they stay sync with each other

**rules**

- must return a single root element  
to return multiple elements, wrap them with a single parent tag, either `<div>` or `<>`

- fragments `<>` let you group elements without leaving any trace in the browser HTML tree

- JSX requires all tags to be explicitly closed

- camelCase most of names
      
- attributes in JSX become keys of javascript objects
  
## **javascript in JSX with curly braces**

curly braces open a window to javascript in a way

passing strings with quotes  
with single or double quotes

dynamically specifying attributes  
{avatar}
    
valid curly braces use
- as text directly inside a JSX tag
- as attributes immediately after = sign
    
objects can be passed in JSX  
objects are denoted with curly braces  
double curly braces denote passing a js object in JSX

## **passing props to a component**

components use props to communicate with each other.

parent component can pass props (information) to children

you can pass any javascript value through props including
- objects
- arrays
- functions

**familiar props**

props are information that you pass to a JSX tag.

```jsx
// passing props to an <img>
return (
  <img 
    className="avatar"
    src="https://link.com/avatar"
    alt="lin lanying"
    width={100}
    height={100}
  />
);
```
props you can pass to an image are predefined (ReactDOM conforms to HTML standards)

props to your own components are allows to be custom

**1. parent component**
```jsx
export default function Profile() {
  return (
    <Avatar 
      person={{name: 'lin lanying', imageId: '1bx5QH6'}}
      size={100}
    />
    <Avatar 
      person={{
        name: 'Aklilu Lemma',
        imageId: 'OKS67lh',
      }}
      size={70}
    />
  )
}
```
**2. child component**
```jsx
import { getImageUrl } from './utils.js';

function Avatar({person, size}) {
  return (
    <img 
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}
```

props are like adjustable knobs.

serve the same role as arguments in functions

props object is the only valid argument to components.

```jsx
// destructuring the props object
function Avatar({person, size}){
  // code
}

function Avatar(props) {
  let person = props.person;
  let size = props.size;
}

// default values

function Avatar({person, size = 100}){
  // code
}

// repetitive props 
function Profile({person, size, isSepia, thickBorder}) {
  retunr (
    <div>
      <Avatar 
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}

// spread syntax
function Profile(props) {
  return (
    <div>
      <Avatar {...props} />
    </div>
  )
}
```

**passing JSX as children**

```jsx

// built-in browser tag nesting is common
function Card({children}) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function Avatar({person, size}) {
  return (
    <img 
      src={getImageURl(person)}
      width={size}
    />
  )
}

function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com' +
    person.imageId +
    size +
    '.jpg'
  );
}
// nesting components
export default function Profile() {
  return (
    <Card>
      <Avatar 
        size={100}
        person={{
          name: 'katsuko saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  )
}


```

when content is nested inside a JSX tag, the parent component will receive the nested content in a prop called children.

children prop will often be used for visual wrappers: panels, grids, etc.

```jsx
export default function Clock({color, time}) {
  return (
    <h1 style={{ color: color }}>
      {time}
    </h1>
  );
}
```

props are immutable.

when a component needs to change its props, it has to ask the parent to pass different props.

old props gets cast aside

javascript will garbage collect them eventually

## **conditional rendering**

conditional renders in JSX are implemented using `if` statements `&&` and `? :` operators.

a `PackingList` component renders several `Item` components that can be marked as packed or not.

```jsx
function Item({name, isPacked}) {
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's packing list</h1>
      <ul>
        <Item 
          isPacked={true}
          name="space suit"
        />
        <Item 
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        <Item 
          isPacked={false}
          name="photo of tam"
        />
      </ul>
    </section>
  )
}
```

add a checkmark to packed items if `isPacked={true}` using al if/else statement.

```jsx
function Item({name, isPacked}) {
  if (isPacked) {
    return <li className="item">{name} ✔<li/>;
  } 
  return <li className="item">{name}</li>;
}

```

in React, control flow is handled by javascript.

**conditionally returning nothing with null**

a component must return something, but if the intent is to not render, it can return `null`

```jsx
if (isPacked) {
  return null;
}
return <li className="item">{name}</li>
```

in practice returning null isn't common.

**conditionally including JSX**

the render output is very similar

```jsx
<li className="item">{name} ✔</li> // if
<li className="item">{name}</li> // else
```

both conditional branches return `<li className="item">variable</li>

**optimizing code to be more DRY with the ternarny operator**

```jsx
// instead of 
if (isPacked) {
  return <li className="item">{name} ✔</li>
} 
<li className="item">{name}</li>

// conditional expression
return (
  <li className="item">
    {isPacked ? name + '✔' : name};
  </li>
)
```

JSX elements aren't instances because they don't hold any internal state and aren't real DOM nodes, they are lightweight descriptions of DOM nodes.

nesting JSX elements in a conditional expression can be done using parentheses and newlines.

```jsx
function Item({name, isPakced}) {
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name + '✔'}
        </del>
      ) : (
        name
      )}
    </li>
  )
}
```

the component can get messy with too much nesting so at that point best practice is to extract child components to break down functionality.

**logical AND**

logical AND operator is useful when rendering some JSX when a condition evaluates to true or render nothing otherwise

```jsx
return (
  <li className="item">
    {name} {isPacked && '✔'}
  </li>
);
```

*if `isPacked`, then render, otherwise render nothing*

a logical and expression returns the value of its right side if the left side condition evaluates to true, if the condition is false, the expression becomes false. React considers `false` as `null` and `undefined` so nothing renders.

**pitfall with &&**

numbers on the condition. 

javascript converts left side to a boolean automatically.

if the condition is 0, the whole expression will render 0 rather than nothing.

`messageCount && <p>new messages</p>` it will render 0 if `messageCount` is 0 instead of rendering nothing.

**conditionally assigning JSX to a variable**

using if statements and variables

default content to display

```jsx
let itemContent = name;

if (isPacked) {
  itemContent = name + '✔';
}

<li className="item">
  {itemContent}
</li>

function Item({name, isPacked}) {
  let itemContent = name;
  if (isPacked) {
    itemContent = name + '✔';
  }
  return (
    <li className="item">
      {itemContent}
    </li>
  );
}

// or

function Item({name, isPacked}) {
  let itemContent = name;
  if (isPacked) {
    itemContent = (
      <del>
        {name + '✔';}
      </del>
    );
  }
  return (
    <li className="item">
      {itemContent}
    </li>
  );
}
```

## rendering lists

displaying multiple similar components from a collection of data is common.

array methods are useful `filter`, `map`, `reduce`, etc

a list of content
```html
<ul>
  <li>Creola Katherine Johnson: mathematician</li>
  <li>Mario José Molina-Pasquel Henríquez: chemist</li>
  <li>Mohammad Abdus Salam: physicist</li>
  <li>Percy Lavon Julian: chemist</li>
  <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
</ul>
```

this pattern uses multiple instances of the same component using different data each time.

lists can be of
- comments
- galleries
- profile images

for lists, data can be stored in objects and arrays and use array javascript methods to render lists.

```js
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

// map members (elements) into a new array of JSX nodes listItems

const listItems = people.map(person => <li>{person}</li>);

// return listItems from a component wrapped in <ul>

return <ul>{listItems}</ul>

// final result
export default function List() {
  const listItems = people.map(person =>
    <li>{person}</li>
  );
  return <ul>{listItems}</ul>;
}
```

> each child in a list should have a unique 'key' prop

structuring data even more

```jsx
/*export*/const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];
```

we can then use javascript `filter` method to return certain items (people of a specific profession)

```jsx
// create a new array of just chemist people
const chemists = people.filter(person => person.profession === 'chemist');

// map over chemists

const JSXItems = chemists.map(person => 
  <li>
    <img 
      src={getImageUrl(person)}
      alt={person.name}
    />
    <p>
      <b>{person.name}:</b>
      {' ' + person.profession + ' '}
      known for {person.accomplishment}
    </p>
  </li>
);

return <ul>{JSXItems}</ul>

export function getImageUrl(person) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}
```

**pitfal**

arrow functions implicitly return the expression afer `=>` so a `return` statement is optional

> you must write an explicit `return` statement if `=>` is followed by a `{}`

arrow functions containing curly braces have a *block body* 

```js
const listItems = chemists.map(person =>
  <li>...</li> // Implicit return!
);

const listItems = chemists.map(person => { // Curly brace
  return <li>...</li>;
});
```

**keeping list items in order with key**

each array item should have a `key` string or number that uniquely identifies it among other items.

```jsx
<li key={person.id}>...</li>
```

> JSX elements directly inside a map() call always need keys

keys tell react which item represents which component

if the array item can move due to sorting, gets popped or pushed, in other words, the source array mutates, a `key` helps react infer what happened and make the correct updates to the DOM tree.

include keys in data instead of generating them at execution

```jsx
export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}
```

what if each item needs to render several DOM nodes?

the fragment syntax `<>...</>` won't let pass a key so they need to be grouped into a single `div` or use the explicit `<Fragment>` syntax

```jsx
import { Fragment } from 'react';

// ...
const listItems = people.map(person =>
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
);
```

> fragments disappear from the DOM

different sources of data provide different sources of keys.

- data from a database comes with database keys/IDs
- locally generated an incrementing counter can be used `crypto.randomUID()` or a package like `uuid` can be used.

rules of keys
- must be unique among siblings. Its ok to use the same key for nodes in different arrays.
- keys must not change (don't generate them while rendering)

**importance of keys**

data need identifiers. if we identify data just with ordering numbers, once data is deleted or added, the order changes. Order is not immutable. a key needs to be immutable.

an identifier provides unique information about data more than just information about its position in a data structure like an array.

**pitfall**

indices as keys lead to confusing bugs.

generating keys on the fly `key={Math.random()}` isn't recommended.

keys won't match between renders, leading to components and DOM being recreated every time. This is slow and will also lose user input inside the list item.

component won't receive `key` as prop.

if the component needs an ID a separate prop is needed

```jsx
<Profile key={id} userId={id} />
```

## keeping components pure

some functions are pure, only perform calculation and nothing more.

strictly writing components as pure functions can avoid bugs significantly.

**purity components as formulas**

pure function requirements
- doesn't change any objects or variables that existed before invoked
- given the same inputs, always return the same result (deterministic)

```js
function double(number) {
  return 2 * number;
}
```

react is designed based on the concept of pure components.

```jsx
function Recipe({ drinkers }) {
  return (
    <ol>    
      <li>Boil {drinkers} cups of water.</li>
      <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

export default function App() {
  return (
    <section>
      <h1>Spiced Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={2} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />
    </section>
  );
}
```

**side effects**

(un)intended consequences

react's rendering process must always be pure.

components should only return JSX and not change any objects or variables that existed before rendering

```js
// impure
let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}

// guest can be passed as prop instead
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}
```

three kind of inputs that you can read while rendering
- props
- state
- context

`setState` is used when the intention is to change something in response to user input.

React `StrictMode` calls each component's function twice during development to find components that break purity rules

**local mutation**

pure functions don't mutate variables outside of the function's scope

is fine to change variables and objects created while rendering not before invoking a function.

```jsx
// valid 
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaGathering() {
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}
```

side effects belong inside event handlers

event handlers run when you perform some action.

event handlers are defined inside a component, they don't run during rendering, they don't need to be pure.

if you can't find the right event handler for your side effect, you can still attach it to the returned JSX by invoking `useEffect`. This allows react to execute after rendering when side effects are allowed. Should be last resort.

> best practice is to express logic with rendering alone.

benefits of functional programming
- components can run in a different environment by being deterministic
- improve performance bby skipping rendering components whose inputs haven't changed.
- if data changes in the middle of rendering a deep tree, react can restart rendering without wasting time to finish the outdated render.
- purity makes it safe to stop calculating at any given time.

