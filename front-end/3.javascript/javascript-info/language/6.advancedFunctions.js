// RECURSION AND STACK 

// function to multiply x to the power of n

// iterative thinking
function pow(x, n) {
  let result = 1;
  
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

// iterative process
/* 
x = 2
n = 3
 
i = 0
result = 1 * 2 = 2
i = 0 + 1 = 1

i = 1
result = 2 * 2 = 4
i = 1 + 1 = 2

i = 2
result = 4 * 2 = 8
i = 2 + 1 = 3
i = 3 < n = 3 (false, breaks the loop)
*/



// recursive thinking
function powRecursive(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * powRecursive(x, n - 1);
  }
}

// recursive process
/* 
x = 2
n = 3
if 3 == 1 (false, skip the if and go to else)
return 2 * (4) {
  x = 2
  n = 3 - 1 = 2
  if 2 == 1 (false, skip the if and go to else)
  return 2 * (2) {
    x = 2
    n = 2 - 1 = 1
    if 1 == 1 (true, if statement executes)
    return x = 2
  }
}
*/

function powRecursiveSimplified(x, n) {
  return (n == 1) ? x : (x * powRecursiveSimplified(x, n - 1));
}

// recursive traversals

let company = {
  sales: [{
    name: 'kelley',
    salary: 1000
  },{
    name: 'rafael',
    salary: 1600
  }],
  development: {
    sites: [{
      name: 'peter',
      salary: 2000
    }, {
      name: 'alex',
      salary: 1800
    }],
    internals: [{
      name: 'jack',
      salary: 1300
    }] 
  }
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((prev, current) => prev + current.salary, 0);
  } else {
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep);
    }
    return sum;
  }
}
/* 
if (Array.isArray(company)) false, so execution continues

let sum = 0
for subdep of Object.values(company) 
  loops over object values,
  first key (sales) has an array as value
  subdep becomes salesValue

0 += sumSalaries(salesValueArray)
  parent execution context pauses
  1st RECURSIVE CALL

  if (Array.isArray(salesValue)) true, as sales value is an array
  then reduce executes,
  prev = accumulator
  current = element in the array
  prev = 0
  0 + [0].salary (1,000) = 1000
  1000 + [1].salary (1,600) = 2,600
  recursive call returns 2,600

0 += 2,600 = 2,600
parent execution context continues

for subdep of Object.values(company) continues
  continues looping over object values
  second key (development) holds an object as value
  subdep becomes developmentValue

2,600 += sumSalaries(developmentValueObject)

parent execution context pauses
2nd RECURSIVE CALL

if (Array.isArray(developmentValue)) false as development key holds an object as value
execution continues in the recursive call

let sum = 0
for subdep of Object.values(developmentValue)
  loops over values of keys in development object
  first key in development object (sites) has an array as value
  subdep becomes sitesValue
    
  sum = 0 += sumSalaries(sitesValue)
    nested execution context is paused
    3rd RECURSIVE CALL

    if (Array.isArray(sitesValue)) true as sitesValue holds an array
    reduce executes
    prev = 0
    current = element in the array
    0 += [0].salary (2000) = 2000
    2000 += [1].salary (1800) = 3800
    returns 3,800
    double nested execution context finishes
  sum = 3,800 
  nested execution context continues

  second key in development object(internals) has an array as value
  subdep becomes internalsValue
    
  sum = 3,800 += sumSalaries(internalsValue)
    nested execution is paused
    4th RECURSIVE CALL

    if (Arra.isArray(internalsValue)) true as internalsValue holds an array
    reduces executes
    prev = 0
    current = element in the array
    0 += [0].salary (1,300) = 1,300
    returns 1,300
    double nested call finishes

  sum = 3,800 + 1,300 = 5,100
  nested execution finishes

parent execution context resumes
2,600 + 5,100 = 7,700
returns 7,700

*/

//

console.log(sumSalaries(company));

console.log(company['sales'].reduce((accu, elem) => accu + elem.salary, 0));

console.log(Object.values(company.development)[0].reduce((accu, elem) => accu + elem.salary, 0));

// list creation 

// linked lists
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    
    }
  }
};

console.log(`list.next:
  ${JSON.stringify(list.next)}`
);

console.log(`list.next.next:
  ${JSON.stringify(list.next.next)}`);

console.log(`list.next.next.next:
  ${JSON.stringify(list.next.next.next)}`
);

console.log(`list.next.next.next.next:
  ${JSON.stringify(list.next.next.next.next)}`
);


let listAlt = {value: 1};
listAlt.next = {value: 2};
listAlt.next.next = {value: 3};
listAlt.next.next.next = {value: 4};
listAlt.next.next.next.next = null;
console.log(listAlt);

// split
let secondList = listAlt.next.next;
listAlt.next.next = null;

console.log(secondList);
console.log(listAlt);

// join
listAlt.next.next = secondList;

// prepend a value
listAlt = {value: 'prepended', next: listAlt};
console.log(listAlt);

// replace
listAlt.next = listAlt.next.next;
console.log(listAlt);

function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2, 3, 4, 5, 6));

// rest parameter
function sumAll(...args) { /* args name of the array*/
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

console.log(sumAll(1));
console.log(sumAll(1, 2, 3, 4, 5, 6));

// gather only some arguments into an array
function showName(firstName, lastName, ...titles){
  console.log(firstName + ' ' + lastName);
  
  console.log(titles[0]);
  console.log(titles[1]);
  console.log(titles.length);

  // this function returns undefined as there's no return value
  // this function only creates side effects (printing text through console.log())
};

showName('julius', 'caesar', 'consul', 'imperator');


function showNameArguments() {
  console.log(arguments.length);
  // console.log(arguments[0]);
  // console.log(arguments[1]);
  // or
  for (let arg of arguments) {
    console.log(arg);
  }
}

showNameArguments('julius', 'caesar');
showNameArguments('ilya');

// spread syntax
// passing an iterable object as arguments
let iterableObject = [3, 5, 1];
console.log(Math.max(...iterableObject));
// pass multiple iterables
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log(Math.max(...arr1, ...arr2));

// combining spread syntax with normal values
console.log(Math.max(1, ...arr1, 2, ...arr2, 35));

// spread syntax to merge arrays
let arrA = [3, 5, 1];
let arrB = [8, 9, 15];

let merged = [0, ...arrA, 2, ...arrB];
console.log(merged);

let str = 'rafael';
console.log([...str]);
// ...str becomes a list of characters passed into an array initializer
// each character becomes an element in the array

// converts an iterable into an array
console.log(Array.from(str));

// ...spread like Object.assign() clone an array
let arrAssigned = [1, 2, 3];
let arrCopy = [...arrAssigned];

// have same contents
console.log(JSON.stringify(arrAssigned) === JSON.stringify(arrCopy));

// not the same arrays
console.log(arrAssigned == arrCopy);

// copy of an object
let obj = {a: 1, b: 2, c: 3};
let objCopy = {...obj};

//closure

function sayHiBye(firstName, lastName) {
  function getFullName() {
    return firstName + ' ' + lastName; 
  }

  console.log('hello! ' + getFullName());
  console.log('bye! ' + getFullName());
};

sayHiBye('kelley', 'smith');

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };

}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());

// garbage collection
function f() {
  let value = 123;
  
  return function() {
    console.log(value);
  }
}

let g = f();
// g.[[Environment]] stores a reference to the lexical environment of a given f() call
// while g exist, the value of a function stays in memory
g = null;
// cleans the memory

// VAR

// var visible through code blocks if statements
if (true) {
  var test = true;
  // let test = true; // ReferenceError if accessed outside the code block
    
}

console.log(test);

// same for loops 
for (var i = 0; i < 10; i++) {
  var one = 1;
}

console.log(i);
console.log(one);

// hoisting
function sayHi() {
  phrase = 'hello there!';

  if (false) {
    var phrase;
  }
  // even if this branch never executes, the if code block is ignored,
  // var is hoisted at the top of the sayHi function

  console.log(phrase);
}

sayHi();

// declarations are hoisted but not assignments
function example() {
  // var phrase;
  console.log(phrase);
  var phrase = 'hello';
  // phrase = 'hello';
}
example();

// function object

// when there's no way to define the name of a function
let arrayHoldingFunc = [function(){console.log('code block')}];
console.log(arrayHoldingFunc[0].name);

// length property
function f1(a) {console.log(a)};
function f2(a, b) {console.log(a + b)};
function many(a,b, ...more) {console.log(a + b + more)};

console.log(f1.length);
console.log(f2.length);
console.log(many.length);

// custom properties
function sayHiCustom() {
  console.log('hi!');
    
  sayHiCustom.counter++;
}

sayHiCustom.counter = 0;

sayHiCustom();
sayHiCustom();

console.log(`called ${sayHiCustom.counter} times`);

// NFE named function expressions
let sayHiNFE = function func(who) {
  if (who) {
    console.log(`hello, ${who}`);
  } else {
    func('guest');
  }
};

sayHiNFE();

// new function syntax
let sumB = new Function('a', 'b', 'return a + b');

console.log(sumB(1, 2));

let sayHiNew = new Function('console.log("hello")');

// setTimeout
function sayHiDelay(phrase, who) {
  console.log(phrase + ' ' + who);
}

// setTimeout(sayHiDelay, 1000, 'hello', 'rafael');

// string of code, not recommended
// setTimeout("console.log('hello rafael')", 1000);

// // arrow functions instead of strings of code
// let timerId = setTimeout(() => console.log('hello rafael'), 1000);
// // cancels the execution

// clearTimeout(timerId);
// console.log(timerId);

// // repeat with interval of 2 seconds
// let timerId2 = setInterval(() => console.log('tick!'), 2000);

// // after 5 seconds stop
// setTimeout(() => { clearInterval(timerId2); console.log('stop');}, 5000);

// nested setTimeout
// let timerId3 = setTimeout(function tick() {
// console.log('tick');
// timerId = setTimeout(tick, 2000);
// }, 2000);

// pseudocode using conditionals to increase the interval between calls
// let delay = 5000;
// let timerId4 = setTimeout(function request(){
//  // sends request
//  if (/* request failed due to server overload*/false) {
//      delay *= 2;
//  }
//  timerId4 = setTimeout(request, delay)
// }, delay);

// setTimeout without delay
setTimeout(() => console.log('world'));

console.log('hello!');

// function binding
// this is missing

let user = {
  firstName: 'rafael',
  sayHi() {
    console.log(`hello, ${this.firstName}`);
  }
};

// setTimeout(user.sayHi, 1000);
// this is what happens 
// let f = user.sayHi;
// setTimeout(f, 1000);

// wrapper solution
let userWrapper = {
  firstName: 'rafael',
  sayHi() {
    console.log(`hello ${this.firstName}`);
  }
};

// setTimeout(function() {
//    userWrapper.sayHi();
// }, 1000);

// userWrapper = {
//    sayHi() {console.log('another user in setTimeout!');}
// }

// receives user from the outer lexical environment
// setTimeout(() => user.sayHi(), 1000);

// bind built-in method
let userBind = {
  firstName: 'john',
  sayHiSolution() {
    console.log(`hello, ${this.firstName}`);
  }
};

// solution
let sayHiSolution = userBind.sayHiSolution.bind(userBind);

sayHiSolution();
setTimeout(sayHiSolution, 1000);
userBind = {
  sayHiSolution() {console.log('something else');}
};

// decorator
let car = {
  wheels: 4
};

function paint(c) {
  return function(car){
    car.color = c;
  }
};

paint('red')(car);
console.log(car);

// bindAll

function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);

console.log(double(3));

let triple = mul.bind(null, 3);

console.log(triple(3));

// arrow functions

// no this

let group = {
  title: 'our group',
  students: ['john', 'pete', 'alice'],

  showList() {
    this.students.forEach(
      student => console.log(this.title + ': ' + student)
    );
  }
};

group.showList();

/* 

showList() {
  this.students.forEach(function(student) {
    console.log(this.title + ": " + student);
  });;
};

would throw an error as undefined.title doesn't exist
this in a normal function declaration, references its own lexical environment

forEach runs functions with this=undefined
arrow functions don't have this so this is taken form the outer lexical environment where showList() lives, the group object
*/





























    