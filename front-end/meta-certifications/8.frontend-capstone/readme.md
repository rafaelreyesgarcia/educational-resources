# week 1

## knowledge check: setting up the project

1. Which of the following command allows you to quickly create a React project?

create-react-app app-name

2. Before pushing your changes to a Git repository, you need to commit the changes first.
**true**

3. Which of the following commands sends the local change to a remote git repository like GitHub?
`git push`

4. What is the purpose of using this ES7+ React/Redux/GraphQL/React-Native extension in VS Code?

It provides quick JavaScript snippets to help you code faster in your React and GraphQL-based projects.

5. In a project, which directory contains all the dependencies?
`node_modules`

## planning the UX and UI

planning
- user objectives
- project purpose

design
- structures and sketching
- approval and testing

development
- coding
- programming

iterative process
- implement
- test
- improve

## knowledge check: planning the UX and UI

1. UX is an iterative process that solves usability problems
**true**

2. What is a wireframe in UX design?

It's representation of the interface concerned with placement and hierarchy of content and functionalities.

3. Which of the following statements about designing forms are true?

- Time and care should be taken to design forms well, as how are you meant to persuade your visitors to take the time to give you their personal information without a straightforward, approachable and appealing form? Forms also represent the brand, so a poorly designed form can frustrate potential customers.

- Forms are an important part of user experience, which is why time and effort should be spent on designing good forms from the user's perspective.

4. Which of the following is true about responsive design?

- Responsive design is a design approach that ensures a website or app looks good on all devices, regardless of screen size or resolution.

- Responsive design is a technique that automatically scales and rearranges the layout of a website or app to fit the screen size and resolution of the device it is being viewed on.

5. 12 column grids are commonly used in desktop designs.

This allows for a high level of flexibility in terms of layout and design, as designers can use different combinations of columns to create a wide range of layouts.

# week 2

##  styling elements

late 1990's table-based layouts

early 2000's floats (removing an element off of document flow)

2010's flexbox layouts

late 2010's grid layout

## knowledge check : styling and responsiveness

1. What is the fr unit in CSS grid?

A flexible length unit that grows or shrinks based on the available space in the grid. It is used to specify the size of grid tracks (rows or columns) in a grid layout. The fr unit is a proportional unit, meaning that it takes up a fraction of the available space based on the value assigned to it

2. Choose the correct explanation for how the CSS code below works

```css
@media (max-width: 700px) {
  .grid-adjustable-columns {
    display: grid;
    grid-auto-flow: row;
  }
}

@media (min-width: 701px) {
  .grid-adjustable-columns {
    width: min(1000px,75rem);
    margin: 0 auto;
    grid-auto-flow: column;
    gap: 1em;
  }
}
```

On small resolutions it stacks the grid items in a column and on large resolutions it lines them up in a single row.

3. Which of the following statements about CSS Grid is true?

CSS Grid is a layout system that allows developers to create grid-based layouts using rows and columns.

4. In CSS Grid, horizontal tracks are also known as:

Rows

5. CSS Grid layout automatically adjusts the size of grid tracks.

**false**

While CSS Grid can be a powerful tool for creating responsive layouts, it is not the only way to create responsive web designs. Responsive web design can also be achieved using other techniques such as media queries, flexible layout patterns and responsive images.

## knowledge check: adding components

1. valid react code

```jsx
<>
  <h1>...</h1>
  <p>...</p>
</>
```

**true**

This is called fragment. A React fragment allows you to group a list of children without adding extra nodes to the DOM.

2. In React, you can only have one root element in a component.

**false**
In React, you can have multiple root elements in a component as long as they are wrapped in a single parent element.

3. Which of the following statements are true about JSX?

- JSX allows you to use JavaScript functions as attributes
- JSX elements can have multiple children.
- JSX allows you to include expressions in your code.

4. What is the output of the following JSX code block?

```jsx
const myList = ['apple', 'banana', 'orange'];

const listItems = myList.map((item) =>

  <li key={item}>{item}</li>

);

return (

  <ul>{listItems}</ul>

);
```

```html
<ul><li>apple</li><li>banana</li><li>orange</li></ul>
```

5. Which of the following is true about props in React?

Props should be used for values that will not change within a component.

## module quiz: project foundations

1. What is the advantage of using the `<nav>` tag over a `<div>` tag?

The `<nav>` tag is a semantic HTML element that is specifically designed to represent a section of a page that contains navigation links. Using the `<nav>` tag helps to improve the semantics of your HTML and make your code more understandable to both humans and machines.

2. What are the benefits of semantic HTML?

Search engines use the structure and content of a website to understand its relevance and quality. Using semantic HTML elements can help search engines to better understand the content of a page and improve its ranking in search results.

Using semantic HTML elements helps to make the code more meaningful and easier to read and understand, both for humans and for machines. This can make it easier to maintain and update the code over time.

Using semantic HTML elements helps to improve the accessibility of a website or application by providing additional context and meaning to the content. This can make it easier for screen readers and other assistive technologies to understand and navigate the page.

3. Choose the correct Open Graph value for the name attribute in the code below:

```html
<meta name="" content="https://meta.com/logo.png"/>
```
`og:image`

4. Which of the following are valid values for the CSS display property? Select all that apply
- flex
- grid

5. Which of the following CSS selectors is an example of an adjacent sibling selector?

`div + p`

6. When should you use the pseudo-class selectors?

You want to select elements based on their state

7. Which of the following relative units would be appropriate to use when the dimensions of the viewport (web page area that the user is viewing) are important? Chooseall that apply.

- vw
- vh

8. HTML event attributes are lowercased; React event attributes are camelCased
**true**

9. What is prop in a react component?

In React, props (short for properties) are a way to pass data from a parent component to a child component. Props are a way for the parent component to communicate with and pass data to the child component, which can then use the data to render its content.

10. The following is a valid JSX code:

`<span>{10+16}</span>`

**true**

The curly braces within the JSX code are used to insert JavaScript expressions and the expression 10+16 is a valid JavaScript expression that evaluates to 26.

# week 3

## table booking system

### customer table bookings

three major concepts in react
- state management
- forms
- writing unit tests

components and state are inextricably linked.

controlled components a form can be controlled using state.

uncontrolled components are controlled by underlying DOM.

`useRef` is needed for uncontrolled components.

### recap: state in react

state is what makes react apps interactive.

state is an object, `useState` hook controls it.

```jsx
import React, { useState } from "react"; // 1. object destructuring
import { TaskList } from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([ // 2. array destructuring to set state and stateFunction
    { id: 1, task: "Go shopping", done: true },
    { id: 2, task: "Wash dishes", done: false },
  ]); // 3. an array of objects is set as initial state

  return (
    <TaskList tasks={tasks} /> // 4. passes state data as props from parent to child
  )
}
```

the array of object is passed into the `TaskList` component and the component accepts `props.tasks` to be able to access the parent state.

1. React is imported and useState is a method of the react object so `{ useState }` imports the method as its own to not need `React.useState` everytime.

2. the returned value of `useState` is always an array so array destructuring is used to defined the names for the two elements in the array.

> object destructuring can only be done using the exact property key (name) of the source object. Array members can be destructured using any name.

many APIs return arrays of objects when dealing with data fetching.

### recap: forms

forms don't work like other DOM elements.

form elements keep their own state in regular HTML.

```html
<form>
  <label>
    Number of guests:
    <input type="number" name="guests" />
  </label>
  <button type="Submit">Submit</button>
</form>
```

default behavior of an HTML form is to open a new page after clicking on submit button, like anchor tags.

`preventDefault` method on an event object instance stops default behavior.

**controlled** components let react take control over a form's state.

**uncontrolled** components let the DOM control the state of components, there's no need of event handlers for state updates, instead `refs` are used to obtain needed form element's values straight from the DOM.

uncontrolled components can help integrate react to other front-end libraries.

### recap: unit testing

there's 3 main approaches to test the code of an app or site
- unit testing
- automated testing
- integration testing

unit testing focuses on testing specific react components.

simple counter app

```jsx
import React from "react";
export default function App() {
  const [number, setNumber] = React.useState(1);
  function increment() {
    setNumber((prevNumber) => prevNumber + 1);
  }
  return (
    <>
      <h1 data-test-id="currentNumber"> {number} </h1> 
      <button data-testid="add-one" onClick={increment}>
          Add one 
      </button>
    </>
  );
}
```

how to write a unit test for this app

```jsx
// App.test.js
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

test("Adds one", () => {
  // render the App component
  render(<App />);

  // save the heading in a variable
  const heading = screen.getByTestId("currentNumber");

  // save the button in a variable
  const btn = screen.getByTestId("addOne");

  // click the btn
  fireEvent.click(btn);

  // test assumption
  expect(heading).toHaveTextContent("2");
});
```

`npm test` or `npm run test` will run the test.

best practices
- avoid including implementation details.
- work with DOM nodes.
- resemble software usage.
- keep maintainability in mind.

### knowledge check: table booking system

1. What is the purpose of the useState hook in React?

The useState hook allows you to manage the component's state by declaring a state variable and a setter function for updating the state.

2. What is missing from the code below?
```jsx
import { useState } from "react";

export default function App() {
  const [restaurantName, setRestaurantName] = useState();
  return <h1>{restaurantName}</h1>;
}
```

The useState hook requires an initial value to be passed as an argument in order to properly bind a value to the state of a component. Without an initial value, the state variable `restaurantName` will be undefined and the component will not render correctly.

3. Controlled components keep their internal state in the DOM

**false**

Uncontrolled components keep their state in the DOM, but not controlled components

4. What is unit testing in React?
A type of testing that ensures that individual units of code are working as intended.

5. What is the main difference between the `useState` and `useReducer` hooks in React?

The useState hook is used for simple state updates, while the useReducer hook is used for more complex state updates that involve reducing the current state and an action to a new state.

### additional resources

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

https://beta.reactjs.org/learn/passing-props-to-a-component#step-2-read-props-inside-the-child-component

https://beta.reactjs.org/learn/passing-props-to-a-component#step-2-read-props-inside-the-child-component

https://beta.reactjs.org/learn/passing-props-to-a-component#step-2-read-props-inside-the-child-component

https://reactjs.org/docs/hooks-rules.html

https://reactjs.org/docs/hooks-reference.html#usereducer

https://beta.reactjs.org/apis/react/useRef#useref

https://beta.reactjs.org/learn/passing-props-to-a-component#step-2-read-props-inside-the-child-component

## interacting with API

### querying a table booking API

asynchronous functions aren't handled by javascript at all, they are delegated to other built-in browser functionalities and accepts the results of that work.

the `fetch` method is often referred to as a facade function. This method returns a promise.

it uses the XHR API or XML HTTP request API.

a promise is an object that might get fulfilled later.

3 states of a promise
- pending
- fulfilled (the engine is free to execute all methods that were given to it)
- rejected

fetching data is a side effect so it requires the use of `useEffect` hook.

to update state either `useState` or `useReducer` works.

### recap: querying APIs

JSON is the most popular data transfer format.

the JSON data exists somewhere on the web at a specific URL.

`fetch` is a popular method to retrieve tthird party data.

a side effect is anything that happens outside of react itself
- `console()`
- `document.title`
- `fetch()`

### connecting bookings page to API

set up API library in index.html

the API has 2 functions
- `fetchAPI(date)` accepts a data as a parameter and returns an array of available reservation times
- `submitAPI(formData)` accepts the booking form data as parameter and will return true if the data was successfully submitted.

### knowledge check: interacting with the API

1. Why should you never call hooks inside a nested function in react?

Hooks must be called at the top level of a function component, and not inside a nested function. This is because hooks rely on the order in which they are called to determine the state of a component. If hooks are called inside a nested function, the order in which they are called may not be consistent, leading to unexpected behavior.

2. The fetch function should be used inside the componentDidMount lifecycle method or useEffect hook.

**true**

The componentDidMount lifecycle method or the useEffect hook is the perfect place to use fetch calls to ensure the component doesn’t render before the external API data is received to avoid issues with the component not rendering correctly or with missing data being displayed.

3. When you receive a HTTP response using the fetch() API, how do you parse the data into a JavaScript object?

You should use the json() method of the response object to parse the data as a JSON object.

4. Which of the following statements are true?

- You can load local JSON files in your React project

5. JSON is...

A file format and a data exchange format.

### additional resources

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

https://www.redhat.com/en/topics/api/what-is-a-rest-api

https://reactjs.org/docs/faq-ajax.html

https://reactjs.org/docs/testing-recipes.html

## improving the experience

### recap: form validation

process of checking user input in a form is complete and accurate before it is submitted to the server.

typically done using javascript on the client.

server-side validation is when the user completes and submits the form with necessary information, the form data is sent to the server for form validation after submitting the form. The user receives a confirmation or error message when the server responds.

client-side validation are alerts that appear when user enters data into form fields before submitting to the server.

### accesibility

The four major elements to concentrate on while developing an accessible website are outlined in the WCAG (Web Content Accessibility Guidelines)and standards. These are published by the World Wide Web Consortium's (W3C) Web Accessibility Initiative (WAI).

**Perceivable**

The information and content on your website must be perceived, understood and known by visitors. Users who are blind or have impaired vision frequently use screen-reader software, transforming a written text into synthesized speech or braille letters. Remember that perceiving doesn't necessarily mean seeing with one's eyes.

**Operable**

The use of operable websites is possible without interfering in any way with the user. Every feature of the website's functionality must be accessible to all users, including page navigation, link selection from a menu and the ability to play and pause audio and video. In general, the most usable websites are plain, uncomplicated and devoid of any unnecessary functionality that can obstruct users with disabilities and limits.

**Understandable**

Visitors should be able to quickly understand all your website's material, including its textual and graphic design content. Verbose, jumbled language is complex for your average visitor to understand and restricts access for those with cognitive issues and impairments and visitors who do not speak the primary language of your website. This idea also applies to the organization of your website. Your website's navigation should be easily accessible to users on most, if not all, of your pages, and it should be organized logically.

**Robust**

All visitors to your website, including those who use assistive technology like screen readers should readily understand and consume the material.

### recap: UX UI

**Dieter Rams**

For many years, German industrial designer Dieter Rams oversaw the creation of Braun's consumer goods. About 50 years ago, he created the 10 principles of good design, commonly referred to as the ten commandments, to address the question, Is my design a good design? These ideas continue to be relevant today.

**Ben Shneiderman**

Shneiderman teaches computer science at the University of Maryland Human-Computer Interaction Lab in College Park. In human-computer interaction, he undertakes fundamental research, creating innovative concepts, procedures and tools, including the direct manipulation of interface and the eight golden rules of interface design.

**Jakob Nielson**

User advocate Jakob Nielsen is the principal of the Nielsen Norman Group, which he co-founded with Dr. Donald A. Norman (former VP of research at Apple Computer). Dr. Nielsen founded the discount usability engineering movement for quick and affordable UI changes and devised the 10 usability heuristics. Jakob Nielsen's heuristics were developed based on work together with Rolf Molich in 1990 and are probably the most-used usability heuristics for UI design.

### knowledge check: improving the experience

1. What is a heuristics evaluation?

A heuristics evaluation examines and assesses the usability of a particular project.

2. Which of the following people are notable for making various product and UI design recommendations?

**Jakob Nielsen**

Jakob Nielsen founded the "discount usability engineering" movement for quick and affordable UI changes and devised 10 usability heuristics. His heuristics are probably the most-used usability heuristics for UI design.

**Dieter Rams**

Dieter Rams is a German industrial designer who created the 10 principles of good design, commonly referred to as the ten commandments.

3. There are four core principles of accessibility upon which WCAG (Web Content Accessibility Guidelines) has been built.

- **understandable** this means that users must be able to comprehend both the information and how the user interface works.
- **operable** Users must be able to use the user interface and navigation.
- **perceivable** Users need to be able to perceive the information presented to them and user interface components through sight, hearing or touch.
- **robust** This means that a wide range of user tools, including assistive technologies, can reliably understand your material.

4. What is the term for the technical procedure where information is checked to determine if the data entered by the user is accurate?

Validation is the technical procedure where information is checked to see if the data entered by the user is accurate.

5. In client-side validation, the form data is validated in the browser

**true** The form data is validated on the client side using various HTML attributes and JavaScript.

### module quiz: project functionality

1. purpose of following code:

```jsx
import { useState, useEffect } from "react";
function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      {" "}
      <p>You clicked {count} times</p>{" "}
      <button onClick={() => setCount(count + 1)}>Click me</button>{" "}
    </div>
  );
}
```

- useState is used to add state to a functional component.
- useState is used to set the initial state of the component.

2. What is the benefit of useState over useReducer?

The useState hook is more performant than useReducer because it does not require the overhead of creating a new dispatch function on every render.

3. Why do you use the useEffect hook in a react project?

- The useEffect can also be used to clean up effects before the component unmounts or re-renders, such as canceling an HTTP request or removing an event listener.
- The useEffect hook is often used to perform side effects after a component renders, such as making an HTTP request or updating the document title.
- The useEffect is triggered when the component mounts or updates, allowing it to perform side effects based on the current state or props of the component.
- The useEffect hook can be triggered when a prop changes, allowing it to perform side effects based on the updated prop value.

4. True or false. Uncontrolled components are components that do not maintain their own state.
**false**

Uncontrolled components are components that do not maintain their own state and rely on an external source for their state, such as a form element or a parent component. In contrast, controlled components maintain their own state and control their own behavior and rendering.

5. Which of the following are common uses of JSON in a React project?
- To declare dependencies in package.json
- To send and receive data to/from a REST API

6. What will be output if the following HTTP request fails?

```jsx
fetch('https://example.com/api/data')
 .then(response => console.log("Success"))
```
There is no catch function defined for the resulting promise, therefore, nothing will be output.

7. What is the benefit of unit testing in React?

- By catching regressions early in the development process, unit testing can help prevent issues from cascading and becoming more difficult to fix later on.
- Unit testing helps ensure that individual components work as expected by testing their behavior and output under different conditions.
- By testing individual components in isolation, unit testing allows for easier debugging and maintenance because it can help identify issues more quickly and specifically.

8. `/Make Your Reservation/?`

This code a RegExp object literal, because it is enclosed in / delimiters.

9. True or false. “Operable” is one of four core principles of accessibility upon which WCAG (Web Content Accessibility Guidelines) has been built.

"Operable" is one of the four core principles of accessibility, along with "Perceivable," "Understandable," and "Robust." It refers to the requirement that users must be able to use the user interface and navigation in a way that is accessible to them. This includes providing keyboard accessibility for users who cannot use a mouse and ensuring that the user interface does not create barriers to accessing content or functionality.

10. Can you use arrow functions to update the state of a component?

### additional reading

https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation

https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA

https://reactjs.org/docs/accessibility.html

https://www.nngroup.com/articles/web-form-design/

# week 4

## final graded quiz

1. Which of the following are HTML Inline Elements?
- `<input>`
- `<span>`

2. What is required by JavaScript when creating a function declaration?

The function name

3. Which of the following options can you use to clone a GitHub repository?
- You can download a GitHub repository as a ZIP file.
- You can clone a GitHub repository with the GitHub Desktop app.
- You can use the git clone command in the Git terminal.

4. Which of these options are considered best practices for form design?

When possible, use a single-column web form layout. This is especially important when creating long multi-step forms. Single-column layouts are more straightforward for visitors to follow, understand, complete and submit than forms with multiple columns.

Inline form validation is a procedure that checks a visitor's information in real time as they fill out the form. The error message displays below or inside the form field, alerting the visitor to their mistake and allowing them to quickly correct it and move on to the next question.

5. When designing a website using CSS grid, what code can you use to design three columns where the second column uses twice the space as the other two?

`grid-template-columns: 1fr 2fr 1fr;`

6. What is the very first step when creating a wireframe in Figma?

Gather requirements

7. Which command is used to create a local copy of a remote Git repository?

`git clone`

8. Which of the following is not a valid Open Graph meta tag?

There is no og:keywords tag in the Open Graph protocol. The og:keywords tag is not a valid Open Graph tag.

9. React has at least one component known as the `root` component.

10. Which of the following hooks is most appropriate for tracking complex application state in React?

`useReducer`

11. It is essential to provide a unique key for each list item when rendering a list in React.

In React, it is important to provide a unique key prop for each element in a list to help React identify which elements have changed, been added or been removed. Without a key, React will not be able to efficiently update the list and may cause performance issues or unexpected behavior.

12. CSS grids are created using the grid-gap property

**false**

The grid-gap property is used to specify the amount of space between the rows and columns of a grid, but it is not used to create the grid itself. To create a grid using CSS grid, you should use the display property with a value of grid and set the grid-template-columns and grid-template-rows properties to specify the number and size of the columns and rows.