import React from "react";
import { render } from "react-dom";
// import Pet  from "./Pet"
import SearchParams from "./searchParams";

// simple app component returns the result of calling .createElement
/*
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
*/
/*
const App = () => {
  return (
    <div>
      <h1 id="something">Adopt me!</h1>
      <Pet 
        name="pepe"
        animal="dog"
        breed="golden doodle"
      />
      <Pet 
        name="nina"
        animal="cat"
        breed="mixed"
      />
      <Pet 
        name="meow"
        animal="cat"
        breed="mixed"
      />
    </div>
  )
}
*/

const App = () => {
  return (
    <div>
      <h1 id="something">Adopt me!</h1>
      <SearchParams /> 
    </div>
  )
}

render(
  React.createElement(App), // what to render
  document.getElementById("root") // where to render
);
