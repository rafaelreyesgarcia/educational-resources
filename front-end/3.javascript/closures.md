# closures

combination of a function bundled together with references to its surrounding state (lexical enviroment)

closure gives access to an outer function's scope from an inner function

closures are created every time a function is created.

## lexical scoping

```js
function init() {
  var name = 'rafael';

  function displayName() {
    // inner function
    // no local variables
    console.log(name); 
  }

  
  
  displayName();
}

init();
```

lexical scoping uses the location where a variable is declared to determine available variables to be used

nested functions have access to variables declared in their outside scope

## es6 scoping

before ES6, there was only function scope and global scope

- `var` declarations were either function or global scoped

blocks with curly braces don't create scopes unlike in java and C

```js
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}

console.log(x);
```

- `let` and `const` declarations allow to create block scoped variables
- **temporal dead zones** also allow this
- modules are another kind of scope

## closure

```js
function makeFunc() {
  const name = 'rafael';

  function displayName() {
    console.log(name);
  }

  return displayName;
}

const myFunc = makeFunc();
myFunc(); // rafael
```

- functions in javascript form closures
- closure is the combination of a function and the lexical environment within which that function was declared.
- lexical environment consists of any local variables and arguments that were in-scope at the time the closure was created
- `myFunc` is a reference to the instance of the `displayName` function
- the instance maintains a reference to its lexical environment where the `name` variable is stored

```js
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));
```

`makeAdder` is a function factory. it creates functions that can add specific value to their argument.

- `add5` and `add10` are both closures.
- they both share the same function definition but store different lexical environments.

## practical closures

closures let you associate data with a function that operates on that data

parallel to object-oriented programming, where objects associate dat (properties) with one or more methods.

closures can be used where you normally use an object with a single method.

much of front-end javascript is event-based (trigerred by the user)

code is attached as a callback in response to the event

buttons to interactively change text size

```js
function makeSize(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}

const size12 = makeSize(12);
const size14 = makeSize(14);
const size16 = makeSize(16);

document.getElementById('size-12').onClick = size12;
document.getElementById('size-14').onClick = size14;
```

## emulating private methods with closures

private methods in java for example, mean they can only be called by other methods in the same class

js prior to classes, didn't have a native way to declare a private method, but closure was used to emulate them

```js
// immediately invoked function expression
const counter = (function () {
  let privateCounter = 0;
  
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1)
    },

    value() {
      return privateCounter;
    },
  };
})();

console.log(counter.value());

counter.increment();

counter.console.log(counter.value());
```

a single lexical environment is shared by the three functions

the shared lexical environment is created in an anonymous function that is executed immediately as an IIFE

- `changeBy` is a private function declaration
- `privateCounter` is a private variable storing a number

```js
// each instance will have independent state from one another
const counter1 = makeCounter();
const counter2 = makeCounter();
```

- data hiding and encapsulation is achieved through closures

## closure scope chain

closures have 
- local scope (own)
- enclosing scope (block, function or module)
- global scope

if an outer function is itself a nested function, accessing the outer function's scope includes enclosing scope of outer, creating a chain of scopes

```js
const e = 10;

function sum(a) {
  return function(b) {
    return function(c) {
      return function(d){
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4));

// named functions

function namedSumChain(a) {
  return function sum2(b) {
    return function sum3(c) {
      return function sum4(d) {
        return a + b + c + d + e;
      };
    };
  };
}

const sum2 = namedSumChain(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const finalSum = sum4(4);

console.log(finalSum);
```

closures capture block and module scope variables

```js
function outer() {
  const x = 5;

  if (Math.random() > 0.5) {
    const y = 6;
    return () => console.log(x, y);
  }
}

outer()();
```

closure over modules

```js
let x = 5;
export const getX = () => x;
export const setX = (val) => {
  x = val;
}
```
- exports a pair of getter-setter functions
- close over the module-scoped variable `x`
- `x` is not directly accessible from other modules but can be read and written with the getter-setter functions

```js
import { getX, setX } from './myModule.js';

console.log(getX()); // 5

setX(6);

console.log(getX()); // 6
```

- closures can close over imported values (live bindings)
- when live binding values change, the imported one changes accordingly

```js
// module.js
export let x = 1;
export const setX = (val) => {
  x = val;
}

// closureCreator.js
import { x } from './module.js';

export const getX = () => x; // close over an imported live binding

import { getX} from './closureCreator.js';
import { setX } from './module.js';

console.log(getX()); // 1

setX(2);

console.log(getX()); // 2

```

## closures in loops - a mistake

```html
<p id="help"> helpful notes appear here </p>
<p>
  e-mail:
  <input type="text" id="name" name="name">
</p>
<p>
  name:
  <input type="text" id="name" name="name">
</p>
<p>
  age:
  <input type="text" id="age" name="age">
</p>
```

```js
function showHelp(help) {
  document.getElementById('help').textContent = help;
}

function setupHelp() {

  var helpText = [
    {id: 'email', help: 'your email address'},
    {id: 'name', help: 'full name'},
    {id: 'age', help: 'age (must be over 16)'},
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];

    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    };
  }
}

setupHelp();
```

- `helpText` has 3 objects associated with the id of an input field
- loop cycles through these definitions hooking up `onfocus` to each one 
- 3 closures have been created but they all shared a lexical environment
- the value of `item.help` is determined when `onfocus` callbacks are executed.
- loop already finished by that time so the `item` variable object has been left pointing to the last entry in `helpText`

refactoring code to a function factory

```js
function showHelp(help) {
  document.getElementById('help').textContent = help;
}

function makeHelpCallback(help) {
  return function() {
    showHelp(help);
  };
}

function setupHelp() {
  
  var helpText = [
    {id: 'email', help: 'email address'},
    {id: 'name', help: 'full name'},
    {id: 'age', help: 'age (must be over 16)'},
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();

```

- rather than callbacks sharing a single lexical environment, `makeHelpCallback` creates a new lexical environment for each function.

anonymous closure with IIFEE

```js
for (var i =  0; i < helpText.length; i++) {
  (function () {
    var item = helpText[i];

    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    };

  })();
}
```

closures binding block-scoped variables

```js
for (let i = 0; i < helpText.length; i++) {
  const item = helpText[i];
  
  document.getElementById(item.id).onfocus = () => {
    showHelp(item.help);
  };
}
```

using `forEach` to attach an event listener to each `input`

```js

helpText.forEach(function(text) {
  document.getElementById(text.id).onfocus = function() {
    showHelp(text.help);
  };

});
```

## performance considerations

- each function instance manages its own scope and closure
- unnecessary to create functions within other functions if closure is not needed
- processing speed and memory consumption will be impacted if closure is implemented but not needed

```js
function myObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function() {
    return this.name;
  };

  this.getMessage = function() {
    return this.message;
  }
}
```

rewrote

```js
function myObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}

myObject.prototype = {
  getName() {
    return this.name;
  }, 
  getMessage() {
    return this.message;
  }
};
```

appending to the prototype instead of redefining the prototype

```js
function myObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}

myObject.prototype.getName = function() {
  return this.name;
};

myObject.prototype.getMessage = function() {
  return this.message;
}
```

