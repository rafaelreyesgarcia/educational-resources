/* 
currying doesn't call a function, just transforms it.

helper function performs currying for a two-argument function
*/

function curry(f) {
  return function(a) {
    return function (b) {
      return f(a, b);
    };
  };
}

function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

console.log(curriedSum(1)(2));

/* 
result of curry(func) is wrapper function(a)

when curriedSum(1) is invoked, the argument is saved in lexical environment as 'a' and function(b) is returned, another wrapper

then this wrapper is called with (2) as (b) and it passes the call to the original func (sum)
*/

function log (date, importance, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] [${message}]`);
}

// log = _.curry(log);

function advancedCurry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

function threeSum(a, b, c) {
  return a + b + c;
}

let curriedThreeSum = advancedCurry(threeSum);

console.log(curriedThreeSum(1, 2, 3));
console.log(curriedThreeSum(1), (2,3));
console.log(curriedThreeSum(1)(2)(3));

/* 
advancedCurry(threeSum) call, returns the curried wrapper

if args count is the same or more than the original function has in its definition (func.length), calling curried is passed using func.apply

apply calls func (threeSum) with a given this value and arguments

else, we get a partial call, we don't call func (threeSum) yet, 

fn.apply(null, args) is equivalent to fn(...args)
except args is expected to be an array-like object in (null, args)
and expected to be an iterable with parameter spread syntax

currying requires function to have a fixed number of arguments

f(...args) can't be curried f(a, b, c) can

*/



 