// using split('')

const myFavShow = "stranger things";
const arraySingleCharacters = myFavShow.split("");
console.log(arraySingleCharacters);

const arrayWords = myFavShow.split(" ");
console.log(arrayWords);

const dialogue = "thats-what-she-said";
const arrayDialogue = dialogue.split("-");
console.log(arrayDialogue);

const emojis = "🥰🥰";
const badSplit = emojis.split(/(?:)/);
const goodSplit = emojis.split(/(?:)/u);

console.log(badSplit);
console.log(goodSplit);

// spread syntax

const spreadArray = [...myFavShow];

console.log(spreadArray);

const animal = "🦐🦐";
const animalArray = [...animal];
console.log(animal);

// Array.from(str)

const arrayFrom = Array.from(myFavShow);

console.log(arrayFrom);

const moreEmojis = "😎😎";
const emojiArray = Array.from(moreEmojis);

console.log(emojiArray);

// Object.assign([], str)
/* 
copies all properties from one or more source object, to a target object
performs deep copy of the properties (nested properties are copied)

can't separate emoji characters 
*/

const assignedArray = Object.assign([], myFavShow);
const assignedEmojis = Object.assign([], moreEmojis);

console.log(assignedArray);
console.log(assignedEmojis);

// for loop and array.push()

const arr = [];
for (const char of myFavShow) {
  arr.push(char);
}
console.log(arr);

const anotherArr = [];
const multipleEmojis = "😀😁🤔";

for (const char of multipleEmojis) {
  anotherArr.push(char)
}

console.log(anotherArr);

// Array.prototype.slice.call('string')
// can't slice emojis properly

const sliceCall = Array.prototype.slice.call('stranger things');
console.log(sliceCall);

const protoSlicedEmoji = Array.prototype.slice.call('😃😅');
console.log(protoSlicedEmoji);