# Beta React Docs

## **INSTALLATION**

start a new react project
    
react is a library to organize UI code by separating it into components.

react doesn't take care of routing or data management

builds a single-page, client-side application.

different ways to start a react project

### **1. HTML file and script tag**

### **2. Minimal Toolchain**

install node.js and NPM 

```sh
npx create-react-app my-app
cd my-app
npm start
```

this approach doesn't handle backend logic or databases

it can be used with any backend

initializes folder with static HTML, CSS, JS

> create-react-app can't handle the server, doesn't provide best performance

minimal toolchain alternatives
- Vite
- Parcel

### **3. opinionated framework** 
      
start with opinionated framework that has common features (data fetching, routing)

great for faster loading times and built-in features (routing, server-side logic)

**full-featured framework**

- **next.js**  
lightweight for static and server-rendered applications built with react.  
prepackaged with features like routing, styling and server-side rendering .
        
**alternatives**
- gatsby
- remix
- razzle
        
### **4. custom toolchains**

components of a toolchain

**package manager** 
installs updates and manages third-party packates

- npm
- yarn
- pnpm

**compiler (transpiler?)**
compiles modern language features, syntax like JSX or type annotations for browsers

- babel
- typescript
- swc

**bundler**
lets you bundle multiple files (modular code) into small packages to optimizie load time

- webpack
- parcel
- esbuild
- swc
          
**minifier**
makes code more compact so it loads faster
            
- terser
- swc

**server**
handles server requests so that you can render components to HTML

- express.js

**linter**
checks code for common mistakes

**test runner**
run tests against code

- jest

manage multiple packages in a single repository
- nx
- turborepo
  
### **add react to a website**

**1. add root HTML tag**

\<div> element to render react components

needs id attribute set
    
is where the react tree starts

placed inside anywhere the \<body>

is left empty so react renders the components dynamically

multiple root components are allowed on one page

**2. add script tags**

before the closing body \<script>

`react.development.js` lets you define react components

`react.production.min.js` when deploying to a live website

`react-dom.development.js` lets react render HTML elements to the DOM
react-dom-production.min.js

`component.js` where the react component will be created

**3. minify javascript for production**

unminified code can slow down page load times for users

before deploying, its best practice to minify the scripts

reason why deploying HTML documents that loads React.production.min.js and react-dom.production.min.js are performant and fast
      
**setting up a minifier**
```sh
        npm init -y
        npm install terser

npx terser -c -m -o like-button.min.js -- like-button.js
# produces minified code in the same directory
```

**JSX syntax**

javascript
```js
return React.createElement('button', {onClick: () => setLiked(true)}, 'like');
```
JSX
```jsx
return <button onClick={() => setLiked(true)}>Like</button>;
```
    
**4. add JSX to a project**

install a jsx preprocessor: babel

```sh
npm init -y 

# this initializes node package manager(npm) to keep track of all dependencies for the project

npm install babel-cli@6 babel-preset-react-app@3

# babel client installation, JSX preprocessor and react babel preset
```
**5. run the JSX preprocessor**

every time a file is saved, the transform will convert jsx into js

create folder called src

```sh
npx babel --watch src --out-dir . --presets react-app/prod
# starts an automated watched for edits to JSX in src, the watcher creates a preprocessed js file with plain js
```

babel is a JSX preprocessor (compiler) and also creates polyfills for modern javascript syntax for older browsers
  
**react without JSX**

- using `htm`  
uses javascript template strings instead of a compiler

- use `React.createElement()` 
has a special structure

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(React.createElement(component, props, ...children));
```
***component*** 
can be a string representing HTL element or a function component
      
***object***
of any props you want to pass

***children***
children components (text strings or other elements)
      
a shorthand can be assigned for `React.createElement` 

```js
const e = React.createElement;
root.render(e('div', null, 'hello world'));
```

### **editor setup**

**vscode**

alternatives
- webstorm
- sublime text
- vim
    
**linting**

ESlint config for react

ESLint extension for vs code
    
**prettier**

cleans up code reformatting it to conform to preset configurable rules

tab conversion to spaces, indentation, quotes

vscode extesion

formatting on save

- CTRL + SHIFT + P
- settings
- format on save option ticked

### **react developer tools**

- inspect react components
- edit props and state
- identify performance problems
      
**browser extension**

for safari, other browsers and react native

```sh
# install react-devtools npm package
npm install -g react-devtools

# open developer tools from terminal
react-devtools
```

add tag to the beginning of the website's head

`<script src="http://localhost:8097"></script>`
    
## **QUICK START**

### **create and nest components**

a component is a piece of UI (user interface) that has its own logic and appearance

react components are javascript functions that return markup

```jsx
function MyButton() {
  return <button>I'm a button</button>
}
```
after declaring MyButton, you can nest it into another component

```js
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton/>
    </div>
  )
}
```
components start with a capital letter, HTML tags start with a lower case

export default keywords specify the main component in the file

**JSX syntax**

stricter than HTML
- empty tags must be closed
`<br/>`
- component can't return multiple JSX tags, they have to wrap into a shared parent `<div>` or an empty wrapper (fragment) `<></>`
    
### **add style to components**

className works the same way as HTML class attribute

`<img className="avatar">`

then a separate CSS file to write the rules
```css
    .avatar {
      border-radius: 50%;
    }
```

### **displaying data**

curly braces can escape back into javascript to embed a variable to display value to user

```jsx
return (
  <h1>
    {user.name}
  </h1>
);
```

escape into javascript from JSX attributes curly braces are used instead of quotes

```jsx
return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);
```

### **conditional rendering**

same techniques with regular javascript

ternary operator works inside JSX

when the else branch is not needed, shorter logicall && syntax can be used
  
### **rendering lists**

relies on for loops array .map() function to render list of components

`<li>` will have a key attribute

map will transform the contents of an array, objects, and will pass a string or number found in the key id usually coming from a database

### **responding to events**

respond to events by declaring event handler functions inside components

you don't need to call the event handler function, it only needs to be passed down

react will call the event handler when the user clicks the button
  
### **updating the screen**

you need to add state to a component to remember information and display it

```js
import {useState} from 'react';
```

useState adds
- `count`
current state
- `setCount`
function that lets you update current state
      
can be named anything but best practice is something, setSomething
    
> rendering a stateful component multiple times will set a custom state to each

### **using hooks**

functions with a prefixed name use--- are called hooks

`useState` is a built-in hook provided by react

you can also write custom hooks by combining existing ones

hooks are more restrictive than regular functions

can only call hooks at the top level of a component or other hooks.
  
### **sharing data between components (lifting state up)**

often is needed to share data and update components together

we need to move state from child components upwards to the closest parent component

updating a parent component should update child components

parent component contains state and event handler declaration

passes both of them down as props to each children component

update the children function to pass the props from the parent component


### **building a searchable product data table (thinking in react)**

JSON API and a mockup from a designer

API fetches an array of objects (products)

the mockup wants to display a table with the products, mark the ones out of stock and provide a filter so the user can filter them if needed

**1. break UI into component hierarchy**

- programming  
single responsability principle  
a component should ideally only do one thing  
- CSS  
how to split components based on the selectors you'll use  
- design  
considering how to organize the design layers
      
if JSON is well structured, it will naturally map to the component structure of the UI

UI and data models often have the same information architecture

**breaking the UI of a filterable product table**

- **filterableProductTable**
contains the whole app
- **SearchBar**
receives user input
- **ProductTable**
displays and filters the list according to the user input
- **ProductCategoryRow**
displays heading for each category
- **ProductRow**
displays a row for each product
        
**2. build static version in react**

build a static version by building components that reuse other components and pass data as props

props is an object used to pass data from parent to child

**one-way data flow**
data flows from top-level component to the ones at the bottom of the tree

**3. state**
changes the underlying data model making the UI component interactive

DRY principle is important for structuring state

think if the pieces of data are state

does it remain unchanged overtime? **no**  
passed in from parent via props? **no**  
compute data based on existing state or props in a component? **yes!**  

**props vs state**

props
- are arguments you pass to a function
- let a parent component pass data to a child component 

state 
- is like a component's memory
-  lets the component keep track of some information and change it in response to interactions
    
**4. identify where state should live**

after identifying minimal state data

react uses one-way data flow 

it may not be immediately clear which component should own what state

often state can be put directly into a common parent component

state can also be put into a component above the common parent

you can create a component solely to hold the state of multiple children components

identify components that use state

find common parent

decide where the state lives

add state to the component with useState() hook

Hooks allow to hook into a component's render cycle

**5. add inverse data flow**

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

### **importing/exporting components**

export component into its own file then import component from another file

import Profile from './Profile.js';
  
### **markup with JSX**

each react component is a js function that can contain markup that react renders into the browser

jsx syntax represents a hybrid markup/javascript syntax

jsx similar to xtm 

jsx lets you write xtm-like markup inside javascript

javascript logic can use curly braces to evaluate logic inside for dynamic properties

react components use props to communicate with each other

parents pass information with props

any value can be passed ( objects, arrays, functions, jsx)

### **conditional rendering**

display different data depending on conditions

js syntax if statements, && and ? : operators
  
### **rendering a list**

js filter() and map() can filter and transform an array of data into an array of components

for each array item, a key is needed

an ID from the database can be used as key

key's keep track of each item's place in the list

### **keeping components pure**

it doesn't change any objects or variables that existed before it was called

same inputs same output

### **first component**

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
  
### **importing and exporting components**

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
### **writing JSX**

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
  
### **javascript in JSX with curly braces**

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

### **passing props to a component**

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

### **conditional rendering**

conditional renders in JSX are implemented using `if` statements `&&` and `? :` operators.


## **ADDING INTERACTIVITY**
## **MANAGING STATE**
## **ESCAPE HATCHES**
