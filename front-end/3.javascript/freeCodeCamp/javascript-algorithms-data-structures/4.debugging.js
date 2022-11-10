/* 
javascript console to check value of variable
console.log() allows to print the output of a variable, function call, etc...
good practice to console.log() values at different checkpoints to see the status of the calculations we're performing
*/

let a = 5;
let b = 1;
console.log(`using postfix: ${a++}`);
console.log(`a's new value: ${a}`);
console.log(`b's new value already in the prefix call: ${++b}`);

/* 
there's different console methods
console.log()
console.table()
console.clear()
*/

/* 
typeof to check the type of variables

javascript recognizes seven primitive (immutable) data types
boolean
null
undefined
number
string
symbol
bigInt

mutable data type
object

*/

console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});
console.log(typeof Date);
console.log(typeof function () {});

/* 
ReferenceError 
mispelled variable and function names
happens when the engine tries to reference a variable and it doesn't exist
javascript variable and function names are case-sensitive

SyntaxError
unclosed parentheses, brackets, braces and quotes
mixed usage of single and double quotes


*/

const grouchoContraction = "I've had it before but this wasn't it";
const quoteInString = "Groucho once said 'hello world'";
const EscapedQuotes = "I've had enough of it!";

/* 
wrong usage of operators
confusing assignment operator with equality == 
not knowing the difference between abstract and strict equality
unexpected control flow in program
= assigns a value to a variable
== abstract equality
=== strict equality

falsy values
false
0
""
NaN
undefined
null
*/

let x = 7;
let y = 9;
let result = "to come";

// mistake of assigning x = y instead of comparing x == y would cause a bug
if (x == y) {
  result = "equal";
} else {
  result = "not equal";
}

console.log(result);

/* 
catch missing open and closing parenthesis after a function call

*/

function myFunction() {
  return "you rock!";
}

let varOne = myFunction;
let varTwo = myFunction();

console.log(varOne);
console.log(varTwo);

/* 
catch arguments passed in the wrong order when calling a function
supply arguments in the correct order to avoid runtime errors
*/

/* 
catch off by one errors (OBOE) when using indexing
javascript indexing starts at 0
last index is always length - 1
index out of length reference error or print undefined

in a for loop index length is important
i <= array.length would loop one more time extra
i = 1; i < array.length would loop one less time (missing index 0)

*/

// correct way of looping in an array using indices
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let length = alphabet.length;

for (let i = 0; i < length; i++) {
  console.log(alphabet[[i]]);
}

/* 
caution when reinitializing variables inside a loop
*/

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray

    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
    row = [];
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

/* 
prevent infinite loops 
error is incrementing or decrementing the counter variable in the wrong direction of the terminal condition

*/

function myFunc() {
  for (let i = 0; i <= 4; i++) {
    console.log('Im here!');
  }
}
