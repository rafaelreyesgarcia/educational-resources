// REST PARAMETER
/* 
eliminates the need to check the args array
allows to apply array methods on the parameters (map, filter, reduce)

*/

function howMany(...args) {
  return "you have passed: " + args.length + " arguments.";
}

console.log(howMany(0, 1 ,2));
console.log(howMany("string", null, [1, 2, 3], {}));

// anonymous inline arrow function using the rest parameter
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3));

// SPREAD OPERATOR

// ES5 
/* 
Math.max() expects comma separated arguments but not an array
the apply method allows to pass an array to Math.max
Math.max would return NaN otherwise
the spread syntax returns an unpacked array
only works in-place (as an argument to a function or in an array literal)
Math.max(...arr) or arr2 = [...arr1];
*/
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
console.log(maximus);
// ES6 
const es6Max = Math.max(...arr);
console.log(es6Max); 

// destructuring syntax
// ES5
const user = { name: "kelley", age: 23 };
const ES5name = user.name;
const ES5age = user.age;

// ES6
const { name, age, another } = user;

console.log(name);
console.log(age);
console.log(another);

const HIGH_TEMPERATURES = {
  yesterday: 77,
  today: 75,
  tomorrow: 74
};

const {yesterday, today, tomorrow} = HIGH_TEMPERATURES;

// assign a new variable name to a property key
const {name: userName, age: userAge} = user;

// destructuring assignment of variables from nested objects

const users = {
  kelley: {
    age: 34, 
    email: 'kelleysmith@mail.com'
  }
};

const { kelley: {age: someAge, email}} = users;

// destructuring assignment of variables from arrays

/* 
spread operator ...args unpacks all contents of an array into a comma-separated list
only work in-place (passed as args in a function or as array literal)

you can't pick which elements to assign to variables

destructuring an array does this
destructuring an array is done with 3 commas 
*/

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];

console.log(a, b, c);

// array destructuring to swap values

let one = 6, two = 8;
[one, two] = [two, one];
console.log(one);

// destructuring assignment with rest parameter to reassign array elements
// similar result to Array.prototype.slice()

const [first, second, ...array] = [1, 2, 3, 4, 5, 7];
console.log(first, second);
console.log(array);

// Array.prototype.slice() with ES6 destructuring assignment and rest parameter
// returned value of the function is the sub-array of the original source, removing the first two elements

const source = [1, 2, 3 ,4 ,5 , 6, 7, 8, 9, 10];

function removeFirstTwo(src) {
  const [first, second, ...subArr] = src;
  console.log(`omitted ${first} and ${second}`);
  return subArr;
}

const subArr = removeFirstTwo(source);
console.log(subArr);

// destructuring assignment to pass an object as a parameter/argument

const profileUpdate = (profileData) => {
  const profile = {
    name: 'john',
    age: 50,
    nationality: 'american',
    location: 'united states'
  };

  const { name, age, nationality, location } = profileData;

  console.log(`destructured object properties:
  ${name}, ${age}, ${nationality}, ${location}`);

  profile.name = name;
  profile.age = age;
  profile.nationality = nationality;
  profile.location = location;

  return profile;

};

const profileInfo = {
  name: 'rafael',
  age: 29,
  nationality: 'guatemalan',
  location: 'united states'
};

console.log(profileUpdate(profileInfo));

// destructuring an object in-place

const updateProfile = ({name, age, nationality, location}) => {
  console.log(` destructuring in place: ${name}, ${age}, ${nationality}, ${location}`);
  return {name, age, nationality, location};
};

console.log(updateProfile(profileInfo));

// destructuring an object in a function declaration

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

function half(stats) {
  const {max, min} = stats;

  let result = (max + min) / 2.0;
  return result;
};

console.log(`object destructuring in function declaration: 
${half(stats)}`);

// destructuring an object in-place with arrow functions

const arrowHalf = ({max, min}) => (max + min) / 2.0;

console.log(`object destructuring in-place as arrow function parameter:
${arrowHalf(stats)}`);

// template literals

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

// using template literals

const result = {
  success: [
    "max-length",
    "no-amd",
    "prefer-arrow-functions"
  ],
  failure: [
    "no-var",
    "var-on-top",
    "linebreak"
  ],
  skipped: [
    "no-extra-semi",
    "no-dup-keys"
  ]
};

function makeList(arr) {
  const failureItems = [];
  
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }

  return failureItems;
}

const failureList = makeList(result.failure);
console.log(failureList);

// function that returns an object containing properties
// ES5 redundant 

const getMousePosition = (x, y) => ({
  x: x,
  y: y
})

// ES6 syntax
const ES6GetMousePosition = (x, y) => ({x, y});

const returnedObj = ES6GetMousePosition(5, 6);
console.log(returnedObj);

// object literal declarations 
const createPerson = (name, age, gender) => {
  return ({
    name, 
    age,
    gender
  });
};

// defining functions in objects
// ES5
const ES5Person = {
  name: "taylor",
  sayHello: function() {
    return `hello! My name is ${this.name}`;
  }
};
// ES6 function declaration in an object
const ES6Person = {
  name: 'rafael',
  sayHello() {
    return `hello! my name is ${this.name}`;
  }
};

const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};

const ES6Bicycle = {
  gear: 1,
  setGear(newGear) {
    this.gear = newGear;
  }
};

/* 
ES6 class

ES5, you can define a constructor function to construct (create) an object
using the new keyword instantiate the object

ES6 class declaration has a constructor method 
invoked with the new keyword

if constructor is not explicitly defined
it is implicitly defined with no arguments

UpperCamelCase should be used for ES6 class names

constructor method is a special method for creating and initializing an object 
*/

// explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }

  takeOff() {
    console.log(`to ${this.targetPlanet}!`);
  }
}

// implicit constructor
class Rocket {
  launch() {
    console.log(`to the moon!`);
  }
}

const zeus = new SpaceShuttle('Jupiter');
zeus.takeOff();

const atlas = new Rocket();
atlas.launch();

// class
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot);

// getters and setters to control access to an object
/* 
getter
  obtain values from an object
  returns (gets) the value of an object's private variable, without the user directly accessing the variable
setter
  set the value of a property within an object
  meant to modify the value of an object's private variable based on the value passed to the setter function

prefixing private variables with _ is best practice
*/

class Book {
  constructor(author) {
    this._author = author;
  }
  get writer() {
    return this._author;
  }

  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}

const novel = new Book('anonymous');
// invokes getter
console.log(novel.writer);
// invokes setter
novel.writer = 'newAuthor';

console.log(novel.writer);

// class with getter and setter

class Thermostat {
  constructor(farenheit) {
    this.farenheit = farenheit;
  }

  get temperature() {
    return (5 / 9) * (this.farenheit - 32);
  }

  set temperature(celsius){
    this.farenheit = (celsius * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76);
let temp = thermos.temperature;

console.log(thermos);
thermos.temperature = 26;
temp = thermos.temperature;

/* 
Modules

<script type="module" src="filename.js"></script>

*/

// export statement for a single function
export const add = (x, y) => {
  return x + y;
};

// variant for single/multiple export
const suma = (a, b) => {
  return a + b;
};

export { add, Thermostat };

const uppercaseString = (string) => {
  return string.toUpperCase();
};

const lowercaseString = (string) => {
  return string.toLowerCase();
};

export { uppercaseString, lowercaseString};

/* 
import syntax

import { function } from './fileName.js';
./ looks for same directory of current file (relative path)

import everything 

import * as myMathModule from './math_functions.js';
the myMathModule will be an object containing all the functions from math_functions.js

accessing the functions would be like accessing any other object's methods

myMathModule.add(2, 3);
myMathModule.substract(5, 3);

export default 
  used if only one value is being exported from a file
  also used to create fallback value for a file(module)
  can only have one fallback value for a module
  var let or const can't be used with export default

  a function as a fallback value for a module

importing a default export
  import defaultName from './math_functions.js'
  no need to use curly braces

*/

/* 
Promises

completes tasks asynchronously 
constructor function so has to be created with the new keyword
accepts two parameters (resolve, reject)
has three states (pending, fulfilled, rejected)
*/

const myPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve('promise was fulfilled');
  } else {
    reject('promise was rejected');
  }
});

const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = true;
  // responseFromServer = false; 
  let result = [];
  let error = new Error();
  if (responseFromServer) {
    // resolve('we got the data');
    resolve(result);
  } else {
    // reject('data not received');
    reject(error);
  }
});

/* 
handling a fulfilled promise with then

then method is executed immediately after the promise is fulfilled with resolve

myPromise.then(result => {

});
result comes from the argument given to the resolve method
*/

makeServerRequest.then(result => {
  console.log(result);
});

// handle a rejected promise with catch

makeServerRequest.catch(error => {
  console.log(error);
});






