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

