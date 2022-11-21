// convert celsius to fahrenheit
function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

console.log(`30 degrees celsius is: ${convertCtoF(30)} degrees fahrenheit`);

// reverse a string
function reverseString(str) {
  let reverse = "";
  for (let i = str.length -1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

console.log(reverseString("hello"));

function reverseOptimized(str) {
  return str 
    .split('')
    .reverse()
    .join("");
}

// factorialize a number
/* 
recursion refers to a function repeating itself
firstexecution(secondexecution(third(fourth(fifth))))

*/

function recursiveFactorial(num) {
  if (num == 0) {
    return 1;
  } 
  
  return num * recursiveFactorial(num - 1);
}

console.log(recursiveFactorial(5));

function iterativeFactorial(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}

console.log(iterativeFactorial(5));

function anotherRecursiveFactorial(num, factorial = 1) {
  if (num == 0) {
    return factorial;
  }
  return anotherRecursiveFactorial(num - 1, factorial * num);
}

function arrayFactorial(num) {
  return num < 0 ? 1 :
    new Array(num)
      .fill(undefined)
      .reduce((product, _, index) => product * (index + 1), 1);
}

console.log(arrayFactorial(5));

// find longest word in a string

// solution 1
function findLongestWordLength(str) {
  let longestLength = 0;
  let currentLength = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      if (currentLength > longestLength) {
        longestLength = currentLength;
      }
      currentLength = 0;
    } else {
      currentLength++;
    }
  }
  if (currentLength > longestLength) {
    longestLength = currentLength;
  }
  
  return longestLength;
}

let phrase = "the quick brown fox jumped over the lazy dog";

console.log(findLongestWordLength(phrase));

// solution 2
function longestWithSplit(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

console.log(longestWithSplit(phrase));

// solution 3
function longestWithMath(str) {
  return str
    .split(' ')
    .reduce((longest, word) => Math.max(longest, word.length), 0);
}

// solution 4
function longestWithMap(str) {
  return Math.max(...str.split(' ').map(word => word.length));
}

// solution 5
function longestWithRecursion(str) {
  const words = str.split(' ');

  if (words.length == 1) {
    return words[0].length;
  }

  return Math.max(
    words[0].length, longestWithRecursion(words.slice(1).join(" "))
  )
}

console.log(longestWithRecursion(phrase));

let step1 = phrase.split(" ");
console.log(step1);
let step2 = step1.slice(1);
console.log(step2);
let step3 = step2.join(" ");
console.log(step3);

// return largest numbers in arrays

let multiArray = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
];

// own solution

function largestInteger(arr) {
  let largest = [];
  for (let i = 0; i < arr.length; i++) {
    largest.push(Math.max(...arr[i]));
  }
  console.log(largest);
  return largest;
}

console.log(largestInteger(multiArray));

// solution 1

function largestIntegerProcedural(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }
  return results;
}

console.log(largestIntegerProcedural(multiArray));

// solution 2

/* 

map() is used to copy

reduce((accumulator, currentValue, currentIndex, Array) => {
  code block;
}, initialValue);

a value to initialize acumulator when the callback is called
when no initialValue is given, 
acumulator is initialized to the first value in the array
currentValue to the second item
*/

function largestIntegerDeclarative(arr) {
  return arr.map(function(group) {
    return group.reduce(function(prev, current) {
      return current > prev ? current : prev;
    });
  });
}

// solution 3 

/* 
Function.prototype.bind()
creates a new function, when called, this keyword is set to the provided value

Function.prototype.apply() 
allows functions to accept arrays as arguments


*/

function largestDeclarative(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}

console.log([Math.max.apply(null, [9, 43, 20, 6])]);
/* */

// solution 4
/* 
recursive approach
*/

function largestRecursive(arr, finalArr = []) {
  return !arr.length 
    ? finalArr
    : largestRecursive(arr.slice(1), finalArr.concat(Math.max(...arr[0])));
}

console.log('multidimensional [0] sliced: ')
let firstStep = multiArray.slice(1);
console.log(firstStep);
console.log('multidimensional [1] sliced:')
let second = firstStep.slice(1);
console.log(second);
let third = second.slice(1);
console.log('[2] sliced: ');
console.log(third);
let fourth = third.slice(1);
console.log('[3] sliced');
console.log(fourth);

// confirm the ending

// function confirmEnding(str, target) {
//   let confirm;
//   for (let i = 0; i < str.length; i++) {
//     // console.log(str[i]);
//     if (i == str.length - 1) {
//       confirm = str[i] == target ? true : false;
//     }
//     // console.log(`loop count ${i}, confirm: ${confirm}, str.length: ${str.length}`);
//   }
//   return confirm;
// }

// solution 1

/* 
string length minus target length results in the parameter given to slice to begin slicing
once the end of the string is sliced, is then compared with target and return a boolean
*/

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

// solution 2
/* 
create a new regexp /target$/i
case insensitive and the pattern should be at the end of the string 
test method given a string, returns a boolean if the regex is found in the string
*/
function confirmEndingregExp(str, target) {
  let regex = new RegExp(target + '$', "i");
  return regex.test(str)
} 

console.log(confirmEnding('bastian', 'n'));

// solution 3

function confirmEndingAlt(str, target) {
  return str.slice(-target.length) === target
}

console.log(confirmEndingAlt("bastian", "n"));

// repeat a string 

// solution 1 iteration

function repeatStringNumTimes(str, num) {

  let result = '';

  for (let i = 0; i < num; i++) {
    result += str;
  };

  return result;
}

console.log(repeatStringNumTimes('abc', 3));

// solution 2 recursion

function repeatStringNumTimesRecursive(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

// solution 3 recursion ternary instead of if 

function repeatStringNumTimesRecursiveOpt(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : "";
}

// truncate a string

// solution 1
function truncateString(str, num) {
  let truncated = str.slice(0, num);
  return ((str.length > num) 
    ? `${truncated}...` 
    : str
  );
}

let aString = 'a-tisket a-tasket a green and yellow basket';
console.log(aString.length);

console.log(truncateString(aString, 8));

// finders keepers

// solution 1

function findElement(arr, func) {
  
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

console.log(1 % 2 === 0);

// solution 2

function findElement2(arr, func) {
  return arr.find(func);
}

console.log(findElement2([1, 2, 3, 4], num => num % 2 === 0));

// solution 3
function findElement3(arr, func) {
  // indexOf returns the index of the first number that meets the condition in func
  // that index is used to do a value look-up on the given arr

  return arr[arr.map(func).indexOf(true)];
}

// solution 4 - recursive
function findElementRecursive(arr, func) {
  if (arr.length > 0 && !func(arr[0])) {
    return findElementRecursive(arr.slice(1), func);
  } else {
    return arr[0];
  }
}

// boo who

// own solution

function booWhoo(bool) {
  return typeof bool === 'boolean';
}

console.log(booWhoo(true));
console.log(typeof true);

// title case a sentence

// solution 1
function titleCase(str) {
  const newTitle = str.split(' ');
  const updatedTitle = [];

  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }

  return updatedTitle.join(" ");
}

let titleCaseString = 'I\'m a little tea pot';
console.log(titleCase(titleCaseString));

// solution 2

function titleCase2(str) {
  return str  
    .toLowerCase()
    .split(' ')
    .map(elem => elem.replace(elem.charAt(0), elem.charAt(0).toUpperCase()))
    .join(" ");
}

console.log(titleCase2(titleCaseString));

// solution 3

function titleCase3(str) {
  return str
    .toLowerCase()
    .replace(/(^|\s)\S/g, letter => letter.toUpperCase());
    /* 
    regexp
    \S finds all non-whitespace characters
    ^ carat defines that the beginning of the string
    | or 
    \s after any whitespace character
    
    works with international and accented characters
    */
}

console.log(titleCase3(titleCaseString));

// slice and splice

// own solution

function frankenSplice(arr1, arr2, n) {
  // let franken = [...arr2];
  let franken = arr2.slice();

  franken.splice(n, 0, ...arr1);
  // franken.sort((a, b) => a - b);

  return franken;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// solution 1

function frankenSplice1(arr1, arr2, n) {
  let localArray = arr2.slice();

  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }

  return localArray;
}

// solution 2

function frankenSplice2(arr1, arr2, n) {
  let localArr = arr2.slice();

  localArr.splice(n, 0, ...arr1);
  
  return localArr;
}

// solution 3

function frankenSplice3(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

// falsy bouncer

/* 
falsy values
false, null, 0, "", undefined, NaN
*/

// own solution (1) 

function bouncer(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    // if (!!arr[i])
    if (arr[i]) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

console.log(bouncer([7, 'ate', '', false, 9]));

// solution 2

function bouncer2(arr) {
  return arr.filter(Boolean);
  /* 
  filter will invoke a callback function for each element in the array
  will return a new array with elements that pass a check
  this check is evaluated in the callback
  the callback performs Boolean wrapper in each element, which will convert the value to a boolean type
  */
}

// where do I belong

// own solution 
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b);
  return arr.indexOf(num);
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));

// solution 1 iterative

function getIndexToIns1(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }

  return arr.length;
}

// solution 2 

function getIndexToIns2(arr, num) {
  console.log(arr.filter(val => num > val));
  return arr.filter(val => num > val).length;
}

console.log(getIndexToIns2([10, 20, 30, 40, 50], 35));

/* 
35 > 10 true
35 > 20 true
35 > 30 true

35 > 40 false
35 > 50 false
these two elements are filtered out

.length will get the length of the array, which would be the index number where num would be pushed into

this solution doesn't actually modify the input array

*/

// solution 3

function getIndexToIns3(arr, num) {
  let index = arr
    // sorts the array in ascending order
    .sort((curr, next) => curr - next)

    // returns the first index that satisfies the provided testing function
    // once 35 is <= than the current element in the findIndex iteration
    // the index is returned
    .findIndex(currNum => num <= currNum);
  
  return index === -1 ? arr.length : index;
}

console.log(getIndexToIns3([10, 20, 30, 40, 50], 35));

// solution 4

function getIndexToIns4(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

// mutations

// solution 1

function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();

  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }

  return true;

}

console.log(mutation(['Hello', 'hey']));

// solution 2
function mutation2(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}

console.log(mutation2(['Hello', 'hey']));
// let array = ['Hello', 'hey'];
// console.log(array[1].toLowerCase().split('').every(function(letter) {
//   return array[0].toLowerCase().indexOf(letter) !== -1;
// }));

// solution 3

function mutation3([target, test], i = 0) {
  target = target.toLowerCase();
  test = test.toLowerCase();

  return i >= test.length
    ? true
    : !target.includes(test[i])
      ? false
      : mutation3([target, test], i + 1);
}

/* 
recursive process
mutation3(['Hello', 'hey']);

target = 'Hello'.toLowerCase();
test = 'hey'.toLowerCase();

return 

0 >= 3 false so ? true doesn't execute

!'hello'.includes('hey'[0]) is true but ! makes it false so ? false doesn't execute

: mutation3() is called recursively

  RECURSIVE CALL
  process happens again but this time i is 1

  return 1 >= 3 false so ? true doesn't execute

  !'hello'.includes('hey'[0]) is true but ! makes it false so ? false doesn't execute

  : mutation3() is called recursively

    RECURSIVE CALL
    process happens again but this time i is 2

    returns 2 >= 3 false so ? true doesn't execute

    !'hello'.includes('hey'[2]) is false so ! inverts it to true so ? false executes
    
  recursion stops, this call returns false
recursion stops, this call returns false

nested ternaries are not typically recommended in professional code
*/

// chunk monkey

function chunkArrayInGroups(arr, size) {
  let temp = [];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % size !== size - 1) {
      temp.push(arr[i]);
    } else {
      temp.push(arr[i]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);;
  
  return result;
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));

// solution 2 

function chunkArrayInGroups2(arr, size) {
  const newArray = [];

  for (let i = 0; i < arr.length; i += size) {
    newArray.push(arr.slice(i, i + size));
  }

  return newArray;
}

console.log(chunkArrayInGroups2(['a', 'b', 'c', 'd'], 2));

// solution 3

function chunkArrayInGroups3(arr, size) {

  const newArray = [];

  let i = 0;

  while (i < arr.length) {
    newArray.push(arr.slice(i, i + size));
    i += size;
  }

  return newArray;
}

console.log(chunkArrayInGroups3(['a', 'b', 'c', 'd'], 2));

// solution 4

function chunkArrayInGroups4(arr, size) {
  const newArray = [];

  while (arr.length > 0) {
    newArray.push(arr.splice(0, size));
  }

  return newArray;
}

console.log(chunkArrayInGroups4(['a', 'b', 'c', 'd'], 2));

// solution 5 recursive

function chunkArrayInGroups5(arr, size) {
  if (arr.length <= size) {
    return [arr];
  } else {
    return [arr.slice(0, size)].concat(
      chunkArrayInGroups5(arr.slice(size), size)
    );
  }
}

console.log(chunkArrayInGroups5(['a', 'b', 'c', 'd'], 2));

