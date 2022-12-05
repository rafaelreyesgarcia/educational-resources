// sum all numbers in a range

function sumAll(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = max;
  for (let i = min; i < max; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([10, 5]));

// solution 1

function sumAll1(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;
}

sumAll1([1, 4]);

// solution 2

const sumAll2 = arr => {
  const startNum = arr[0];
  const endNum = arr[1];

  const numCount = Math.abs(startNum - endNum) + 1;

  const sum = ((startNum + endNum) * numCount) / 2;

  return sum;
}

// formula to calcuulate the sum of a continuous range ((startNum + endNum) * numCount) / 2

// solution 3

function sumAll3(arr) {
  let sumBetween = 0;

  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sumBetween += i;
  }

  return sumBetween;
}

// solution 4 recursive

function sumAll4(arr) {
  const [first, last] = [...arr].sort((a, b) => a - b);
  return first !== last
    ? first + sumAll([first + 1, last])
    : first; 
}

// diff two arrays

function diffArray(arr1, arr2) {
  const newArr = [];
  
  function onlyInFirst(first, second) {
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

console.log(diffArray([1, 2, 3 ,4 ,5], [1, 2, 3, 4, 5]))

// solution 2
function diffArray2(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

// solution 3
function diffArray3(arr1, arr2) {
  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }

  return [...diffArray(arr1, arr2), ...diffArray(arr2, arr1)];
}

// solution 4
function diffArray4(arr1, arr2) {
  const difference = new Set(arr1);
  arr2.forEach(elem => {
    difference.has(elem) ? difference.delete(elem) : difference.add(elem)
  });

  return Array.from(difference);
}

// seek and destroy

function destroyer(arr, ...rest) {
  return arr.filter(elem => !rest.includes(elem));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// solution 1

function destroyer1(arr) {
  const rest = Object.values(arguments).slice(1);
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    let removeElement = false;
    for (let j = 0; j < rest.length; j++) {
      if (arr[i] === rest[j]) {
        removeElement = true;
      }
    }
    if (!removeElement) {
      filteredArray.push(arr[i]);
    }
  }

  return filteredArray;
}

/* 
Object.values() returns an array
arguments is an array-like object accessible inside functions that contains the values of arguments 

created nested loops, outer loop iterates over arr
nested loop iterates over rest 

nested loop checks strictly that current arr[i] is equal to rest[j]

if value is equal in both arrays, removeElement is true

if statement checks if removeElement is false, then the arr[i] is pushed into the filtered array
*/

function destroyer2(arr) {
  const rest = Array.from(arguments).slice(1);

  return arr.filter(function(val) {
    return !rest.includes(val);
  });
}

// wherefore art thou

// solution 1
function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  
  return collection.filter(obj => {
    for (let i = 0; i < sourceKeys.length; i++) {
      if (!obj.hasOwnProperty(sourceKeys[i]) ||
        obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
          return false;
        }
    }
    return true;
  });
}

console.log(whatIsInAName([
  {
    first: 'romeo',
    last: 'montague',
  },
  {
    first: 'mercutio',
    last: null,
  },
  {
    first: 'tybalt',
    last: 'capulet',
  }
], {
  last: 'capulet',
}));

// solution 2

function whatIsInAName2(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection
    .filter(obj => {
      sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);

    });
}

// solution 3

function whatIsInAName3(collection, source) {
  const sourceKeys = Object.keys(source);
  
  return collection.filter(obj => {
    sourceKeys.map(key => obj.hasOwnProperty(key) && obj[key] === source[key])
    .reduce((a, b) => a && b);
  });
}

/* 
filter the collection array
map is called for every element in the array
for every key in sourceKeys, it will return booleans based in a condition, both key and the value must exist within the object

then we reduced the mapped boolean values to a single boolean that indicates if all sourceKeys pass the condition

that single boolean is used to filter the collection
*/

// solution 4

function whatIsInAName4(collection, source) {
  const arr = [];

  for (let i = 0; i < collection.length; i++) {
    let found = true;

    for (const sourceProp in source) {
      if (collection[i][sourceProp] !== source[sourceProp]) {
        found = false;
        break;
      }
    }
    if (found) arr.push(collection[i]);
  }
  return arr;
}


