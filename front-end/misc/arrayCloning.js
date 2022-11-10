// spread operator (shallow copy)

/* 
iterates over the enumerable elements of an array
iterates over the enumerable properties of an object
*/

let numbers = [1, 2 ,3];
let numbersCopy = [...numbers];
console.log('shallow copy is useful for simple arrays:')
console.log(numbersCopy)

let nestedNumbers = [[1], [2], [3]];
let nestedCopy = [...nestedNumbers];
console.log('multidimensional arrays are only copied by reference not value:')
console.log(nestedCopy);

nestedCopy[0].push(500);
console.log('original:');
console.log(nestedNumbers);
console.log('shallow copy:')
console.log(nestedCopy);

// for loop (shallow copy)

let numbersCopyForLoop = [];

for (let i = 0; i < numbers.length; i++) {
  numbersCopyForLoop[i] = numbers[i];
}

// while loop (shallow)

let whileCopy = [];
let i = -1;

while (++i < numbers.length) {
  whileCopy[i] = numbers[i];
}

console.log(whileCopy);

// Array.map (shallow)

/* 
transforms a set into another type of set while preserving structure
returns an array of the same length

x => x is identity, returns the parameter is given
*/

let mapCopy = numbers.map(x => x);
console.log('copying an array with a map call:');
console.log(mapCopy);

// Array.filter (shallow)

/* 
filter predicate always returns true, then you duplicate the array
*/

let filterCopy = numbers.filter(() => true);
console.log('a copy out of a filter() call: ');
console.log(filterCopy);

// Array.reduce (shallow)

let reduceCopy = numbers.reduce((newArr, elem) => {
  newArr.push(elem);
  return newArr;
}, []);
console.log('a copy out of a reduce() call: ');
console.log(reduceCopy);

// Array.slice (shallow)

let sliceCopy = numbers.slice();
console.log('a copy out of a slice() call: ');
console.log(sliceCopy);

// Array.concat (shallow)

let concatCopy = numbers.concat([]);

console.log('concatenated copy with empty array literal: ');
console.log(concatCopy);

// 10 Array.from (shallow)
/* 
transform any iterable into an array
*/

let fromCopy = Array.from(numbers);
console.log('copy from from() call:');
console.log(fromCopy);

// JSON.parse JSON.stringify (deep copy)

/* 
parse turns object into a string
stringify a string into an object

popular hack

drawbacks
stringify will throw if a recursive data structure is given
stringify will throw if values contain js built-ins (map, set, date, regexp, ArrayBuffer)
stringify will discard functions quietly
*/

let jsonDeepCopy = JSON.parse(JSON.stringify(nestedNumbers));
jsonDeepCopy[0].push(300);

console.log('unaltered original multidimensional array:');
console.log(nestedNumbers);
console.log('deep copy: ');
console.log(jsonDeepCopy);

/* 
deep copy algorithms can recursively call itself when it finds a reference to a nested object,
creating a copy of that nested object as well

Lodash cloneDeep() was popular

structured cloning
can handle cyclical data structures
support built in data types
more robust and faster

drawbacks
discards the object's prototype chain
  if given a class, the copy is a plain object

functions are still quietly discarded

non-cloneables
  error and dom nodes
*/

let structuredCopy = structuredClone(nestedNumbers);
console.log('structured clone: ');
console.log(structuredCopy);