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


