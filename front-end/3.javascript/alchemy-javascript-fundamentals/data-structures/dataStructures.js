// array sort

// 1. ascending sort
function sortUp(array) {
  array.sort(function comparison(a,b) {
      return a - b;
  });
}

// 2. descending sort
function sortDown(array) {
  array.sort(function comparison(a, b) {
      return b - a;
  })
}

// 3. strings ascending

function sortStringsUp(array) {
  array.sort((a,b) => {
      return a.localeCompare(b);
  });
}

// 4. strings descending

function sortStringsDown(array) {
    array.sort((a,b) => {
      return b.localeCompare(a);
    });
}

// 5. sort students

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

// 6. sorting by month

const MONTHS = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];
const events = [
  { event: 'haunted hayride', month: 'OCT' },
  { event: 'holiday party', month: 'DEC' },
  { event: 'picnic', month: 'SEP' },
  { event: 'dance', month: 'MAR' },
  { event: 'snowball fight', month: 'FEB' },
  { event: 'farmers market', month: 'JUN' },
  { event: 'parade', month: 'JAN' },
];

function sortByMonth(events) {
  events.sort((a, b) => {
    return MONTHS.indexOf(a.month) - MONTHS.indexOf(b.month);
  });
  return events;
}

console.log(sortByMonth(events));

// ARRAY MAP

// 1. plus one

function plusOne(arr) {
  return arr.map(elem => {
    return elem += 1;
  });
}

console.log(plusOne([0, 1, 2]));

// 2. square root

function squareRoot(arr) {
  return arr.map(Math.sqrt);
}

const result = squareRoot([2,4,9]);

console.log( result ); // [1,2,3]

// 3. squared
/**
 * Given a number n, square it.
 *
 * @param {number} n 
 * @return {number} n squared
 */
function squared(n) {
  return n * n;
}

console.log(squared(2));

// 4. squared map
function squaredMap(arr) {
    return arr.map(squared);
}

console.log(squaredMap([2, 4, 6, 9]));

// 5. add score

/* 
each player is an object with
id
score
*/
function addScore(players) {
  return players.map((player) => {
    return {
      id: player.id,
      score: player.score += 10,
    }
  });
}

const a = addScore([
  { id: 0, score: 5 },
  { id: 1, score: 20 }
]); 

console.log(a); // [{id: 0, score: 15},{id: 0, score: 30}]

// 6. add score index

function addScoreIndex(players) {
  return players.map((player, i) => {
    if (i < 3) {
      return {
        id: player.id,
        score: player.score += 10,
      }
    } else {
      return {
        id: player.id,
        score: player.score
      }
    }
  });
}

console.log(addScoreIndex([
  {id: 0, score: 5},
  {id: 1, score: 20},
  {id: 2, score: 10},
  {id: 3, score: 10}
]));

// solution

function addScoreSolution(arr) {
  return arr.map((x, i) => {
      if(i <= 2) {
          x.score += 10;
      }
      return x;
  });
}

// ARRAY FILTER

// 1. less than 5

function lessThanFive(array) {
    return array.filter((elem) => {
      return elem < 5;
    });
}

console.log(lessThanFive([1, 4, 5, 8, 3, 9, 2]));

// 2. only true

function onlyTrue(array) {
  return array.filter((elem) => {
    return elem;
  });
}

console.log(onlyTrue([true, false, false, true]));

// 3. short strings

function shortStrings(array) {
  return array.filter((elem) => {
    return elem.length <= 3;
  });
}

// 4. top students

const students = [
  { name: 'David', grade: 90 }, 
  { name: 'Daisy', grade: 100 },
  { name: 'Darcie', grade: 80 }
];

function topStudents(array) {
  return array.filter((elem) => {
    return elem.grade >= 90;
  });
}

const onlyTop = topStudents(students);

console.log(onlyTop); 
/*
*  [
*    { name: 'David', grade: 90 }, 
*    { name: 'Daisy', grade: 100 }
*  ]
*/

// 5. first three

function firstThree(array) {
  return array.filter((elem, i) => {
    return i < 3;
  });
}

// 6. unique

function unique(array) {
  return array.filter((str, i) => {
    return array.indexOf(str) === i;
  });
}

// ARRAY REDUCE

// 1. sum

function sum(numbers) {
  return numbers.reduce((accumulator, currentValue) => {
      return accumulator += currentValue;// <-- sum the numbers here!
  });
}

// 2. largest

function largest(numbers) {
  return numbers.reduce((accumulator, currentValue) => {
    return accumulator < currentValue ? currentValue : accumulator; 
  });
}

// 3. largest positive

function largestPositive(numbers) {
  return numbers.reduce((accumulator, currentValue) => {
  return accumulator < currentValue ? currentValue : accumulator; 
}, 1);
}

// 4. removing duplicates

function removeDuplicates(numbers) {
  return numbers.reduce((accumulator, currentValue) => {
      // TODO: reduce logic
    if(accumulator.indexOf(currentValue) === -1) {
      accumulator.push(currentValue);
    } return accumulator;
  }, []/* TODO: add initial value */ );
}

// 5. grouping with reduce

function group(foods) {
  return foods.reduce((accumulator, currentValue) => {
      // TODO: reduce logic
    accumulator[currentValue.type] = accumulator[currentValue.type] || [];
    accumulator[currentValue.type].push(currentValue.food);
    return accumulator;
  }, {} /* TODO: add initial value */ );
}

const fruitsArray = [
  { food: 'apple', type: 'fruit' }, 
  { food: 'orange', type: 'fruit' }, 
  { food: 'carrot', type: 'vegetable' }
];

/* 
first iteration

accumulator {}
current value {food: apple, type: fruit}

{}.fruit = {}.fruit || []; false, so empty array is created
[].push(apple);
return {
  fruit: [apple]
}

second iteration
accumulator {fruit: [apple]}
currentValue {food: orange, type: fruit}

{fruit: [apple]}.fruit = [apple] || [] true so no empty array is created
[apple].push(orange);
return {
  fruit: [apple, orange]
}

third iteration
accumulator {fruit: [apple, orange]}
currentValue {food: carrot, type: vegetable}

{fruit: [apple, orange]}.vegetable = undefined || []; 
[].push(carrot);
return {
  fruit: [apple, orange],
  vegetable: [carrot],
}
*/

// 6. allUnique

function allUnique(numbers) {
  return numbers.reduce((accumulator, currentValue, index) => {
      if (numbers.indexOf(currentValue) !== index) {
        return !accumulator;
      } return accumulator;
  }, true);
}

console.log(allUnique([1, 2, 3, 1]));

// solution
function allUniqueSolution(numbers) {
  return numbers.reduce((accumulator, currentValue, index) => {
      if (!accumulator) return false;
      return numbers.indexOf(currentValue) === index;
  }, true);
}

// BUILDING DATA STRUCTURES

// recursion

// 1. base case

function baseCase(n) {
  if (n === 1) {
    return 1;
  }
}

// 2. second case

function factorial2(n) {
  if (n === 1) {
    return 1;
  }
  return 2 * factorial2(1);
}

// 3. recursion

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

// 4 walk

function walk(node) {
  if (node.next === undefined) {
    return node;
  }
}

const aNode = walk({ id: 1, next: undefined }); 

console.log(aNode); // { id: 1, next: undefined }

// walk recursive

// 5. walk recursive

function walkRecursive(node) {
  if (node.next === undefined) {
    return node;
  }
  return walkRecursive(node.next);
}

// STACKS

// 1. push and pop
// 2. overflow and underflow
// 3. isEmpty and Peek

// const { MAX_STACK_SIZE } = require('./config');

const MAX_STACK_SIZE = 50;

class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    if (this.items.length === MAX_STACK_SIZE) {
      throw new Error('stack overflow!');
    }
    this.items.push(item); 
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error('stack underflow!');
    }
    return this.items.pop();
  }
  isEmpty() {
      return this.items.length === 0;
  }
  peek() {
      return this.items[this.items.length - 1];
  }
}

// 4. operations manager

class OperationManager {
  constructor() {
    this.operations = new Stack();
    this.undos = new Stack();
  }

  addOperation(operation) {
    this.operations.push(operation);
  }

  undo() {
    this.undos.push(this.operations.pop());
    // const operation = this.operations.pop();
    // this.undos.push(operation);
  }

  redo() {
    this.operations.push(this.undos.pop());
    // const operation = this.undos.pop();
    // this.operations.push(operation);
  }

  redoAll() {
      while(!this.undos.isEmpty()) {
        this.redo();
      }
  }
}

// LINKED LISTS

// 1. node

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const node = new Node(4);

console.log(node.data); // 4
console.log(node.next); // null

// 2. linked list
// 3. add first
// 4. add last

class LinkedList {
  constructor() {
    this.head = null;
  }
  addFirst(node) {
    node.next = this.head;
    this.head = node;
  }
  addLast(node) {
    if (!this.head) {
      this.head = node;
      return;
    }

    let ref = this.head;

    while(ref.next) ref = ref.next;

    ref.next = node;
  }
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
}

const linkedList = new LinkedList();

console.log(linkedList.head); // null

// PRACTICE

// 1. deep retrieval

// retrieve a prop that is deeply nested within objects
// i.e. { prop: { prop: { prop: 3 }}} => 3
function deepRetrieval(obj) {
    if (typeof obj.prop !== 'object') {
      return obj.prop
    }
    return deepRetrieval(obj.prop);
}

