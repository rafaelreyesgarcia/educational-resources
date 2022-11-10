// array to store a collection of data

/* 
one-dimensional array
*/
let simpleArray = ["one", 2, "three", true, false, undefined, null];

console.log(`how many items are in the array? ${simpleArray.length}`);

/* 
multi-dimensional array
array with nested arrays
arrays can also  store objects
*/

let complexArray = [
  [
    {
      one: 1,
      two: 2,
    },
    {
      three: 3,
      four: 4,
    },
  ],
  [
    {
      a: "a",
      b: "b",
    },
    {
      c: "c",
      d: "d",
    },
  ],
];

// access array's contents using bracket notation

/* 
each item has an index
javascript arrays are zero-indexed
*/

let ourArray = ["a", "b", "c"];

let ourVariable = ourArray[0];

ourArray[1] = "not b anymore";

// add items to an array with push() and unshift()

/* 
arrays are mutable, elements can be added at the start or end
push() adds elements to the end
unshift() adds elements to the beginning 
*/

let twentyThree = "XXIII";
let romanNumerals = ["XXI", "XXII"];

romanNumerals.unshift("XIX", "XX");

romanNumerals.push(twentyThree);

function mixedNumbers(arr) {
  arr.push(7, "VIII", 9);
  arr.unshift("I", 2, "three");
  return arr;
}

console.log(mixedNumbers(["IV", 5, "six"]));

// remove items from an array with pop and shift

/* 
pop()
 removes an element from the end
shift()
  removes an element from the beginning

push, unshift, pop and shift don't accept parameters
can only modify arrays one element at a time
*/

let greetings = ["whats up?", "hello", "see ya!"];

console.log(`element that got removed: ${greetings.pop()}`);

function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"]));

// remove items using splice()

/* 
splice removes any number of consecutive elements from any point in the array
can take up to 3 parameters
2 parameters are integers representing the indices or positions
start 
  index where to begin removing elements
amount
  how many elements to delete

a call to splice() modifies the given array,
but it also returns a new array containing the removed values

*/

let array = ["today", "was", "not", "so", "great"];

console.log(
  `splice() call modifies the given array, and returns removed elements : ${array.splice(
    2,
    2
  )}`
);

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.shift();
arr.splice(3, 8);

let total = 0;

for (i = 0; i < arr.length; i++) {
  total += arr[i];
}

console.log(`sum of the elements in arr after alterations: ${total}`);

// add items using splice
/* 
you can add many elements to an array using splice after the second arguments, 
all arguments are considered additions
*/

const numbers = [10, 11, 12, 12, 1];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);

function htmlColorNames(arr) {
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return arr;
}

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);

// copy array items using slice()

/* 
rather than modifying a given array,
slice copies or extract a given number of elements to a new array,
does not modify the original array
takes 2 parameters
first is index at which to begin extraction
second is index to stop extraction, excluded
*/

let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];

let todaysWeather = weatherConditions.slice(1, 3);

function forecast(arr) {
  let newArray = arr.slice(2, 4);
  return newArray;
}

console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);

// copy array with spread operator
/* 
like slice, spread operator allows us to copy all elements of an array in order

*/

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];

console.log(`copy of an array using spread syntax: ${thatArray}`);
console.log(thatArray.length);
console.log(thatArray);

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

// combine arrays with spread operator
/* 
traditional syntax can concatenate arrays
but only at the end of one and start of another
spread syntax can concatenate arrays at any given start index
*/

let someArray = ["sage", "rosemary", "parsley", "thyme"];
let anotherArray = ["basil", "cilantro", ...someArray, "coriander"];

// presence of an element indexOf()
/* 
check for the presence of an element on an array
given an element, returns the index position of that element or -1 if not found

*/

let fruits = ["apples", "pears", "oranges", "peaches", "pears"];

fruits.indexOf("dates");
fruits.indexOf("oranges");
fruits.indexOf("pears");

function quickCheck(arr, elem) {
  // return arr.indexOf(elem) >= 0 ? true : false;
  // (arr.indexOf(elem) >= 0)
  if (arr.indexOf(elem) != -1) {
    return true;
  }
  return false;
}

let vegetables = ["squash", "onions", "shallots"];
console.log(vegetables.indexOf("mushrooms"));

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

/* 
iterate through all an array's elements using for loops

every() forEach(), map() are iteration methodos for arrays
for loop is a simple control structure

*/

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);

let arrToBeFiltered = [
  [3, 2, 3],
  [1, 6, 3],
  [3, 13, 26],
  [19, 3, 9],
];

function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// create complex multi-dimensional arrays
let nestedArray = [
  ["deep"],
  [["deeper"], ["deeper"]],
  [["deeper"], [["deepest"], ["deepest"]]],
  [["deeper"], [["deepest"], [["max depth"]]]],
];

console.log(nestedArray[3][1][1][0]);

// add key value pairs to javascript objects

/* 
objects are collections of key-value pairs
they are values mapped to unique identifiers called properties (keys)
*/

const tekkenCharacter = {
  player: "Hwoarang",
  fightingStyle: "Tae Kwon Doe",
  human: true,
};

// dot notation
// used when the key identifier is known
tekkenCharacter.origin = "South Korea";
// bracket notation
// required when accessing a property with a space in the key or a variable will be used
tekkenCharacter["hair color"] = "dyed orange";

const eyes = "eye color";

tekkenCharacter[eyes] = "brown";

console.log(`tekken character: ${tekkenCharacter}`);

// modify an object nested within an object

let nestedObject = {
  id: 28802695164,
  date: "December 31, 2016",
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8,
    },
  },
};

nestedObject.data.onlineStatus.busy = 10;

// access property names with bracket notation

/*
bracket notation is useful when you don't know the property name beforehand or access has to be more dynamic 
*/

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
}

console.log(checkInventory("apples"));

// delete keyword to remove object properties

delete foods.apples;
delete foods["plums"];
delete foods["oranges"];

// check if an object has a property
/* 
hasOwnProperty()
in keyword
*/

let haveBananas = foods.hasOwnProperty("bananas");
console.log(`does the foods object contain a banana property?: ${haveBananas}`);

let haveGrapes = "grapes" in foods;
console.log(`does the foods object contain a grapes property?: ${haveGrapes}`);

let onlineUsers = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  let check =
    "Alan" in userObj &&
    "Jeff" in userObj &&
    "Sarah" in userObj &&
    "Ryan" in userObj
      ? true
      : false;
  return check;

  /* 
  return ['Alan', 'Jeff', 'Sarah', 'Ryan'].every(name =>
      userObj.hasOwnProperty(name)
    );
  
  every() method validates all names with hasOwnProperty returning true or false each iteration,
  if one iteration returns false, the whole return is false
  */
}

function isEveryoneHereOpt(userObj) {
  return ["Alan", "Jeff", "Sarah", "Ryan"].every((name) =>
    userObj.hasOwnProperty(name)
  );
}

console.log(isEveryoneHere(onlineUsers));

/* 
for in statement to iterate through keys of an object

objects don't maintain an ordering to stored keys like arrays
key's position on an object is irrelevant
for loops are not ideal for objects
for in are optimized for objects
for of are optimized for arrays
*/

for (let user in onlineUsers) {
  console.log(user);
}

const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(usersObj) {
  // Only change code below this line
  let count = 0;
  for (let user in usersObj) {
    if (usersObj[user].online == true) {
      count++;
    }
  }
  return count;
  // Only change code above this line
}

console.log(countOnline(users));

// generate an array of all object keys with Object.Keys()

/* 
Object.keys() takes an object as argument, returns an array of strings for each property
no specific order to the entries
*/

function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

console.log(`an array of users properties: ${getArrayOfUsers(users)}`);

// modify array stored in an object

/* 
passes user object
adds friend argument to the array in user.data.friends
return array
*/

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));