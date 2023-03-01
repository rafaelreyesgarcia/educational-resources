# create functions

function definitions don't specify data types for paramenters, perform type checking on passed arguments or check the number of arguments received in conventional javascript.

typescript allows you to type parameters and return values

parameters can be optional or required.

adding types to functions prevents passing values that shouldn't be used.

typed functions are good for larger code bases or working with third party functions.

instead of adding conditional logic in the function's body to determine actions based in the type, typescript ensure the correct value types are passed.

autocomplete parameters is possible thank to a typed system.

## named functions

function declaration written with `function` keyword and provided with a distinct name within the current scope.

loaded into the execution context before any code runs.

syntax for declaring a named function is the same.

function accepts two `number` parameters and returns a `number`

```ts
function addNumbers (x: number, y: number): number {
  return x + y;
}
addNumbers(1, 2);
```

## anonymous functions

a function expression isn't pre-loaded into the execution context, only runs when the code encounters it.

function expressions are created at runtime and must be declared before they're called.

aren't hoisted.

function expressions represent values.

assign a function expression to a variable

```ts
let addNumbers = function (x: number, y: number): number {
  return x + y;
}
addNumbers(1, 2);
```

```ts
let sum = function (input: number[]): number {
  let total: number = 0;
  for (let i = 0; i < input.length; i++) {
    if(isNaN(input[i])) {
      continue;
    }
    total += Number(input[i]);
  }
  return total;
}

console.log(sum[1, 2, 3]);
```

## arrow functions

also called lambda or fat arrow

shorthand syntax for anonymous functions.

often used with simple one-line functions or event handlers.

```ts
// Anonymous function
let addNumbers1 = function (x: number, y: number): number {
  return x + y;
}

// Arrow function
let addNumbers2 = (x: number, y: number): number => x + y;

let total2 = (input: number[]): number => {
  let total: number =  0;
  for(let i = 0; i < input.length; i++) {
    if(isNaN(input[i])) {
      continue;
    }
    total += Number(input[i]);
  }
  return total;
}
```

single line arrow functions can use concise body syntax (implicit return) allowing the omission of curly brackets and `return` keyword

`()` can be used to wrap a multi-line implicit return

# parameters

when a function is called, the compler verifies
- a value for each parameter
- only required parameters
- parameters passed in the order they're defined

javascript allows parameters to be optional and allows to pass more or fewer arguments than defined.

functions can be defined with optional, default, rest parameters and deconstructed object parameters.

function parameters are required and number of passed arguments must match required.

```ts
// PARAMETERS
// required
function addNumbers (x: number, y: number): number {
  return x + y;
}

addNumbers(1, 2); // Returns 3
addNumbers(1);    // Returns an error

// optional
function addNumbers (x: number, y?: number): number {
  if (y === undefined) {
    return x;
  } else {
    return x + y;
  }
}

addNumbers(1, 2); // Returns 3
addNumbers(1);    // Returns 1

// default
function addNumbers (x: number, y = 25): number {
  return x + y;
}

addNumbers(1, 2);  // Returns 3
addNumbers(1);     // Returns 26
```

## rest parameters

rest parameters are multiple parameters as a group (passing them as an array)

rest parameters are useful when you don't know how many arguments a function will take

boundless number of optional parameters.

`...` ellipsis tells the compiler to build an array with the arguments passed and assign a a the name to use it in the function.

```ts
let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
  let total: number =  firstNumber;
  for(let counter = 0; counter < restOfNumbers.length;counter++) {
    if(isNaN(restOfNumbers[counter])){
      continue;
    }
    total += Number(restOfNumbers[counter]);
  }
  return total;
}

addAllNumbers(1, 2, 3, 4, 5, 6, 7);  // returns 28
addAllNumbers(2);                    // returns 2
addAllNumbers(2, 3, "three");        // flags error due to data type at design time, returns 5
```

## deconstructed object parameters

parameters are positional, must be passed in order in which they're defined.

an interface is defined with two properties. A function can accept a parameter defined with an interface and deconstructed

```ts
interface Message {
  text: string;
  sender: string;
}

function displayMessage({text, sender}: Message) {
  console.log(`Message from ${sender}: ${text})`);
}

displayMessage({sender: 'Rafael', text: 'hello there!'});
```

# exercise with parameters

deconstructed object parameters

> function parameters are **positional**, msut be passed in the order in which they're defined.

positional parameters can make code less readable (multiple optional parameters or same data type)

object destructuring enables named

## required parameters

if a function expects a number of arguments and receives less, the missing parameter becomes undefined, making computations return `NaN`

if a function expects a number of arguments and receives more, the extra parameters are ignored

## optional parameters

position of the optional matters. Only the last expected parameter can be optional

# define function types

you can define a function type using a type alias or an interface, both work the same.

interfaces are good to extend the function type

type alias better to use with unions or tuples

## function type inference

when defining a function, names of function parameters don't need to match names in function type

names are ignored when checking function type compatibility

optional to leave off parameter types and return type as typescript can infer types from the function type definition

```ts
let addNumbers: Calculator = (x: number, y: number): number => x + y;
let addNumbers: Calculator = (number1: number, number2: number): number => number1 + number2;
let addNumbers: Calculator = (num1, num2) => num1 + num2;
```

# knowledge check

1. What is a difference between function parameters in TypeScript and function parameters in JavaScript?

TypeScript parameters are required by default, but can be made optional. JavaScript parameters are always optional.

2. What is a common use for an anonymous function?

When you need to assign a function expression to a variable.

An anonymous function is commonly used to assign a function expression to a variable, or to pass a function to another function.

3. How should you define a function type if you need to extend it?

Define it with an interface.

One reason to use an interface over a type alias is that interfaces can be extended whereas a type alias cannot.

# additional resources

https://www.typescriptlang.org/docs/handbook/functions.html

https://www.typescriptlang.org/docs/handbook/interfaces.html

