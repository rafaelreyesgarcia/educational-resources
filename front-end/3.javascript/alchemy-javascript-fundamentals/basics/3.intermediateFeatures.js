/* LOGICAL OPERATORS */

// logical OR operator

function willEat(hasPizza, hasDonuts, hasCookies) {
  if (hasPizza || hasDonuts || hasCookies) {
    return true;
  } return false;
}

// default operator

function double(x) {
  return (x * 2) || (0 * 2);
}
// return 0 if x is undefined

// actual solution
function doubleSolution(x) {
  return (x || 0) * 2;
}

// can breathe 

function canBreathe(isConnected, hasOxygen, aboveWater) {
  return aboveWater || (isConnected && hasOxygen);
}

// actual solution

function canBreatheSolution(isConnected, hasOxygen, aboveWater) {
  return (isConnected && hasOxygen) || aboveWater;
}

console.log(canBreathe(false, false, true)); // true
console.log(canBreathe(true, false, true)); // true
console.log(canBreathe(true, true, true)); // true

// friendName (guard operator &&)

function friendName(friend) {
  return friend && friend.name;
}

// NOT operator !

function carCrossing(aCrossing, bCrossing) {
  return aCrossing && !bCrossing || bCrossing && !aCrossing;
}

/* EXCEPTIONS */

// throw an error

function throwError() {
  throw new Error('this is an error');
}

function catchError(fn) {
  try {
    fn();
  } 
  catch (error) {
    console.log('something went wrong');
  }
}

// return error

function catchError(fn) {
  try {
    fn();
  }
  catch (error) {
    return error;
  }
  return false;
}

// number conversion

function toNumber(string) {
  return Number(string) || 0;
}

// string conversion

function combineToString(a, b) {
  return a.toString() + b.toString();
}

// boolean conversion

function isTruthy(a) {
  return Boolean(a);
}

// loose equals

function looseEquals(a, b) {
  return a == b;
}

// object to JSON

function toJSON(obj) {
  return JSON.stringify(obj);   
}

const personJSON = `{
  "name": "rafael",
  "age": 29,
  "isReal": true
}`;

console.log(JSON.parse(personJSON));

function eitherNotBoth(num) {
  return num % 3 === 0 && !(num % 5 === 0) || num % 5 === 0 && !(num % 3 === 0);
}

// actual solution
function eitherNotBothSolution(num) {
  if ((num % 3 === 0 && num % 5 !== 0) || (num % 5 === 0 && num % 3 !== 0)) {
      return true;
  } else {
      return false;
  }
}

// fizz (3) buzz (5)

function fizzBuzz(numbers) {
  let str = "";
  for(let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      if (number % 3 === 0) {
          str += "fizz";
      }  
      if (number % 5 === 0) {
          str += "buzz";
      } 
  }
  return str;
}

const numbers = [1, 3, 5, 9, 11, 12, 20];

console.log(fizzBuzz(numbers)); // returns "fizzbuzzfizzfizzbuzz"

