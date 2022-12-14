/* DATA STORAGE */

// startsWithX

function startsWithX(string) {
  if (string[0] === 'x' || string[0] === 'X') {
    return true;
  }

  return false;
}

console.log(startsWithX('xenon'));

console.log('a' === 'A');
console.log('a' === 'a');
console.log('a' === 'a ');

console.log('abc' < 'apple');

console.log(+'a');

// actual solution

function startsWithX(string) {
  if(string[0].toLowerCase() === "x") {
      return true;
  }
  return false;
}

// ends with X

function endsWithX(string) {
  if (string[string.length - 1].toLowerCase() === 'x') {
    return true;
  }
  return false;
}

console.log(endsWithX('neon'));

function isAllX(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() !== 'x') {
      return false;
    }
  }
  return true;
}

console.log(isAllX('Xxxpizza'));

// indexOf

function findFirstX(string) {
  return string
    .toLowerCase()
    .indexOf('x');
}

console.log(findFirstX('somexthen'));

// actual solution

function findFirstXSolution(string) {
  return string.indexOf('x');
}

// split at x

function splitAtX(string) {
  let x = string.indexOf('x');
  let first = string.slice(0, x);
  let second = string.slice(x - (string.length - 1));

  if (first.length > second.length) {
      return first;
  } else {
      return second;
  }
}

// actual solution
function splitAtXSolution(string) {
  const index  = string.indexOf('x');

  const first = string.slice(0, index);
  const second = string.slice(index + 1);

  return (first.length > second.length) ? first : second;
}

console.log(splitAtX('before the x is long'));
console.log(splitAtX('10xdeveloper'));
console.log(splitAtX('Happyxdays'));

/* ARRAYS */

// hasOne

// return true if any of the array elements is the number 1, false otherwise

function hasOne(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      return true;
    }
  }
  return false;
}

console.log( hasOne([1,2,3]) ); // true
console.log( hasOne([1,1,1]) ); // true
console.log( hasOne([4,5,6]) ); // false

// sum of even values

function sumEven(array) {
  let evenNumbers = 0;

  for (let i = 0; i < array.length; i++) {
    let remainder = array[i] % 2;
    let isEven = remainder === 0;
    if (isEven) {
      evenNumbers += array[i];
    }
  }

  return evenNumbers;
}

console.log(sumEven([1]) ); // 0
console.log(sumEven([1, 2, 3, 4]) ); // 6
console.log(sumEven([1, 1, 4, 1, 1]) ); // 4

function sumEvenSolution(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
          sum += array[i];
      }
  }
  return sum;
}

// find unique elements

function unique(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

console.log(unique([1, 2, 2, 3, 4, 5, 5]));

// addOne

function addOne(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] += 1;
  }
  return array;
}

console.log(addOne([1, 2, 3]))

// remove occurrences

function removeOccurrences(array, num) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === num) {
      array.splice(i, 1);
    }
  }
  return array;
}

console.log(removeOccurrences([1, 2, 4, 3, 4, 5], 4));

/* OBJECTS */

// create a pizza order

const orderTest = {
  pizzas: 5,
  extraCheese: true,
  deliveryInstructions: 'deliver at front door'
};

// find the number of pizzas

const order = {
  pizzas: 3,
  extraCheese: true,
  deliveryInstructions: "Round the back, please!",
};

function numberOfPizzas(order) {
  return order.pizzas;
}

// array of objects

const ordersArray = [
  { pizzas: 3 },
  { pizzas: 5 },
  { pizzas: 10 }
];

function objectsNestedInArray(orders) {
  let pizzas = 0;
  for (let i = 0; i < orders.length; i++) {
    pizzas += orders[i].pizzas;
  }
  return pizzas;
}

const totalPizzas = objectsNestedInArray(ordersArray);
console.log( totalPizzas ); // 18

// typed orders

const ORDER_TYPES = {
  PIZZA: 0,
  BURGER: 2,
  SEAFOOD: 1,
  SALAD: 0
}

const orders = [
  { pizzas: 3, type: ORDER_TYPES.PIZZA },
  { wings: 12, type: ORDER_TYPES.WINGS },
];

function numberOfPizzas(orders) {
  let pizzas = 0;
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].type === ORDER_TYPES.PIZZA) {
      pizzas += orders[i].pizzas;
    }  
    
  }
  return pizzas;
}

const total = numberOfPizzas(orders);
console.log( total ); // 3

// number of keys

const car = {
  doors: 4,
  engine: 1,
  tires: 3
}

function numberOfKeys(object) {

  const arrayOfKeys = Object.keys(object);

  return arrayOfKeys.length;
}

console.log(numberOfKeys(car));

// remove secret
function removeSecret(object) {
  delete object.secret;
}

// PRACTICE

// shortest string

function shortestString(str1, str2) {
  return str1.length > str2.length ? str2 : str1;
}

console.log(shortestString('elephant', 'mouse'));

// half value

function halfValue(numbers) {
  let halfValue = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      halfValue.push((numbers[i] + 1) / 2);
    } else {
      halfValue.push(numbers[i] / 2);
    }
  }

  return halfValue;
}

console.log( halfValue([2,2,2]) ); // [1,1,1]
console.log( halfValue([3,4,5]) ); // [2,2,3]

// actual solution

function halfValueSolution(numbers) {
  const newArr = [];
  
  for(let i = 0; i < numbers.length; i++) {
      newArr[i] = Math.round(numbers[i] / 2);
  }

  return newArr;
}

// count the C's

function countC(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'c') {
      count ++;
    }
  }

  return count;
}


console.log( countC('ccc') ); // 3
console.log( countC('cupcake') ); // 2
console.log( countC('Carrot cake') ); // 2

// count vowels

function countVowels(str) {
  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (vowels[j] === str[i].toLowerCase()) {
        count++;
      }
    }
  }

  return count;
}

console.log(countVowels('something'));

// actual solution

const vowels = ["a", "e", "i", "o", "u"];

function countVowelsSolution(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i].toLowerCase())) count++;
    }

    return count;
}

// reverse a string

function reverse(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }

  return reverse;
}

console.log(reverse('cat'));

// palindrome

function isPalindrome(string) {
  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }

  if (string === reverse) {
    return true;
  } return false;
}

console.log(isPalindrome('pop'));
console.log(isPalindrome('kayak'));
console.log(isPalindrome('racecar'));

console.log(isPalindrome('bear'));
console.log(isPalindrome('pizza'));

// actual solution

function isPalindromeSolution(string) {
  return string === reverseSolution(string);
}

function reverseSolution(string) {
  let newStr = "";

  for (let i = string.length - 1; i >= 0; i--) {
      newStr += string[i]
  }

  return newStr;
}

// sum together
// assume both arrays are same length

function sumTogether(arr1, arr2) {
  let sum = [];
  for (let i = 0; i < arr1.length; i++) {
    sum.push(arr1[i] + arr2[i]);
  }
  return sum;
}

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

console.log(sumTogether(arr1, arr2)); // returns [4, 6, 8];

// count the elements

function countElements(elements) {
  let object = {};

  for (let i = 0; i < elements.length; i++) {
    if (!object[elements[i]]) {
      object[elements[i]] = 1;
    } else {
      object[elements[i]] += 1;
    }
  }

  return object;
}

const elements = ["e", "k", "e", "z", "i", "z"];
console.log(countElements(elements)); // returns {e: 2, k: 1, z: 2, i: 1}

// player hand score

function playerHandScore(hand) {
  const faceCards = {
    K: 4,
    Q: 3,
    J: 2
  };
  const handArray = hand.split('');
  let sum = 0;

  for (let i = 0; i < handArray.length; i++) {
    const score = faceCards[handArray[i]];

    sum += score;
  }

  return sum;
}

console.log( playerHandScore("K") ); // 4
console.log( playerHandScore("KJ") ); // 6
console.log( playerHandScore("KQQ") ); // 10 

