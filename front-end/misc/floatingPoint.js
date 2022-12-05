/* 
converting 0.1 in binary (base 2) ends up with a repeating pattern after decimal place.

in base 10 when dividing 10 / 3 or 100 / 3

returned result is not exact, floating point numbers aren't 100% accurate

this makes floating point implementation imperfect.


*/

let floatingPoint = 0.1 + 0.2;

console.log(floatingPoint);

console.log(0.7 + 0.1);

// toFixed()
let fixedFloating = parseFloat(floatingPoint.toFixed(2));

console.log(fixedFloating);

// toPrecision() converts to a string representation of a number.

let precisionFloating = parseFloat(floatingPoint.toPrecision(2));

console.log(precisionFloating);

// problem with toPrecision is that it rounds decimal places using a precision of 2 decimal places.

console.log(parseFloat(441.175.toPrecision(2)));


console.log(parseFloat(441.176.toFixed(2)));

let mostPreciseFloating = Math.round(parseFloat((441.176 * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2);

console.log(mostPreciseFloating);

/* 
test script performance
*/

console.group('function 1');
console.time('function 1');
parseFloat(441.175.toPrecision(2));
console.timeEnd('function 1');
console.groupEnd('function 1');





