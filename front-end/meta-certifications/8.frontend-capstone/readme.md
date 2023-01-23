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

