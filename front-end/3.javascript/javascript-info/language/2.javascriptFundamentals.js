console.log('hello');
/*
removing the semicolon above would throw TypeError,
js would interpret 
console.log('hello)[1,2].forEach(console.log);
*/
[1, 2].forEach(console.log);


console.log('1' + 2);
console.log('2' + 1);

console.log(Number(null));
console.log(Number(undefined));
console.log(0 == NaN);
console.log(null == undefined);
console.log(undefined == undefined);

// using OR || 
let firstName = '';
let lastName = '';
let nickName = 'supercoder';

console.log(firstName || lastName || nickName || 'anonymous');
console.log(firstName ?? lastName ?? nickName ?? 'anonymous');

// nullish coalescing operator
let user;
console.log(user ?? 'anonymous');
console.log((user !== undefined && user !== null) ? user : 'anonymous');

// || vs ??
let height = 0;
console.log(height || 100);
console.log(height ?? 100);

// while loop 
console.log('while loop - increment');
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

console.log('while loop - decrement');
// decrement
let f = 3;
while (f) {
    console.log(f);
    f--;
}

// do while loop
console.log('do while loop');
let w = 0;
do {
    console.log(w);
    w++;
} while (i < 3);

// for loop
console.log('for loop');
for (let i = 0; i < 3; i++) {
    console.log(i);
}
console.log('for loop odd numbers are 1')
for (let i = 0; i < 10; i++) {
    console.log(i % 2);
}

console.log('for loop continue')
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    console.log(i);
};

// nested loop
console.log('nested loop');
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = console.log(`value at coords (${i} ${j})`);
    }
}

// switch statement
console.log('switch statement');
let a = 2 +2;

switch (a) {
    case 3: 
        console.log('too small');
        break;
    case 4:
        console.log('exactly!');
        break;
    case 5:
        console.log('too big');
        break;
    default:
        console.log('i don\'t know such values')
}

// type in switch statements
console.log('switch statements use strict equality');
let arg = 1;
switch (arg) {
    case 0:
    case 1:
        console.log('one or zero');
        break;
    case 2:
        console.log('two');
    case 3:
        console.log('never executes!');
        break;
    default:
        console.log('unknown value');
}

// local variables / outer variables in functions
console.log('functions local/outer variables');
let userName = 'kelley';
function showMessage() {
    userName = 'rafael';
    let message = `hello ${userName}!`;
    console.log(message);
}
console.log(`the userName is ${userName} before the function call`);
showMessage();

function showMessage2(from, text = 'no text given') {
    from = '*' + from + '*';
    console.log(from + ':' + text);
}
let from = 'kelley';
showMessage2(from, 'Hello');

// default value of a parameter if not provided as an argument in the clal,
// is undefined
showMessage2('rafael');

// function as value
function sayHi() {
    console.log('hello!');
}
console.log(sayHi);

let hi = () => {console.log('hello')};
console.log(hi);

// callback functions

function ask(userAnswer, yes, no) {
    if (userAnswer) yes()
    else no();
}

function showOk() {
    console.log('you agreed!');
}
function showCancel(){
    console.log('you canceled the execution');
}

ask(1, showOk, showCancel);

// function expression equivalent using anonymous functions
ask(1, 
    function(){console.log('yes');},
    function(){console.log('no');}
);

let age = 18;


// simplifying an if statement with different outcomes 
// by calling the same function depending on the condition
let welcome = (age < 18) ?
    function() {console.log('hello');} :
    function() {console.log('greetings!');};

welcome();

// unoptimized code
let ageNot = 16;
let welcomeNot;

if (ageNot < 18) {
    welcomeNot = function() {console.log('hello!');};
} else {
    welcomeNot = function() {console.log('greetings!');};
}

welcomeNot();

// simple arrow function
let sum = (a, b) => a +b;
console.log(sum(2, 5));

// dynamically creating an anonymous function
let anonFuncAge = 18;
let welcomeAnonFuncAge = (age < 18) ?
    () => console.log('hello') :
    () => console.log('greetings!');

welcomeAnonFuncAge();

let anonArrow1 = (param1) => {console.log(param1)};
console.log(anonArrow1);
anonArrow1();





