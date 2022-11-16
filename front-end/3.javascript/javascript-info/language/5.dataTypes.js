// NUMBERS
/* 
toString(base)
*/
    
let num = 255;

console.log(num.toString(16));
console.log(num.toString(2));

/* 
shorten URLs with base=36
*/
let longNumId = 13495;
    
console.log(longNumId.toString(36));

let numLimit = 1e309;
    
console.log(numLimit);

/* 
cut decimals
multiply/divide
*/

let numDM = 1.23456;
    
console.log(Math.round(num * 100) / 100);
// 1.23456 => 123.456 => 123 => 1.23

// format to store numbers in JS PHP Java C Ruby Perl
console.log(9999999999999999);

/* 
NaN
isFinite()
isNaN()
Number.isNaN()
Number.isFinite()
*/

/* 
parseInt
parseFloat
*/


// STRINGS
/* 
representing characters as strings
*/
    
console.log('\u00A9');
console.log('\u{20331}');
console.log('\u{1F60D}');

/* 
accessing characters
*/

let str = 'Hello';

console.log(str[0]);
console.log(str.charAt(0));
console.log(str[str.length - 1]);

/* 
strings are immutable
solution
    reassign the variable containing the original string,
    to a new string
*/

let strMod = 'Hi';

str = 'h' + str[1];

/* 
looping an indexOf to find all ocurrences of a substring in a string
*/

let strSource = 'as sly as a fox, as strong as an ox';
let substrTarget = 'as';

let pos = 0;
while (true) {
  let foundPos = strSource.indexOf(substrTarget, pos);
  if (foundPos == -1) break;

  console.log(`found at ${foundPos}`);
  pos = foundPos + 1;
}

console.log(strSource.length);

/* 
same algorithm but shorter
*/

let strSourceOptimized = 'as sly as a fox, as strong as an ox';
let substrTargetOptimized = 'as';

let posOptimized = -1;
while ((posOptimized = strSourceOptimized.indexOf(substrTargetOptimized, posOptimized + 1)) != -1) {
  console.log(`Found at ${posOptimized}`);
}

/* 
bitwise NOT operator

*/
    
console.log(~2);

/* 
str.slice
str.substring
str.substr
*/

let strExample = 'stringify';

console.log(strExample.substring(2, 6));
console.log(strExample.slice(2, 6));
console.log(strExample.substr(2, 4));

// UTF-16 encoding characters

let Z = 'Z';
    
console.log(Z.codePointAt(0));
console.log('z'.codePointAt(0));

// UTF-16 characters from 65 to 220

let strUTF = '';

for (let i = 65; i< 220; i++) {
  strUTF += String.fromCodePoint(i);
}
    
console.log(strUTF);

// surrogated pairs
console.log('𝒳'[0]);
console.log('𝒳'[1]);

// diacritical marks
console.log('S\u0307\u0323');


// ARRAY
// pop()

let fruits = ['apple', 'pear', 'orange', 'cherry'];

console.log(fruits.pop());
console.log(fruits.at(-1));

// iterating over array items
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// multidimensional arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[2][2]);

let object = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
};

// array-like objects

let arrayNormal = [1, 2];

let arrayLike = {
  0: 'first',
  1: 'second',
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log(arrayNormal.concat(arrayLike));

// iterate: forEach

['bilbo', 'gandalf', 'nazgul'].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

// searching in array

let arraySource = [1, 0, false];

console.log(arraySource.indexOf(0));
console.log(arraySource.indexOf(false));
console.log(arraySource.indexOf(null));
console.log(arraySource.indexOf(NaN));

console.log(arraySource.includes(1));
console.log(arraySource.includes(NaN));

// find(), for a single element
let users = [
  {id: 0, name: 'kelley'},
  {id: 1, name: 'john'},
  {id: 2, name: 'mary'},
  {id:3 , name: 'kelley'}
];

let user = users.find(item => item.id == 1);

console.log(user);

console.log(users.findIndex(user => user.name == 'kelley'));
console.log(users.findLastIndex(user => user.name == 'kelley'));

// filter(), for many elements

let someUsers = users.filter(user => user.id < 3);

console.log(someUsers);

// map()
let elements = ['bilbo', 'gandalf', 'nazgul'];
let lengths = elements.map(elem => elem.length);

console.log(lengths);

// sort()
let arraySort = [1, 2, 15, 16, 21];
let arrayNotOrdered = [6, 20 ,2, 40, 4, 6, 10, -1, 3];

arraySort.sort();
console.log(arraySort);

// custom order function for sort
function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

function shorterCompare(a, b) {
  return a - b;
}

arraySort.sort(compare);
console.log(arraySort);
console.log(arrayNotOrdered.sort(compare));

console.log([1, -2, 15, 2, 0, 8].sort(function(a, b) {
  console.log(a + ' <> ' + b);
  return a - b;
}));

let arrayShorterCompare = arrayNotOrdered.sort(shorterCompare)

console.log(arrayShorterCompare);

// arrow functions in sort()
arrayNotOrdered.sort((a, b) => a - b);

// localeCompare
let countries = ['Österreich', 'Andorra', 'Vietnam'];

console.log(countries.sort((a, b) => a > b ? 1 : -1));
console.log(countries.sort((a, b) => a.localeCompare(b)));

// split() delimiter is a comma and space
let names = 'bilbo, gandalf, nazgul';

let arrayFromString = names.split(', ');

for (let name of arrayFromString) {
  console.log(`a message to ${name}`);
}

// reduce

let arrayReduce = [1, 2, 3 ,4 ,5];
let result = arrayReduce.reduce((accum, elem) => accum + elem, 0);

console.log(result);

// Symbol.iterator
let range = {
  from: 1,
  to: 5
};

range[Symbol.iterator] = function() {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return {done: false, value: this.current++};
      } else {
        return {done: true};
      }
    }
  }
}

for (let num of range) {
  console.log(num);
}

// optimized

let rangeOptimized = {
  from: 1,
  to: 10,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return {done: false, value: this.current++};
    } else {
      return {done: true};
    }
  }
};

for (let num of rangeOptimized) {
  console.log(num);
}

// calling iterator explicitly

let strExplicit = 'hello';

let iterator = strExplicit[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value);
}

// array-like
let arrLike = {
  0: 'hello',
  1: 'world',
  length: 2
};

let arrReal = Array.from(arrLike);

console.log(arrReal.pop());

// additional Arra.from arguments

let arrayFromAdditional = Array.from(range, num => num * num);

console.log(arrayFromAdditional);

// internal algorithm of Array.from
// Array.from(str) is equal to:
let emojiStr = '𝒳😂';

let chars = [];
for (let char of str) {
    chars.push(char);
}

// surrogate-aware slice
function slice(str, start, end) {
  return Array.from(str).slice(start, end).join('');
}

let strEmoji = '𝒳😂𩷶';

console.log(slice(strEmoji, 1, 2));

//

// MAP SET

//map
let map = new Map();

map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');

console.log(map.size);

// using an object as a map key
let john = {name: 'john'};

map.set(john, 123);

// chaining map.set calls
map.set('2', 'str2')
.set(2, 'num2')
.set(false, 'bool2');

// iteration over map
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50]
]);

// iterates over keys
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable);
}

// iterates over values
for (let amount of recipeMap.values()) {
  console.log(amount);
}

// iterates over entries
// same as recipeMap.entries()
for (let entry of recipeMap) {
  console.log(entry) 
}

// forEach
recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value} of ${map}`);
})

let mapInitialized = new Map([
  ['1', 'string1'],
  [1, 'number1'],
  [true, 'boolean1']
]);

let obj = {
  name: 'rafael',
  age: 30
};

let mapFromPlain = new Map(Object.entries(obj));

let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

console.log(prices.orange);

let objFromMap = Object.fromEntries(map);

// iteration over set
// for..of loop
console.log('for of loop');

let setIterate = new Set(['oranges', 'apples', 'bananas', 'kiwi']);

for (let value of setIterate ) console.log(value);

// forEach 
console.log('forEach');

setIterate.forEach((value, valueAgain, setIterate) => {
  console.log(value);
})
//valueAgain and setIterate are just there so forEach is compatible to be applied on a map

//

//WEAKMAP WEAKSET

//object gets stored in memory, a variable references the object,
let rafael = {name: 'rafael'};

// the object is removed from memory
rafael = null;

// properties are still reachable while the object is reachable
rafael = {name: 'rafael'};
let arrayForRafael = [rafael];
rafael = null; 
// null overwrites the reference, but object is still reachable inside arrayForRafael

// object stored as a key of a map
rafael = {name: 'rafael'};

let mapForRafael = new Map();
mapForRafael.set(rafael, '...');

rafael = null;

// WeakMap
let weakMap = new WeakMap();
let objAsKey = {};

// would throw an error
// weakMap.set('test', 'Whoops');

weakMap.set(objAsKey, 'ok');

// objAsKey = null; would remove it from memory
// even if the object is still stored as a property

console.log(weakMap.get(objAsKey));

// problem weakmap solves
// counting function with map
let visitsCountMap = new Map();

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let kelley = {name: 'kelley'};

console.log(countUser(kelley));
// undefined?

// Object.methods
let userObject = {
  name: 'rafael',
  age: 29
};

console.log(Object.keys(userObject));
console.log(Object.values(userObject));
console.log(Object.entries(userObject));

// iterate over property values
for (let value of Object.values(userObject)) {
  console.log(value);
}

let pricesObject = {
  banana: 1,
  orange: 2,
  meat: 4
};

let doublePrices = Object.fromEntries(
  Object.entries(pricesObject).map(entry => [entry[0], entry[1] * 2])
);
//

// DESTRUCTURING ASSIGNMENT

//array destructuring

let arrayToBeDestructured = ['rafael', 'reyes'];

let = [firstName, lastName] = arrayToBeDestructured;

console.log(firstName);
console.log(lastName);

// destructuring works with any iterable
let [first, b, c] = 'abc';
console.log(first);

// looping with Object.entries(obj)
let userLoop = {
  name: 'rafael',
  age: 29
};

for (let [key, value] of Object.entries(userLoop)) {
  console.log(`${key}: ${value}`);
}

// looping over [key, value] of a Map
let userMap = new Map();
userMap.set('name', 'rafael')
.set('age', '29');

for (let [key, value] of userMap) {
  console.log(`${key}: ${value}`)
}

// rest operator
let [name1, name2, ...rest] = ['julius', 'caesar', 'consul', 'of the roman republic'];

console.log(name1);
console.log(name2);
console.log(rest[0]);

// default values
let [name = 'guest', surname = 'anonymous'] = ['julius'];

console.log(name);
console.log(surname);

let options = {
  title: 'menu',
  width: 100,
  height: 200
};

let {title, width, height} = options;

console.log(title);

// assigning properties to a variable with different name

let {width: w, height: h, title: heading} = options;

// combining both colon and assignment
let {width: wi = 100, height: he = 200, title: tit} = options;

// extracting only what we need
let {title: titl} = options;

console.log(titl);

// wrap destructuring in parentheses
let declared1, declared2, declared3;

({title: declared1, width: declared2, title: declared3} = {title: 'menu', width: 200, height: 100});

// nested destructuring

let optionsDestructure = {
  size: {
    width: 100,
    height: 200
  },
  items: ['cake', 'donut'],
  extra: true
};

let {
  size: {
    width: firstSize,
    height: secondSize,
  },
  items: [item1, item2],
  title: titleDestructured = 'menu'
} = optionsDestructure;

//

// DATE OBJECT

// new Date()
let now = new Date();

let jan01_1970 = new Date(0);
console.log(jan01_1970);

let jan02_1970 = new Date(24 * 3600 * 1000);
console.log(jan02_1970);
 
// date before 01.01.1970
let dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(dec31_1969);

// parsing a date string
let date2 = new Date('2022-09-23');
console.log(date2);

let date3 = new Date(2022, 08, 23, 11, 48, 0, 0);
console.log(date3);

// local time zone vs UTC+0
let dateSource = new Date();
console.log(dateSource.getHours());
console.log(dateSource.getUTCHours());

// getting future days referencing current date
let date4 = new Date();
date4.setSeconds(date4.getSeconds() + 70);
console.log(date4)
    
// side effect of converting Date to timestamp
let start = new Date();
// can be replaced with start = Date.now()

for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}

let end = new Date();
// can be replaced with end = Date.now()

console.log(`the Loop took ${end - start} ms`);

//

//

//JSON.stringify
let student = {
  name: 'rafael',
  age: 29,
  isAdmin: false,
  courses: ['HTML', 'CSS', 'JS'],
  spouse: null
};

let json = JSON.stringify(student);
console.log(json);

// nested objects 
let meetup = {
  title: 'conference',
  room: {
    number: 23,
    participants: ['john', 'ann']
  }
};

console.log(JSON.stringify(meetup));

// no circular references allowed
let room = {
  number: 23
};

let meetUp = {
  title: 'conference',
  participants: ['rafael', 'kelley']
};

meetUp.place = room;
room.occupiedBy = meetUp;

//replacer
let roomReplacer = {
  number: 23
};

let meetupReplacer = {
  title: 'conference',
  participants: [{name: 'rafael'}, {name: 'kelley'}],
  place: roomReplacer
}

roomReplacer.occupiedBy = meetupReplacer;

console.log(JSON.stringify(meetupReplacer, ['title', 'participants']))
// name is not included because is not in the array

console.log(JSON.stringify(meetupReplacer, ['title', 'participants', 'place', 'name', 'number']));
console.log('REPLACER AS A FUNCTION');
console.log(JSON.stringify(meetup, function replacer(key, value) {
  console.log(`${key}: ${value}`);
  return (key == 'occupiedBy') ? undefined : value;
}))

// custom toJSON
    

// converting a string into an object
// strigified array
let numbers = '[0, 1, 2, 3]';

numbers = JSON.parse(numbers);

console.log(numbers);

//nested objects
let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let userJSON = JSON.parse(userData);

console.log(userJSON.friends[1]);

// getting a stringified object from a server
let strFromServer = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// deserialize it, turn it into an object
let meetupDeserialized = JSON.parse(strFromServer, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

console.log(meetupDeserialized.date.getDate());

// nested objects

let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});
    
console.log(schedule.meetups[1].date.getDate());
//




  

