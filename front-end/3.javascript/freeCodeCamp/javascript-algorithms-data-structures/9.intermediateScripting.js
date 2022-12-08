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

function spinalCase(str) {
  let regex = /\s+|_+/g;

  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  return str.replace(regex, '-').toLowerCase();
}

let string = 'This Is Spinal Tap';

console.log(spinalCase(string));


// solution 2

function spinalCase2(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  
  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join('-');
}

// solution 3

function spinalCase3(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase();
}

// pig latin

function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);

  return myConsonants !== null
    ? str
      .replace(consonantRegex, "")
      .concat(myConsonants)
      .concat('ay')
    : str.concat("way");
}

console.log(translatePigLatin('consonant'));

// search and replace

function myReplace(str, before, after) {
  const strArr = str.split(" ");
  const [wordToReplace] = strArr.filter(item => item === before);
  const replacement = wordToReplace[0] === wordToReplace[0].toUpperCase()
    ? after[0].toUpperCase() + after.slice(1)
    : after[0].toLowerCase() + after.slice(1);
  return strArr.map(item => (item === before ? replacement : item)).join(" ");
}

// DNA pairing

function pairElement(str) {
  // Function to match each character with the base pair
  let matchWithBasePair = function(char, pairedArray) {
    switch (char) {
      case "A":
        pairedArray.push(["A", "T"]);
        break;
      case "T":
        pairedArray.push(["T", "A"]);
        break;
      case "C":
        pairedArray.push(["C", "G"]);
        break;
      case "G":
        pairedArray.push(["G", "C"]);
        break;
    }
  };

  // Find pair for every character in the string
  const paired = [];
  for (let i = 0; i < str.length; i++) {
    matchWithBasePair(str[i], paired);
  }

  return paired;
}

// solution 2
function pairElement2(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}

// missing letters

function fearNotLetter(str) {
  let currCharCode = str.charCodeAt(0);
  let missing = undefined;

  str
    .split("")
    .forEach(letter => {
      if (letter.charCodeAt(0) === currCharCode) {
        currCharCode++;
      } else {
        missing = String.fromCharCode(currCharCode);
      }
    });

  return missing;
}

console.log(fearNotLetter('abce'));

// sorted union
function uniteUnique(...arr) {
  return [...new Set(arr.flat())];
}

// solution 2
function uniteUnique2() {
  return [...arguments]
    .flat()
    .filter((item, ind, arr) => arr.indexOf(item) === ind);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// convert HTML entities
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

console.log(convertHTML("Dolce & Gabbana"));

// sum all odd fibonacci numbers

function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;

  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

console.log(sumFibs(4));

// sum all primes
function sumPrimes(num) {
  // Check all numbers for primality
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0))
      primes.push(i);
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}

// smallest common multiple
function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // Largest possible value for SCM
  const upperBound = range.reduce((prod, curr) => prod * curr);
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    const divisible = range.every((value) => multiple % value === 0);
    if (divisible) {
      return multiple;
    }
  }
}

smallestCommons([1, 5]);

// drop it

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});

// steamroller
function steamrollArray(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]);

// solution 2
function steamrollArray2(val,flatArr=[]) {
  val.forEach(item => {
    if (Array.isArray(item)) steamrollArray(item, flatArr);
    else flatArr.push(item);
  });
  return flatArr;
}

// binary agents

function binaryAgent(str) {
  return String.fromCharCode(
    ...str.split(" ").map(function(char) {
      return parseInt(char, 2);
    })
  );
}

// test here
binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

// everything be true

function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  let counter = 0;
  // Check for each object
  for (let c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");

// solution 2
function truthCheck2(collection, pre) {
  return collection.every(function (element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

// solution 3
function truthCheck3(collection, pre) {
  // Is everyone being true?
  return collection.every(obj => obj[pre]);
}

// arguments optional

function addTogether() {
  const [first, second] = arguments;
  if (typeof(first) !== "number")
    return undefined;
  if (arguments.length === 1)
    return (second) => addTogether(first, second);
  if (typeof(second) !== "number")
    return undefined;
  return first + second;
}

// make a person

const Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

const bob = new Person("Bob Ross");
console.log(bob.getFullName());

class PersonClass {
  constructor(firstAndLast) {
    let fullName = firstAndLast;

    this.getFirstName = function () {
      return fullName.split(" ")[0];
    };

    this.getLastName = function () {
      return fullName.split(" ")[1];
    };

    this.getFullName = function () {
      return fullName;
    };

    this.setFirstName = function (name) {
      fullName = name + " " + fullName.split(" ")[1];
    };

    this.setLastName = function (name) {
      fullName = fullName.split(" ")[0] + " " + name;
    };

    this.setFullName = function (name) {
      fullName = name;
    };
  }
}

// map the debris

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;
  const newArr = [];

  const getOrbPeriod = function(obj) {
    const c = Math.pow(earthRadius + obj.avgAlt, 3);
    const b = Math.sqrt(c / GM);
    const orbPeriod = Math.round(a * b);
    // create new object
    return {name: obj.name, orbitalPeriod: orbPeriod};
  };

  for (let elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}