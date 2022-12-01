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

