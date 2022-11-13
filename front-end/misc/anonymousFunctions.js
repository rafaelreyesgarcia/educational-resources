// function declaration
function sumTwo(a, b) {
  return a + b;
}

// arrow function version 
let sumTwoArrow = (a, b) => {
  return a + b;
};

// arrow function compressed
let sumTwoArrowShort = (a, b) => a + b;

///

// named function one parameter
function isPositive(number) {
  return Math.random;
}

// arrow function version

let isPositiveArrow = number => number >= 0;

///

// named function empty parameters
function randomNumber() {
  return Math.random;
}

// arrow function version

let randomNumberArrow = () => Math.random;

///

// anonymous function
document.addEventListener('click', function() {console.log('click')});

// anonymous arrow function
document.addEventListener('click', () => {
  console.log('click');
});


/* 
this keyword is not redefined in arrow functions
normal functions redefines this keyword with the scope of the execution context
this is the same as this in the scope where the function is defined in arrow functions
*/
class Person {
  constructor(name) {
    this.name = name
  }

  printNameArrow() {
    setTimeout(() => {
      console.log('function: '+ this.name)
    }, 100);
  }

  printNameFunction() {
    setTimeout(function() {
      console.log('function: ' + this.name);
    });
  }
}

let person = new Person('rafael');
person.printNameArrow(); // rafael
person.printNameFunction(); // empty
console.log(this.name); // empty