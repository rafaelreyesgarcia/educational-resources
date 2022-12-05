/* 
functional programming

INPUT -> PROCESS -> OUTPUT

isolated functions (no dependence on state)

pure functions with limited or without side effects

returns a value
*/

const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();

    teaCups.push(teaCup);
  }

  return teaCups;
}

const tea4TeamFCC = getTea(40);

/* 
functional programming terminology

callbacks are functions that are passed into another function to decide the invokaction.

callbacks are functions that can be assigned to a variable and passed as arguments.

can also be returned from functions like any other value.

first class functions have this behavior

lambdas are functions that are passed in to or returned from another function
*/
getTeaDynamic = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();

    teaCups.push(teaCup);
  }

  return teaCups;
}

const prepareGreenTea = () => 'greenTea';

const prepareBlackTea = () => 'blackTea';

const tea4Green = getTeaDynamic(prepareGreenTea, 27);
const tea4Black = getTeaDynamic(prepareBlackTea, 13);

/* 
hazards of using imperative code

imperative tense is used to give commands

statements change the state of the program (updating a variable)

writing a for loop to iterate over array indices

in programming a declarative approach is when a command is given by calling a method or function

command invocation? 

tabs is an array of website titles.
*/

const Window = function(tabs) {
  this.tabs = tabs;
};

// joining two windows into one
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);

  return this;
}

// open a tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push(tab);
  return this;
}

// close a tab
Window.prototype.tabClose = function(index) {
  const tabsBeforeIndex = this.tabs.slice(0, index);
  const tabsAfterIndex = this.tabs.slice(index + 1);

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);

  return this;
}

// creating 3 windows
const workWindow = new Window([
  'gmail',
  'inbox',
  'work mail',
  'docs',
  'freeCodeCamp'
]);

const socialWindow = new Window([
  'FB',
  'gitter',
  'reddit',
  'twitter',
  'medium'
]);

const videoWindow = new Window(
  ['netflix', 'youtube', 'vimeo', 'vine']
);

const finalTabs = socialWindow.tabOpen('new tab')
  .join(videoWindow.tabClose(2))
  .join(workWindow.tabClose(1)
  .tabOpen('new tab'));

console.log(finalTabs.tabs);

// avoid mutations and side effects using functional programming

/* 
core principle of functional programming is to not change things (inputs)
changes lead to bugs.

easier to prevent bugs when you know functions don't change anything

changes are called mutations

outcomes of mutations are called side effects


*/

let mutated = 4;
let fixedValue = 4;

function incrementerMutation() {
  /* 
  fixedValue++;
  return fixedValue;
  */
  return ++mutated;
}

console.log(incrementerMutation(fixedValue));

function functionalIncrementer() {
  let incrementedValue = fixedValue;
  return ++incrementedValue;
}

console.log(functionalIncrementer());

function incrementerFunctional() {
  return fixedValue + 1;
}

console.log(incrementerFunctional());

// pass arguments to avoid external dependence in a function

/* 
always declare dependencies explicitly

if a function depends on a variable or object being present,
pass that variable or object directly into the function as argument

the function will always produce the same output for the same set of inputs

*/

function incrementerExplicit(value) {
  return ++value;
}

console.log(incrementerExplicit(fixedValue));

// refactor global variables out of functions

/* 
dont alter a variable or object,
create new ones and return them if needed

*/

const bookList = [
  "The Hound of the Baskervilles", 
  "On The Electrodynamics of Moving Bodies", 
  "Philosophiæ Naturalis Principia Mathematica", 
  "Disquisitiones Arithmeticae"
];

function add(array, bookName) {
  let bookListCopy = [...array];
  bookListCopy.push(bookName);
  return bookListCopy;
}

console.log(add(bookList, "A Brief History of Time"))

function remove(array, bookName) {
  const book_index = array.indexOf(bookName);
  const bookListCopy = [...array];

  if (book_index >= 0) {
    bookListCopy.splice(book_index, 1);

    return bookListCopy;
  }
}

// use map method to extract data from an array

/* 
functional programming is based around a theory of functions.

functions can be passed as arguments and returned from other functions.

functions are first class objects in javascript, allowing them to be used like normal objects,
behving like objects (being passed or returned)

Array.prototype.map()

iterates over elements of an array, returning a new array with the results of invoking the callback function on each element of the input array.

callback receives 3 arguments
1 current element being processed
2 index of the element being processed
3 array which map method was called
*/

const aListOfUsers = [
  {name: 'rafael', age: 29},
  {name: 'Amy', age: 34},
  {name: 'camperCat', age: 20}
];

const names = aListOfUsers.map(user => user.name);

console.log(names);

// challenge

/* 
watchList shouldn't change
for loop should be avoided
map should be used
*/

const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

const ratingsIterative = [];
for (let i = 0; i < watchList.length; i++) {
  ratingsIterative.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
}

console.log(JSON.stringify(ratingsIterative));

// functional approach
// let functionalArray = [...watchList];
// let ratings = [];
// const ratingsFunctional = functionalArray.map(movie => (
//   ratings.push({title: movie["Title"], rating: movie["imdbRating"]})
// ));

let ratingsFunctional = [];
let watchListCopy = [...watchList];
watchListCopy.map(movie => (
  ratingsFunctional.push({title: movie["Title"], rating: movie["imdbRating"]})
));

console.log(JSON.stringify(ratingsFunctional));

// solution 1
const ratings1 = watchList.map(movie => ({
  title: movie["Title"],
  rating: movie["imdbRating"]
}));

// solution 2
/* 
destructuring properties as parameters 
*/
const ratings2 = watchList.map(({Title: title, imdbRating: rating}) => ({title, rating}));

// implement map on a prototype
/* 
applying Array.prototype.map() returns an array of the same length as the one it was called on.

doesn't alter the original array as long as the callback doesn't

map is a pure function, the output depends solely on its inputs.

takes a function as its argument.

write own Array.prototype.myMap() that behaves like the real one.


*/

// solution 1
Array.prototype.myMap1 = function(callback) {
  const newArray = [ ];

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }

  return newArray;
};

// solution 2
Array.prototype.myMap2 = function(callback) {
  const newArray = [];

  this.forEach(a => newArray.push(callback(a)));

  return newArray;
};

// use filter method to extract data from array
/* 
Array.prototype.filter()

calls a function on each element of an array and returns a new array containing only elements that evaluate to truthy

a value is passed to the Boolean() contructor to return either true or false

callback function accepts three arguments

1. current element being processed
2. index of that element.
3. array upon which the filter method was called
*/

const unfilteredUsers = [
  {name: 'john', age: 34},
  {name: 'amy', age: 20},
  {name: 'camperCat', age: 10}
];

const usersUnder30 = unfilteredUsers.filter(user => user.age < 30);

console.log(usersUnder30);

const filteredList = watchList.filter(movie => Number(movie["imdbRating"]) >= 8.0)
  .map(({Title: title, imdbRating: rating }) => ({
    title,
    rating
  }));

console.log(filteredList);

// implementing the filter method on a prototype

Array.prototype.myFilter = function(callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      newArray.push(this[i]);
    }
  }

  return newArray;
}

// solution 1
Array.prototype.myFilter1 = function(callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (Boolean(callback(this[i])) === true) {
      newArray.push(this[i]);
    }
  }
};

// solution 2
Array.prototype.myFilter2 = function(callback) {
  const newArray = [];

  for (const elem of this) {
    if (callback(elem)) newArray.push(elem);
  }

  return newArray;
};

// return part of an array using the slice method

/* 
,returns copy of certain elements 

1. index where to begin the slice
2. index where to end the slice (non-exclusive)

leaving arguments empty is an easy way to copy all elements of an array

slice does not mutate the original array
*/

function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}

const inputAnim = [
  "cat",
  "dog",
  "tiger",
  "zebra",
  "ant",
];

sliceArray(inputAnim, 1, 3);

// remove elements from an array using slice instead of splice
/* 
splice can remove items and keep the rest of the array

1. index where to start the removal
2. number of items to remove

default is to remove items through the end

splice does mutate the original array
*/

function nonMutatingSplice(cities) {
  // return cities.splice(3);
  return cities.slice(0, 3);
}

// combine two arrays using the concat method

/* 
concatenation means to join items

concat method is offered by js for strings and arrays

concatenating arrays does not mutate either of input arrays.
*/

function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}

const first = [1, 2, 3];
const second = [4, 5];

nonMutatingConcat(first, second);

// add elements to end using concat instead of push

/* 
push adds items to the end of the same array it is called on, mutating the source array

concat merges new items to the end of the array without mutating either side.
*/

function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}

// use reduce method to analyze data
/* 
Array.prototype.reduce()

reduce method allows more general forms of array processing

reduce iterates over each item and returns a single value

callback function accepts four arguments

1. accumulator (gets assigned the return value of the callback function from previous iteration)
2. current element being processed
3. index of that element
4. array upon which reduce is called

in addition to a callback function, reduce takes the initial value of the accumulator
if not used, the first iteration is skipped and the second gets passed the first element of the array as the accumulator

*/

const someUsers = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = someUsers.reduce((sum, user) => sum + user.age, 0);

const usersObj = someUsers.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});

function averageRatingsNolan(array) {
  let filteredMovies = array.filter(movie => movie['Director'] === 'Christopher Nolan')
  .map(movie => Number(movie["imdbRating"]))
  .reduce((sumRating, rating) => {
    return (rating + sumRating)
  }, 0);

  return filteredMovies / array.filter(movie => movie.Director === 'Christopher Nolan')
    .map(movie => movie.imdbRating).length;
}

console.log(averageRatingsNolan(watchList));

function getRating(watchList) {
  const nolanData = watchList
    .reduce((data, {Director: director, imdbRating: rating}) => {
      if (director === 'Christopher Nolan') {
        data.count++;
        data.sum += Number(rating);
      }
      return data;
    }, {sum: 0, count: 0});
  
  const averageRating = nolanData.sum / nolanData.count;
  return averageRating;
}

// use higher-order functions map, filter or reduce to solve complex problems

const squareList = arr => {
  return arr.filter(elem => elem >= 0 && elem % parseInt(elem) === 0)
    .map(elem => Math.pow(elem, 2));
}

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);

console.log(squaredIntegers);

console.log(parseInt(4.8));
console.log(4.8 % 4);

// solution 2 

const squareList2 = arr => {
  return arr.reduce((sqrIntegers, num) => {
    return Number.isInteger(num) && num > 0
      ? sqrIntegers.concat(num * num)
      : sqrIntegers;
  }, [])
}

// sort an array alphabetically using the sort method

/* 
sorts elements of an array according to callback function

javascript default sorting method is by unicode point value

best practice to provide a callback function to sort the array items.

this callback function is called compare function in sorting

the array elements are sorted according to the returned value from the function

return value less than 0, then a will come before b

return value above 0 then b will come before a


*/

function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

console.log(ascendingOrder([1, 5, 2,  3, 4]));

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b
      ? 0
      : a < b
        ? 1
        : -1;
  });
}

console.log(reverseAlpha(['l', 'h', 'z','b','s']));

function alphabeticalOrder(arr) {
  return arr.sort((a, b) => {
    return a === b 
      ? 0
      : a < b
        ? -1
        : 1;
  });
}

console.log(alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g']));

// return a sorted array without changing the original array

/* 
sort does mutate the original array

to avoid mutation, first concatenate an empty array to the one being sorted, as concat doesn't alter source arrays
slice also returns a new array
*/

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  let arrCopy = arr.concat([]);

  return arrCopy
    .sort((a, b) => {
      return a === b
        ? 0 
        : a < b
          ? -1
          : 1
    })
    .concat([]);
}

console.log(nonMutatingSort(globalArray));
console.log(globalArray);

// solution 1 

function nonMutatingSort1(arr) {
  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
}

// split a string into an array using the split method

/*
splits a string into an array of strings

argument is the delimiter, a character used to break up the string or regexp

delimiter == space == array of words
delimiter == empty string == array of characters

strings are immutable so this method creates an array to be able to process and mutate a string


*/

const string = 'hello world!';
const bySpace = string.split(' ');
const otherString = 'how9are7you2today';
const byDigits = otherString.split(/\d/);

function splitify(str) {
  return str.split(/\W/);
}

console.log(splitify('hello world,i-am code'));

// combine an array into a string using join

function sentensify(str) {
  return str.split(/\W/)
    .join(" ");
}

console.log(sentensify("May-the-force-be-with-you"));

// apply functional programming to convert strings to URL slugs

function urlSlug(title) {
  return title.toLowerCase()
    .trim()
    .split(/\s+/)
    // .split(/\W/)
    // .split(" ")
    .join('-');
}

console.log(urlSlug(' A Mind Needs Books Like A Sword Needs A Whetstone'));

// solution 2 

var globalTitle = 'Winter is coming';

function urlSlug2(title) {
  return title.split(" ")
    .filter(substr => substr !== "")
    .join('-')
    .toLowerCase();
}

console.log(urlSlug2(globalTitle));

// use every method to evaluate a condition against every element

/* 
returns true if all elements pass an arbitrary test
similar to chained && 
*/

const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
  return currentValue < 10;
});

function checkPositive(arr) {
  return arr.every(elem => elem >= 0);
}

console.log(checkPositive([1, 2, 3, -4, 5]));

// use some method to check if any of the elements meet a conditiion

/* 
as long as an element checks true, it all returns true
similar to || 
*/

const someNumbers = [10, 50, 8, 220, 110, 11];

console.log(someNumbers.some(function(elem) {
  return elem < 10;
}));

function checkPositiveSome(arr) {
  return arr.some(elem => elem >= 0);
}

// introduction to currying and partial application

/* 
the arity of a function is the number of arguments it requires
currying a function means to convert a function of N arity into N functions of arity 1

useful if arguments can't be supplied at once.

saves each function call in a variable

partial application is applying a few arguments to a function at the time and returning another function to apply more arguements.


*/

function uncurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried2 = x => y => x + y;

// a call to curried, would return a function and 

curried(1)(2);

const funcForY = curried(1);
console.log(funcForY(2));

function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);

partialFn(10);

function add(x) {
  return function(y) {
    return function (z) {
      return x + y + z;
    }
  }
}

console.log(add(10)(20)(30));

