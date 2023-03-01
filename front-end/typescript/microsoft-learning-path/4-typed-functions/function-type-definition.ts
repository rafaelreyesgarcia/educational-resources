// type alias

type calculator = (x: number, y: number) => number;

// using the function type as a type signature when declaring functions

let addNumbers: calculator = (x: number, y: number): number => x + y;
let substractNumbers: calculator = (x: number, y: number): number => x - y;

// pass values from aother function

let doCalculation = (operation: 'add' | 'substract'): calculator => {
  if (operation === 'add') {
    return addNumbers;
  } else {
    return substractNumbers;
  }
}

interface Calculator {
  (x: number, y: number): number;
}

// equivalent to type calculator = (x: number, y: number) => number;

// including parameters and return types
let addNumbers0: Calculator = (x: number, y: number): number => x + y;

// names are irrelevant
let addNumbers1: Calculator = (number1: number, number2: number): number => number1 + number2;

// ignoring parameters and return types as typescript infers from function type
let addNumbers2: Calculator = (num1, num2) => num1 + num2;