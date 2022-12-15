# data structures

## array manipulation

### array sort

every array has access to the `sort` method

method takes an optional comparison function that will determine the resulting sort order of elements

```js
[3,2,4,1].sort(function comparison(a,b) {
    if(a < b) {
        // take a first
        return -1;
    }
    if(b < a) {
        // take b first
        return 1;
    }
    // no change is needed
    return 0;
});

[3,2,4,1].sort(function comparison(a,b) {
    return a - b;
});
```

`-1` indicates `a` should be placed in-front of `b`
`1` indicates `b` should be placed in-front of `a`

returning any positive or negative values is the same as `0` or `1` 

if `a` is less than `b` the result will be negative, placing `a` first. If `b` is less than a the result will be positive, placing `b` first

**1. descending sort**

```js
// ascending
[3,2,4,1].sort(function comparison(a,b) {
    return a - b;
});
// negative moves a first, positive moves b first, 0 keeps the order unchanged
```

**2. compare strings**

`localeCompare` is a built-in method of strings that compare 

```js
'a'.localeCompare('a'); // 0
'a'.localeCompare('b'); // -1
"apple".localeCompare("abcd"); // 1
```

`localeCompare` also can compare by case, access sensitivity and language

**3. sorting by multiple properties**

```js
const students = [
    { id: 1, graduated: true, grade: 86 },
    { id: 2, graduated: false, grade: 96 },
    { id: 3, graduated: false, grade: 78 },
    { id: 4, graduated: true, grade: 96 },
];
```

**comparing students**

1. first student graduated and second student that didn't
2. second student graduated and first didn't
3. students have same graduation status

```js
function sortStudents(students) {
  students.sort((a, b) => {
    if (a.graduated && !b.graduated) {
      return -1;
    }
    if (b.graduated && !a.graduated) {
      return 1;
    }
    return b.grade - a.grade;
  });
}
```

**4. sorting by month**

```js
const MONTHS = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

[{ event: 'dance', month: 'MAR' },
 { event: 'farmers market', month: 'JUN' },
 { event: 'parade', month: 'JAN' }]
```

`Array.prototype.indexOf`

method will return a number greater than or equal to zero indicating the index of the element or a negative one indicating the element wasn't found

```js
const MONTHS = ["JAN", "FEB", "MAR"];

console.log( MONTHS.indexOf("JAN") ); // 0
console.log( MONTHS.indexOf("MAR") ); // 2

console.log( MONTHS.indexOf("go fish") ) // -1
```

`indexOf` is case sensitive

```js
const fruit = ["apples", "oranges"]

console.log( fruit.indexOf("APPLES") ); // -1

```

### array map

`map` allows to take each element of an array, apply a function to it and transforming the element into the result of that callback

a function that adds 1 to an argument can be replicated to each element with the map method

```js
const arr = [3,4,5];

const newArr = arr.map(function(x) {
    return x + 1;
});

console.log( newArr ); // [4,5,6]
```

**1. plus one**

`map` is stored on `Array.prototype`

every array has access to this method

```js
const array = [1, 3, 5];

const result = array.map(function(x) {
    return x * 2;
});

console.log(result); // [2, 6, 10]

function plusOne(arr) {
  return arr.map(elem => {
    return elem += 1;
  });
}
```

an anonymous function is passed to map where each element is multiplied by two and returned

**2. mapping a function**

an anonymous or named function can be used as callback to `map`

```js
function addOne(x) {
    return x + 1;
}

const result = [1,2,3].map(addOne);

console.log(result); // [2,3,4]

const absolutes = [-1, 1, -2, 2].map(Math.abs);

console.log(absolutes); // [1,1,2,2]
```

`Math.abs` returns the absolute value of an argument, in this case, each element of the array that invokes `map`

**3. square**

square is the result of multiplying a number by itself

```js
squared(1); // 1
squared(2); // 4
squared(3); // 9
```

**4. squared map**

```js
function squaredMap(arr) {
    return arr.map(squared);
}
```

**5. add score**

mapping over objects is possible

```js
const users = [
    { name: 'Corey', loggedIn: true },
    { name: 'Anna', loggedIn: false }
];

const loggedOutUsers = users.map(function(user) {
    return {
        name: user.name,
        loggedIn: false
    }
});
```

both objects will have the same name as before, but the `loggedIn` property will be `false` for both

**6. add score index**

when using `map` we can also access to the index (position) of the element.

```js
[10, 20, 30].map(function(el, i) {
    console.log(i);
});
```

logs 0 1 and 2 as those are the indexes of the elements the `map` function iterated over

an index is useful when we want to modify an element based on its position

always return something or the element will be undefined

### array filter

**1. array filtering**

```js
const ones = [1,2,3,1,1].filter((function(el) {
    return (el === 1);
}));

```
filtering an array is done through passing a callback function that evaluates a condition against the element, if the expression is true, the element is added in the filtered array.

**2. only true**

given an array of booleans, keep only true values

```js
return array.filter((elem) => {
    return elem;
  });
```

**3. filtering strings**

measure the string size with `length`

```js
const size = "abc".length;

console.log(size); // 3
```

**4. filtering objects**

```js
const teams = [
    { name: 'Mets', wins: 86 },
    { name: 'Braves', wins: 97 },
    { name: 'Dodgers', wins: 106 }
];

const lessThan100 = teams.filter(function(team) {
    return team.wins < 100;
});
```

**5. filter by index**

```js
['a','b','c'].filter(function(el, i) {
    console.log(el, i);
});

function firstThree(array) {
  return array.filter((elem, i) => {
    return i < 3;
  });
}
```

**6. unique**

find only unique strings

```js
const strings = ['a', 'b', 'a'];

strings.indexOf('a'); // 0
strings.indexOf('b'); // 1
```

`indexOf` returns the first index of the element found in the array

### array reduce

`Array.prototype.reduce` takes an `accumulator` and `currentValue`

`reduce` is used when an array of elements should be combined into a single value or object

**1. sum**

we could sum all the elements of an array and return the resulting value

the `accumulator` is the sum after each iteration. the value accumulated or carried through the function.

when a value is returned in the `reduce` function, it will become the `accumulator` the next iteration.

`currentValue` is each element in each iteration

`[1, 2, 4]`

is reduced to sum `7`

**first iteration**

`accumulator` is 1 and `currentValue` is 2

**second iteration**

after 1 is added to 2 and returns, the value 3 will be the `accumulator` and the `currentValue` will be 4

if an accumulator is not provided at the beginning of reduce, the value of the first element is taken as the accumulator and the first iteration starts in the second element.

**2. largest value**

reducing an array `[1, 4, 2, 5]` to the largest value (5)

3 iterations, first iteration accumulator is 1, current value is 4

comparing the accumulator and currentValue can return the largest number

accumulator becomes the returned result, and the next iteration repeats until the largest number is found at the last iteration

**ternary operator**

```js
(x > y ? x : y)

function largest(numbers) {
  return numbers.reduce((accumulator, currentValue) => {
    return accumulator < currentValue ? currentValue : accumulator; 
  });
}
```

**3. largest positive**

returns largest positive number
if there's no positive number, return 1

`initialValue` can be provided for the first iteration

second argument of the reduce function

```js
[-1,-2,-4].reduce(function() {
    // reduce logic

}, 1 /* <--- initial value */)
```

**4. remove duplicates**

iteration 1

- accumulator []
- currentValue 2
- 2 is not in the accumulator so its added

iteration 2

- accumulator [2]
- currentValue 3
- 3 is not in the accumulator so its added

iteration 3

- accumulator [2, 3]
- currentValue 2
- 2 is already in array, so is not included again

`indexOf` can be used or `includes`

`indexOf` uses strict equality 

`includes` uses SameValueZero comparison algorithm instead of strict equality. more modern method.

```js
[NaN].indexOf(NaN) > -1 // false as NaN is not found
[NaN].includes(NaN) // true
```

**5. group**

grouping with reduce

given an array of fruit objects, reduce it to an object with properties holding an array of the type of foods

object groups fruits by their type

```js
[
    { food: 'apple', type: 'fruit' }, 
    { food: 'orange', type: 'fruit' }, 
    { food: 'carrot', type: 'vegetable' }
]

{ 
     fruit: ['orange', 'apple'], 
     vegetable: ['carrot'] 
}
```

**6. is unique**

in the reduce function you also have access to the index of the element in each iteration

```js
['a','b','c'].reduce((a,c,i) => {
    console.log(c,i); 
});

const arr = [1,2,3,1];
console.log(arr.indexOf(1)); // 0

arr.indexOf(currentValue) !== index // if true, we know the number must exist somewhere else earlier in the array
```

## building data structures

### recursion

**1. base case**

recursive function is one that calls itself

```js
// callstack overflow
function countdown(n) {
    countdown(n - 1);
}
```

there's no base case in the previous function

the base case is where you stop recursing

```js
function countdown(n) {
    if(n === 0) {
        console.log('countdown complete!');
        return;
    }

    countdown(n - 1);
}

factorial (4); // 4 * 3 * 2 * 1 = 24

console.log( factorial(1) ); // 1
```

**2. second case**

the factorial for an integer is itself multiplied by every positive integer below

factorial of 2 is `2 * 1`

```js
2 * factorial(1);
```

factorial of 3 is `3 * 2 * 1`

**3. general recursion**

`factorial(3)`

3 * (2 * 1)

`3 * factorial(2)`

`factorial(4)`

4 (3 * 2 * 1)

`4 factorial(3)`

the factorial of each `n` is the `n` multiplied by factoria of `n - 1`

`n * factorial(n - 1)`

**summation**

return the sum of all positive numbers less than or equal to a number

```js
function summation(n) {
    if(n < 1) return 0;

    return n + summation(n - 1);
}
```

**4. walk nodes**

a function that will find the last node in a list of nodes

a node has two properties `id` and `next`(reference to another node)

```js
// given a node, we can find node2 by using next
const node2 = node.next;

// node2 has its own id and next node reference
console.log(node2); // {id: 2, next: {…}}

// we can find node3 by using next on node2
const node3 = node2.next;

// node3 also has its own id and next node reference
console.log(node3); // {id: 3, next: {…}}

console.log( node5.next ); // undefined
```

each node points to the next until eventually the last node doesn't point to anythin else, this can be a base case

```js
function walk(node) {
  if (node.next === undefined) {
    return node;
  }
}

```

**5. walk recursive**

```js
walk({id: 1, next: {…}}); 
    walk({id: 2, next: {…}}); 
        walk({id: 3, next: {…}}); 
            walk({id: 4, next: undefined}); 
```

### stacks

**1. push and pop**

a stack is a LIFO (last in, first out) data structure.

we `push` elements to the top of the stack

we `pop` elements from the top of the stack

**LIFO**

last-in first-out

the order in which elements move in and out of the stack data structure

```js
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.pop()); // 4
console.log(stack.pop()); // 3
```

array contain `push` and `pop` methods

```js
const arr = [1,2,3];

arr.push(4);

console.log(arr); // [1,2,3,4]

const top = arr.pop();

console.log(top); // 4
console.log(arr); // [1,2,3]
```

**2. overflow and underflow**

condition where the maximum memory size of the stack is exceeded

once the stack has reached its max size, any `push` will result in an **overflow**

similarly, when there's no elements left to `pop` and we use the method, we get **underflow**

**recursive call stack error**

```js
function myFunction() {
    myFunction();
}
// make the initial call
myFunction();
```

this function invokes itself without any base case, so the call stack will just continue growing as each execution context doesn't return just continues building up until eventually the call stack overflows as there's no memory to hold any more data.

**3. isEmpty and Peek**

helper function in the `Stack` class 
- `isEmpty` should tell us if we have elements in our items
- `peek` allows to look up what's on top of the stack without popping it off.

**4. operations manager**

in `operationsManager.js` we'll use the created stack

`operations` and `undo` will be instances of the `Stack` class

use `this` to refer to the instance and create the instance variable for both stacks

`AddOperation` function will take the operation argument and add it to the top of the `operations` stack

example use of operations manager

```js
const manager = new OperationsManager();

console.log( manager.operations.isEmpty() ); // true

manager.addOperation({ drawingType: 'dot', x: 50, y: 20 });

console.log( manager.operations.isEmpty() ); // false

class OperationManager {
  constructor() {
    this.operations = new Stack();
    this.undos = new Stack();
  }

  addOperation(operation) {
    this.operations.push(operation);
  }
}
```

**5. undo and redo**

when you undo a mistake it is the most recent operation (LIFO model that stack follows)

when you redo you `pop` an undo element from the top

```js
undo() {
  this.undos.push(this.operations.pop());
}

redo() {
  this.operations.push(this.undos.pop());
}
```

**6. redo all**

implement a function to redo all operations (pop all elements from the `undos` array) and push them back to the `operations` array

### linked list node

before creating a link list we need to create a node

each node keeps a reference to the next node, if there is no `next` node the value will be `null`

goals
- add `constructor` function that takes `data` argument
- store `data` on the node instance
- add property `next` to the node instance, set it to null

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const node = new Node(4);

console.log(node.data); // 4
console.log(node.next); // null
```

**2. linked list**

we need to keep track of the `head` the first node in the linked list

the `head` will keep a reference to the `next` node until the end of the list

```js
const linkedList = new LinkedList();

console.log(linkedList.head); // null
```

**3. add first node to the list**

after creating the `Node` class and the `LinkedList` class, we create a method to add a node to the front of the linked list

the first node becomes the head of the node

**no existing head node**

when there's no existing head node, we just set the new node as the head on the linked list

**existing head node**

- set `next` to the current `head`
- set `head` to the new node added

```js

addFirst(node) {
    node.next = this.head;
    this.head = node;
  }

const linkedList = new LinkedList();

linkedList.addFirst( new Node(1) );

console.log(linkedList.head.data); // 1

linkedList.addFirst( new Node(2) );

console.log(linkedList.head.data); // 2
console.log(linkedList.head.next.data); // 1
```
**4. add last**

we can also add nodes to the back of a list

**no existing head**

if there's no head, `addFirst` logic is the same as `addLast`

**existing head node**

we need to start at the `head` and count down the list until we reach a point where there's no `next` node, then we set `next` to our new node

**5. indexOf**

`indexOf` can be a custom zero based method that can be used in our class.

the head is 0 and evey following index is incremented by one

`===` strict equality will return true when comparing objects that are stored in the same place in memory

```js
indexOf(node) {
  let id = 0;
  let ref = this.head;

  do {
    if (ref === node) {
      return id;
    }
    ref = ref.next;
    id++;
  } 
  while(ref)
}

const node1 = new Node(4);
const node2 = new Node(3);
const linkedList = new LinkedList();

linkedList.addLast(node1); // node1 
linkedList.addLast(node2); // node1 --> node2

console.log(linkedList.indexOf(node1)); // 0
console.log(linkedList.indexOf(node2)); // 1
```

**6. remove at**

remove a node from the list and then fix the node `next` reference

**remove the head node**

if we are removing the node at index 0 then the new head node can be set to `next` node that the original head was pointing to

if the original node had no `next` the `head` becomes `null`

if the original head node had a `next` reference it would become the new head node

**removing a non-head node**

removing a node in between nodes requires to connect them 

```js

removeAt(index) {
  if (index === 0) {
    this.head = this.head.next;
    return;
  }
  let id = 0;
  let node = this.head;

  while (id < index - 1) {
    node = node.next;
    id++;
  }

  node.next = node.next.next;
}
```

## practice problems

### deep retrieval

retrieve a value in an arbitrary nesting level

```js
{
  prop: {
      prop: {
          prop: 3
      }
  }
}

{
  prop: 3
}
```
