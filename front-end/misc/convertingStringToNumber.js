// Number wrapper

let quantityString = "12.5";
let quantityNumber = Number(quantityString);
console.log(quantityNumber);
// parseInt()
/* 
takes in a string an optional radix returns an integer

a radix is a number between 2 and 36 which represents the base in a numeral system.

radix of 10 representing decimal system

radix of 2 represents binary system
*/

let quantityParsed = parseInt(quantityString, 10);
console.log(quantityParsed);
// parseFloat() returns a floating point number

let quantityFloat = parseFloat(quantityString);
console.log(quantityFloat);

// unary plus operator to convert integer and floating point numbers

let quantityUnary = +quantityString;

// using cohersion

let quantityCoherced = quantityString * 1;
// quantityString / 1
// quantityString - 0

// bitwise NOT operator ~ inverts the bits of an operant and converts value to 32-bit signed integer.
// -(x + 1)
console.log(~quantityString);

// double bitwise NOT converts string to number
// doesn't work with floating point numbers
let quantityBitwised = ~~quantityString;
console.log(quantityBitwised);

// trying  double bitwise NOT on non-numeric  characters return zero

// using Math methods
// rounds number down to the nearest integer

let quantityFloored = Math.floor(quantityString);

// Math.ceil(quantityString);
// Math.round(quantityString);