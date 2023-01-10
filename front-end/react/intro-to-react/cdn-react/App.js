/* 
const Pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('h2', {}, props.breed)
  ]);
}
*/

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

// simple app component returns the result of calling .createElement
const App = () => {
  return React.createElement(
    "div", // what element to create
    { id: "something" }, // attributes to give a component
    React.createElement(Pet, {
      name: "pepe",
      animal: "dog",
      breed: "golden doodle",
    }),
    React.createElement(Pet, {
      name: "nina",
      animal: "cat",
      breed: "mixed",
    }),
    React.createElement(Pet, {
      name: "meow",
      animal: "cat",
      breed: "mixed",
    }) // children
  );
};

ReactDOM.render(
  React.createElement(App), // what to render
  document.getElementById("root") // where to render
);
