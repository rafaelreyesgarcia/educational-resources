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

## **REUSING BEHAVIOR**

## **INTEGRATION TESTING**